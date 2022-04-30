import mongoose from 'mongoose';
import { Gender } from '@ohbiohealth/common';
import { DeviceDoc } from './device'
import { OrderDoc } from './order'
import { CertDoc } from './cert'
import { PainConditionsDoc, PainConditionsModel } from './painconditions'
import { ProfileSavedPublisher } from '../events/publishers/profile-saved-publisher'
import { natsWrapper } from '../nats-wrapper'

interface ProfileAttrs {
    _id: string;
    email: string;
    gender?: Gender;
    dateOfBirth?: Date;
    weight?: Number;
    height?: Number;
    devices?: [DeviceDoc];
    orders?: [OrderDoc];
    certs?: [CertDoc];
    painconditions?: PainConditionsDoc;
}

interface ProfileDoc extends mongoose.Document {
    _id: string;
    email: string;
    gender?: Gender;
    dateOfBirth?: Date;
    weight?: Number;
    height?: Number;
    devices?: [DeviceDoc];
    orders?: [OrderDoc];
    certs?: [CertDoc];
    painconditions?: PainConditionsDoc;
}

interface ProfileModel extends mongoose.Model<ProfileDoc> {
    build(attrs: ProfileAttrs): ProfileDoc;
}

const profileSchema = new mongoose.Schema<ProfileDoc, ProfileModel, PainConditionsDoc>(
  {
    _id: {
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
        ref: 'Device'
    }],
    orders: [{
        type: String,
        ref: 'Order'
    }],
    certs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cert'
    }],
    painconditions: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PainConditions'
    }
  },
  {
    _id: false,
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

profileSchema.post('save', async function(doc, next){
  let result = JSON.parse(JSON.stringify(doc))
  delete result.email
  delete result.__v
  result.groupId = 'oh'
  if (result.gender && result.weight && result.height && result.dateOfBirth) {
    await new ProfileSavedPublisher(natsWrapper.client).publish({
      _id: result.id,
      groupId: 'oh',
      gender: result.gender,
      dateOfBirth: new Date(result.dateOfBirth),
      weight: result.weight,
      height: result.height,
      painconditions: result.painconditions ? result.painconditions.toString() : ''
    })
  }
  next()
})


const Profile = mongoose.model<ProfileDoc, ProfileModel>('Profile', profileSchema);

export { Profile };
