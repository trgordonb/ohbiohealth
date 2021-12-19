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
import { ProfileCompletedPublisher } from '../events/publishers/profile-completed-publisher';
import { natsWrapper } from '../nats-wrapper';

const router = express.Router();

router.put(
  '/api/profiles/:userId',
  requireAuth,
  [
    body('gender').not().isEmpty().withMessage('Gender is required'),
    body('gender').isIn([Gender.Male,Gender.Female]).withMessage('Invalid gender value'),
    body('dateOfBirth').not().isEmpty().withMessage('Date of Birth is required'),
    body('dateOfBirth').isDate({format:'YYYY-MM-DD'}).withMessage('Invalid date of birth value'),
    body('weight').not().isEmpty().withMessage('Weight is required'),
    body('weight').isInt().withMessage('Invalid weight value'),
    body('height').not().isEmpty().withMessage('Height is required'),
    body('height').isInt().withMessage('Invalid height value'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const profile = await Profile.findOne({ userId: req.params.userId });

    if (!profile) {
      throw new NotFoundError();
    }

    if (profile.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    profile.set({
      gender: req.body.gender,
      dateOfBirth: req.body.dateOfBirth,
      weight: req.body.weight,
      height: req.body.height
    });
    await profile.save();

    await new ProfileCompletedPublisher(natsWrapper.client).publish({
      userId: req.params.userId,
    })
    
    res.send(profile);
  }
);

export { router as updateProfileRouter };
