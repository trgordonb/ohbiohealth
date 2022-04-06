import express, { Request, Response } from 'express';
import {
  requireAuth,
  NotFoundError,
  NotAuthorizedError,
} from '@ohbiohealth/common';
import { Device } from '../models/device';

const router = express.Router();

router.get(
  '/api/devices',
  requireAuth,
  async (req: Request, res: Response) => {
    let deviceId = req.query.deviceId?.toString()
    const device = await Device.findOne({ deviceId: deviceId })

    if (!device) {
      throw new NotFoundError();
    }
    
    res.send(device);
  }
);

export { router as showDeviceRouter };