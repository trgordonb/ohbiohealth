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
const painPointsMapping: any = {
    "0,1": 2, "0,2": 4, "0,3": 22, "0,4": 23, "0,5": 5, "0,6": 13, "0,7": 24, "0,8": 3, "0,9": 14, "0,10": 25, "0,11": 18, "0,12": 29, "0,13": 21, "0,14": 32, "0,15": 39, "0,16": 40,
    "1,1": 35, "1,2": 36, "1,3": 26, "1,4": 15, "1,5": 6, "1,6": 27, "1,7": 16, "1,8": 12, "1,9": 25, "1,10": 14, "1,11": 30, "1,12": 19, "1,13": 32, "1,14": 21,
    "2,1": 38, "2,2": 33, "2,3": 23, "2,4": 24, "2,5": 25, "2,6": 28, "2,7": 29, "2,8": 32,
    "3,1": 37, "3,2": 34, "3,3": 22, "3,4": 13, "3,5": 14, "3,6": 17, "3,7": 18, "3,8": 21
}

const transformPainPoints = (painPoints: number[][])  => {
    let finalArr : number[] = []
    painPoints.forEach((row, index) => {
        row.forEach((item) => {
            let painPointIndex = `${index},${item}`
            let painPoint: number = painPointsMapping[painPointIndex]
            finalArr.push(painPoint)
        })
    })
    return [...new Set(finalArr)]
}

router.post(
    '/api/engine/painanalysis', 
    requireAuth, 
    [
        body('muscleache').not().isEmpty().withMessage('Muscle ache is required'),
        body('needlesensation').not().isEmpty().withMessage('Needle sensation is required'),
        body('burningsensation').not().isEmpty().withMessage('Burning sensation is required'),
        body('numbsensation').not().isEmpty().withMessage('Numb sensation is required'),
        body('painpositions').not().isEmpty().withMessage('Pain positions is required'),
    ],
    validateRequest,
    async (req: Request, res: Response) => {
        console.log(req.body.painpositions)
        const painPointsArr = transformPainPoints(req.body.painpositions)
        const input = {
            "muscleache": req.body.muscleache,
            "needlesensation": req.body.needlesensation,
            "burningsensation": req.body.burningsensation,
            "numbsensation": req.body.numbsensation,
            "spinal": painPointsArr.includes(6)
        }
        const result = await applyRule(input) as string[]

        await new AnalysisCompletedPublisher(natsWrapper.client).publish({
            userId: req.currentUser!.id,
            muscleache: req.body.muscleache,
            needlesensation: req.body.needlesensation,
            burningsensation: req.body.burningsensation,
            numbsensation: req.body.numbsensation,
            painpositions: painPointsArr,
            diagnosis: result
        })
        res.send(result)
    }
);

export { router as engineRouter };

