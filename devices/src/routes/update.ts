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
import { DeviceUpdatedPublisher } from '../events/publishers/device-updated-publisher';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.put(
  '/api/devices/',
  requireAuth,
  [
    body('deviceId').not().isEmpty().withMessage('DeviceId is required'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const device = await Device.findOne({ deviceId: req.body.deviceId });

    if (!device) {
      throw new NotFoundError();
    }

    let curDate = new Date()
    let expireDate = new Date()
    expireDate.setDate(curDate.getDate() + 365)

    device.set({
      userId: req.currentUser!.id,
      warrantyExpireAt: expireDate
    });
    await device.save();

    await new DeviceUpdatedPublisher(natsWrapper.client).publish({
        deviceId: req.body.deviceId,
        userId: req.currentUser!.id,
        deviceType: device.deviceType,
        warrantyExpireAt: expireDate.toISOString()
    });
    
    res.send(device);
  }
);

export { router as updateDeviceRouter };
