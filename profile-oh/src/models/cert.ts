import mongoose from 'mongoose';

interface CertAttrs {
    walletAddress?: string;
    docIPFSUri: string;
    metaDataIPFSUri: string;
    txHash: string;
    txNetwork: string;
    tokenId: Number;
}

export interface CertDoc extends mongoose.Document {
    walletAddress?: string;
    docIPFSUri: string;
    metaDataIPFSUri: string;
    txHash: string;
    txNetwork: string;
    tokenId: Number;}

interface CertModel extends mongoose.Model<CertDoc> {
  build(attrs: CertAttrs): CertDoc;
}

const certSchema = new mongoose.Schema(
  {
    walletAddress: String,
    docIPFSUri: {
        type: String,
        required: true,
    },
    metaDataIPFSUri: {
        type: String,
        required: true
    },
    txHash: {
        type: String,
        required: true
    },
    txNetwork: {
        type: String,
        default: 'kovan'
    },
    tokenId: {
        type: Number,
        required: true
    }
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

certSchema.statics.build = (attrs: CertAttrs) => {
  return new Cert(attrs);
};

const Cert = mongoose.model<CertDoc, CertModel>('Cert', certSchema);

export { Cert };