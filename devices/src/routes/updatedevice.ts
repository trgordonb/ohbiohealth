import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  validateRequest,
  NotFoundError,
  BadRequestError,
  requireAuth,
  NotAuthorizedError,
  Gender
} from '@ohbiohealth/common';
import { Device } from '../models/device';
import { PurchaseProof } from '../models/purchaseproof';

const router = express.Router();

router.put(
  '/api/devices/',
  requireAuth,
  [
    body('deviceId').not().isEmpty().withMessage('DeviceId is required'),
    body('purchaseProofUrl').not().isEmpty().withMessage('Receipt must be uploaded'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const device = await Device.findOne({ deviceId: req.body.deviceId });

    if (!device) {
      throw new NotFoundError();
    }

    const purchaseProof = PurchaseProof.build({
      _id: req.body.deviceId,
      userId: req.currentUser!.id,
      email: req.currentUser!.email,
      purchaseProofUrl: req.body.purchaseProofUrl
    });
    await purchaseProof.save();

    device.set({
      purchaseProof: req.body.deviceId
    })
    await device.save()

    await device.populate('purchaseProof')
    
    res.send(device);
  }
);

export { router as updateDeviceRouter };
