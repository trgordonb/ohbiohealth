import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAdmin, validateRequest } from '@ohbiohealth/common';
import { Device } from '../models/device';
import { DeviceCreatedPublisher } from '../events/publishers/device-created-publisher';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.post(
  '/api/devices',
  requireAdmin,
  [
    body('deviceId').not().isEmpty().withMessage('DeviceId is required'),
    body('deviceType').not().isEmpty().withMessage('DeviceType is required')
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { deviceId, deviceType } = req.body;

    const device = Device.build({
      deviceId,
      deviceType,
    });
    await device.save();

    await new DeviceCreatedPublisher(natsWrapper.client).publish({
      deviceId: device.deviceId
    });

    res.status(201).send(device);
  }
);

export { router as createDeviceRouter };
