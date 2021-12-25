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
import { PainConditions } from '../models/painconditions'
import { natsWrapper } from '../nats-wrapper';
import { SurveyCompletedPublisher } from '../events/publishers/survey-completed-publisher';

const router = express.Router();

router.post(
  '/api/profiles/painconditions',
  requireAuth,
  [
    body('muscleache').not().isEmpty().withMessage('Muscle ache is required'),
    body('needlesensation').not().isEmpty().withMessage('Needle sensation is required'),
    body('burningsensation').not().isEmpty().withMessage('Burning sensation total value'),
    body('numbsensation').not().isEmpty().withMessage('Numb sensation are required')
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const profile = await Profile.findOne({ userId: req.currentUser!.id });

    if (!profile) {
      throw new NotFoundError();
    }

    const painConditions = PainConditions.build({
        _id: req.currentUser!.id,
        muscleache: req.body.muscleache,
        needlesensation: req.body.needlesensation,
        burningsensation: req.body.burningsensation,
        numbsensation: req.body.numbsensation,
    });
    await painConditions.save();

    profile.set({
        painConditions: req.currentUser!.id
    })

    await profile.save();

    await new SurveyCompletedPublisher(natsWrapper.client).publish({
      userId: req.currentUser!.id
    })
    res.send(profile);
  }
);

export { router as newPainRouter };
