import express, { Request, Response } from 'express';
import { User } from '../models/user';
import { BadRequestError } from '@ohbiohealth/common';

const router = express.Router();

router.post(
    '/api/users/reset-password', 
    async (req: Request, res: Response) => {
        const { hash, password } = req.body;
        const existingUser = await User.findOne({verificationHash: hash});
        if (!existingUser) {
            throw new BadRequestError('No such user');
        } else {
            existingUser.password = password
            await existingUser.save()
            res.status(200).send(existingUser);
        }
    }
);

export { router as resetRouter };
