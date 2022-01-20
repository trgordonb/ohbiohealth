import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
    validateRequest,
    requireAuth,
} from '@ohbiohealth/common';
import { applyRule } from '../lib/rule-engine'
import { natsWrapper } from '../nats-wrapper';
import { AnalysisCompletedPublisher } from '../../events/publishers/analysis-completed-publisher';

const router = express.Router();

router.post(
    '/api/engine/painanalysis', 
    requireAuth, 
    [
        body('muscleache').not().isEmpty().withMessage('Muscle ache is required'),
        body('needlesensation').not().isEmpty().withMessage('Needle sensation is required'),
        body('burningsensation').not().isEmpty().withMessage('Burning sensation is required'),
        body('numbsensation').not().isEmpty().withMessage('Numb sensation is required'),
        body('spinalpos').not().isEmpty().withMessage('Spinal pos is required'),
    ],
    validateRequest,
    async (req: Request, res: Response) => {
        const input = {
            "muscleache": req.body.muscleache,
            "needlesensation": req.body.needlesensation,
            "burningsensation": req.body.burningsensation,
            "numbsensation": req.body.numbsensation,
            "spinalpos": req.body.spinalpos
        }
        const result = await applyRule(input) as string[]

        await new AnalysisCompletedPublisher(natsWrapper.client).publish({
            userId: req.currentUser!.id,
            muscleache: req.body.muscleache,
            needlesensation: req.body.needlesensation,
            burningsensation: req.body.burningsensation,
            numbsensation: req.body.numbsensation,
            spinalpos: req.body.spinalpos,
            diagnosis: result
        })
        res.send(result)
    }
);

export { router as engineRouter };

