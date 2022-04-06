import express, { Request, Response } from 'express';
import {
  requireAdmin,
  NotFoundError,
  NotAuthorizedError,
  PurchaseProofStatus
} from '@ohbiohealth/common';
import { PurchaseProof } from '../models/purchaseproof';

const router = express.Router();

router.get(
  '/api/devices/proofs',
  requireAdmin,
  async (req: Request, res: Response) => {
    const proofs = await PurchaseProof.find({ status: PurchaseProofStatus.Pending })

    if (!proofs) {
      throw new NotFoundError();
    }
    
    res.send(proofs);
  }
)

export { router as showProofRouter };