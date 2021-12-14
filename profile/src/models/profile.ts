import mongoose from 'mongoose';
import { Gender } from '@ohbiohealth/common';

interface ProfileAttrs {
    userId: string;
    email: string;
    gender?: Gender;
}

interface ProfileDoc extends mongoose.Document {
    userId: string;
    email: string;
    gender?: Gender;
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


profileSchema.statics.build = (attrs: ProfileAttrs) => {
  return new Profile(attrs);
};

const Profile = mongoose.model<ProfileDoc, ProfileModel>('Profile', profileSchema);

export { Profile };
