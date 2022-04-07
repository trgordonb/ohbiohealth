import mongoose from 'mongoose';
import { PurchaseProofStatus } from '@ohbiohealth/common'

interface PurchaseProofAttrs {
    _id: string;
    userId: string;
    email: string;
    purchaseProofUrl: string;
}

export interface PurchaseProofDoc extends mongoose.Document {
    _id: string;
    userId: string;
    email: string;
    purchaseProofUrl: string;
}

interface PurchaseProofModel extends mongoose.Model<PurchaseProofAttrs> {
  build(attrs: PurchaseProofAttrs): PurchaseProofDoc;
}

const purchaseProofSchema = new mongoose.Schema<PurchaseProofDoc, PurchaseProofModel>(
  {
    _id: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    purchaseProofUrl: {
        type: String,
        required: true,
    },  
    status: {
        type: String,
        default: PurchaseProofStatus.Pending
    },
    warrantyExpireAt: {
        type: Date
    }
  }, {
      _id: false
  }
);

purchaseProofSchema.statics.build = (attrs: PurchaseProofAttrs) => {
  return new PurchaseProof(attrs);
};

const PurchaseProof = mongoose.model<PurchaseProofDoc, PurchaseProofModel>('PurchaseProof', purchaseProofSchema);

export { PurchaseProof };