import express, { Request, Response } from 'express';
import {
  requireAuth,
  NotFoundError,
  NotAuthorizedError,
} from '@ohbiohealth/common';
import { Profile } from '../models/profile';

const router = express.Router();

router.get(
  '/api/profiles/:userId',
  requireAuth,
  async (req: Request, res: Response) => {
    const profile = await Profile.findOne({ userId: req.params.userId }).populate('devices').populate('orders').populate('painConditions')

    if (!profile) {
      throw new NotFoundError();
    }
    if (profile.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    res.send(profile);
  }
);

export { router as showProfileRouter };