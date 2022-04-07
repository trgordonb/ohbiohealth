import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';

import { Password } from '../services/password';
import { User } from '../models/user';
import { BadRequestError, validateRequest } from '@ohbiohealth/common';

const router = express.Router();

router.post(
  '/api/users/signin',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('You must supply a password'),
    body('groupId').trim().notEmpty().withMessage('GroupId must not be empty')
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password, groupId } = req.body;

    const existingUser = await User.findOne({ email, groupId });
    if (!existingUser) {
      throw new BadRequestError('Invalid credentials');
    }

    const passwordsMatch = await Password.compare(
      existingUser.password,
      password
    );
    if (!passwordsMatch) {
      throw new BadRequestError('Invalid Credentials');
    }

    // Generate JWT
    const userJwt = jwt.sign(
      {
        id: existingUser.id,
        email: existingUser.email,
        groupId: existingUser.groupId,
        usertype: existingUser.usertype,
        hasProvidedInfo: existingUser.hasProvidedInfo,
        hasRegDevice: existingUser.hasRegDevice,
        hasBoughtDevice: existingUser.hasBoughtDevice,
        hasFinishedSurvey: existingUser.hasFinishedSurvey
      },
      process.env.JWT_KEY!
    );

    // Store it on session object
    req.session = {
      jwt: userJwt,
    };

    res.status(200).send(existingUser);
  }
);

export { router as signinRouter };