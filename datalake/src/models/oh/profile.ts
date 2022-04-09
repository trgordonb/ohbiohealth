import mongoose from 'mongoose';
import { Gender } from '@ohbiohealth/common';
import { PainConditionsDoc, PainConditionsModel } from './painconditions'

interface ProfileAttrs {
    _id: string;
    gender?: Gender;
    dateOfBirth?: Date;
    weight?: Number;
    height?: Number;
    painconditions?: PainConditionsDoc;
}

interface ProfileDoc extends mongoose.Document {
    _id: string;
    gender?: Gender;
    dateOfBirth?: Date;
    weight?: Number;
    height?: Number;
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
    painconditions: {
        type: String,
        ref: 'PainConditions'
    }
  },
  {
    _id: false,
  }
);

profileSchema.statics.build = (attrs: ProfileAttrs) => {
  return new Profile(attrs);
};


const Profile = mongoose.connection.useDb('oh').model<ProfileDoc, ProfileModel>('Profile', profileSchema);

export { Profile };
