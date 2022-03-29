import express, { Request, Response } from 'express'
import { body } from 'express-validator'
import { validateRequest } from '@ohbiohealth/common'
import Redlock from 'redlock'
import Redis from 'ioredis'
import moment from 'moment'

const client = new Redis({
    host: process.env.REDIS_HOST,
});

const redlock = new Redlock([client], {
    retryCount: 2,
    retryDelay: 150
})

const router = express.Router()

router.post(
    '/api/identities', 
    [
        body('groupId').not().isEmpty().withMessage('GroupId is required'),
    ],
    validateRequest,
    async (req: Request, res: Response) => {
        let key = req.body.groupId     
        //let lock = await redlock.acquire([key], 1000)   
        client.incr(key, async (err: any, result: any) => {
            try {
                if (!err) {
                    let resultStr = `${key}-${moment().format('YYYYMMDD')}-${result}`
                    res.send({
                        sequence: resultStr
                    })
                } else {
                    res.send({
                        sequence: undefined
                    })
                }
            } finally {
                //await lock.release()
            }        
        })
    }
);

export { router as identityRouter };

