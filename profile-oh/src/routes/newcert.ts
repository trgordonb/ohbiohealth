import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import {
  validateRequest,
  NotFoundError,
  requireAuth,
} from '@ohbiohealth/common';
import { Profile } from '../models/profile';
import { Cert } from '../models/cert'

const router = express.Router();

router.post(
  '/api/profiles/certs',
  requireAuth,
  [
    body('email').not().isEmpty().withMessage('Email is required'),
    body('tokenId').not().isEmpty().withMessage('TokenId is required'),
    body('tokenId').isNumeric().withMessage('TokenId must be a number'),
    body('txHash').not().isEmpty().withMessage('txHash is required'),
    body('docIPFSUri').not().isEmpty().withMessage('Document IPFS Uri is required'),
    body('metaDataIPFSUri').not().isEmpty().withMessage('Meta Data IPFS Uri isrequired'),
    body('txNetwork').not().isEmpty().withMessage('Transaction network name is required')
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const profile = await Profile.findOne({email: req.body.email})

    if (!profile) {
      throw new NotFoundError();
    }

    const cert = Cert.build({
        walletAddress: req.body.walletAddress ? req.body.walletAddress: '',
        docIPFSUri: req.body.docIPFSUri,
        metaDataIPFSUri: req.body.metaDataIPFSUri,
        tokenId: req.body.tokenId,
        txHash: req.body.txHash,
        txNetwork: req.body.txNetwork
    });
    await cert.save();

    profile.set({
        certs: [...profile.certs!, cert._id]
    })

    await profile.save();
    res.send(profile);
  }
);

export { router as newCertRouter };
