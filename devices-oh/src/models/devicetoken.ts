import mongoose from 'mongoose';

interface DeviceTokenAttrs {
    userId: string;
    token: string;
}

interface DeviceTokenDoc extends mongoose.Document {
    userId: string;
    token: string;
}

interface DeviceTokenModel extends mongoose.Model<DeviceTokenDoc> {
  build(attrs: DeviceTokenAttrs): DeviceTokenDoc;
}

const deviceTokenSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
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

deviceTokenSchema.statics.build = (attrs: DeviceTokenAttrs) => {
  return new DeviceToken(attrs);
};

const DeviceToken = mongoose.model<DeviceTokenDoc, DeviceTokenModel>('DeviceToken', deviceTokenSchema);

export { DeviceToken };