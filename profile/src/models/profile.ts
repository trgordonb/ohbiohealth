import mongoose from 'mongoose';
import { Gender } from '@ohbiohealth/common';
import { DeviceDoc } from './device'
import { OrderDoc } from './order'

interface ProfileAttrs {
    userId: string;
    email: string;
    gender?: Gender;
    dateOfBirth?: Date;
    weight?: Number;
    height?: Number;
    devices?: [DeviceDoc];
    orders?: [OrderDoc];
}

interface ProfileDoc extends mongoose.Document {
    userId: string;
    email: string;
    gender?: Gender;
    dateOfBirth?: Date;
    weight?: Number;
    height?: Number;
    devices?: [DeviceDoc];
    orders?: [OrderDoc];
}

interface ProfileModel extends mongoose.Model<ProfileDoc> {
    build(attrs: ProfileAttrs): ProfileDoc;
}

const profileSchema = new mongoose.Schema(
  {
    userId: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: Object.values(Gender),
    },
    dateOfBirth: {
        type: Date
    },
    weight: {
        type: Number
    },
    height: {
        type: Number
    }, 
    devices: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Device',
    }],
    orders: [{
        type: String,
        ref: 'Order'
    }]
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


profileSchema.statics.build = (attrs: ProfileAttrs) => {
  return new Profile(attrs);
};

const Profile = mongoose.model<ProfileDoc, ProfileModel>('Profile', profileSchema);

export { Profile };
