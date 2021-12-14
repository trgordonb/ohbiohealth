import express, { Request, Response } from 'express';
import {
  requireAuth,
  NotFoundError,
  NotAuthorizedError,
} from '@ohbiohealth/common';
import { Device } from '../models/device';

const router = express.Router();

router.get(
  '/api/profiles/:deviceId',
  requireAuth,
  async (req: Request, res: Response) => {
    const device = await Device.findOne({ deviceId: req.params.deviceId })

    if (!device) {
      throw new NotFoundError();
    }
    
    res.send(device);
  }
);

export { router as showDeviceRouter };