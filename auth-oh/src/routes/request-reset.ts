import express, { Request, Response } from 'express';
import { User } from '../models/user';
import { BadRequestError } from '@ohbiohealth/common';
import { sendResetPasswordEmail } from '../services/mail'

const router = express.Router();

router.post(
    '/api/users/request-reset', 
    async (req: Request, res: Response) => {
        const { email } = req.body;
        const existingUser = await User.findOne({email});
        if (!existingUser) {
            throw new BadRequestError('No such user');
        } else {
            await sendResetPasswordEmail(existingUser)
            res.status(200).send({message: 'ok'})
        }
    }
);

export { router as requestResetRouter };
