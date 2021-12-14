import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator'
import jwt from 'jsonwebtoken';
import { UserCreatedPublisher } from '../events/publishers/user-created-publisher';
import { User } from '../models/user';
import { natsWrapper } from '../nats-wrapper';
import { validateRequest, BadRequestError } from "@ohbiohealth/common";

const router = express.Router();

router.post('/api/users/signup', [
    body('email')
      .isEmail()
      .withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters'),
  ], 
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new BadRequestError('Email in use');
    }
    
    const user = User.build({ email, password });
    await user.save();

    // Generate JWT

    const userJwt = jwt.sign({
      id: user.id,
      email: user.email,
      usertype: user.usertype,
      hasProvidedInfo: user.hasProvidedInfo
    }, 
    process.env.JWT_KEY!
    );

    // Store it on session object
    req.session = {
      jwt: userJwt
    };

    await new UserCreatedPublisher(natsWrapper.client).publish({
      userId: user.id,
      email: user.email
    })

    res.status(201).send(user);
});

export { router as signupRouter };
