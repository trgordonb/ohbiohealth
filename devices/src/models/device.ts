import mongoose from 'mongoose';
import { PurchaseProofDoc } from './purchaseproof'

interface DeviceAttrs {
  deviceId: string;
  deviceType: string;
  purchaseProof?: PurchaseProofDoc;
}

interface DeviceDoc extends mongoose.Document {
  deviceId: string;
  deviceType: string;
  purchaseProof?: PurchaseProofDoc;
}

interface DeviceModel extends mongoose.Model<DeviceDoc> {
  build(attrs: DeviceAttrs): DeviceDoc;
}

const deviceSchema = new mongoose.Schema(
  {
    deviceId: {
      type: String,
      required: true,
    },
    deviceType: {
      type: String,
      required: true,
    },
    purchaseProof: {
      type: String,
      ref: 'PurchaseProof'
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

deviceSchema.statics.build = (attrs: DeviceAttrs) => {
  return new Device(attrs);
};

const Device = mongoose.model<DeviceDoc, DeviceModel>('Device', deviceSchema);

export { Device };