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
import { Profile } from '../models/profile';

const router = express.Router();

router.put(
  '/api/profiles/:userId',
  requireAuth,
  [
    body('gender').not().isEmpty().withMessage('Gender is required'),
    body('gender').isIn([Gender.Male,Gender.Female]).withMessage('Invalid gender value')
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    console.log(req.body)
    const profile = await Profile.findOne({ userId: req.params.userId });

    if (!profile) {
      throw new NotFoundError();
    }

    if (profile.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    profile.set({
      gender: req.body.gender,
    });
    await profile.save();
    
    res.send(profile);
  }
);

export { router as updateProfileRouter };
