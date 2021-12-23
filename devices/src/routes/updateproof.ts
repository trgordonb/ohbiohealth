import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  validateRequest,
  NotFoundError,
  BadRequestError,
  requireAdmin,
  NotAuthorizedError,
  Gender
} from '@ohbiohealth/common';
import { PurchaseProof } from '../models/purchaseproof';
import { Device } from '../models/device'
import { DeviceUpdatedPublisher } from '../events/publishers/device-updated-publisher';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.put(
  '/api/devices/proofs',
  requireAdmin,
  [
    body('deviceId').not().isEmpty().withMessage('DeviceId is required'),
    body('action').not().isEmpty().withMessage('Action is required'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const proof = await PurchaseProof.findOne({ _id: req.body.deviceId });
    const device = await Device.findOne({ deviceId: req.body.deviceId });

    if (!proof || !device) {
      throw new NotFoundError();
    }

    let curDate = new Date()
    let expireDate = new Date()
    expireDate.setDate(curDate.getDate() + 365)

    proof.set({
      status: req.body.action,
      warrantyExpireAt: expireDate
    })
    await proof.save()

    await new DeviceUpdatedPublisher(natsWrapper.client).publish({
        deviceId: req.body.deviceId,
        userId: proof.userId,
        deviceType: device!.deviceType,
        warrantyExpireAt: expireDate.toISOString()
    });
    
    res.send(proof);
  }
);

export { router as updateProofRouter };
