import express, { Request, Response } from 'express';
import { User } from '../models/user';

const router = express.Router();

router.post(
    '/api/users/activate', 
    async (req: Request, res: Response) => {
        const { hash } = req.body;

        const existingUser = await User.findOne({verificationHash: hash});
        if (!existingUser) {
            res.json({success: false, message:'Activation fail'})
        } else {
            existingUser.hasVerifiedEmail = true
            await existingUser.save()
            res.json({message: `User ${hash} has been activated`, success: true})
        }
    }
);

export { router as activateRouter };
