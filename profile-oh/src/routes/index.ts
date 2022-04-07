import express, { Request, Response } from 'express';
import { requireAuth } from '@ohbiohealth/common';
import { Profile } from '../models/profile';

const router = express.Router();

router.get('/api/profiles', requireAuth, async (req: Request, res: Response) => {
  const profiles = await Profile.findById(req.currentUser!.id).populate('painconditions')

  res.send(profiles);
});

export { router as indexProfileRouter };

