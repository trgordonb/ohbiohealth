import mongoose from 'mongoose';
import { Password } from '../services/password';

// An interface that describes the properties
// that are requried to create a new User
interface UserAttrs {
  _id: string,
  email: string;
  password: string;
  groupId: string;
  usertype?: string;
  hasProvidedInfo?: boolean;
  hasBoughtDevice?: boolean;
  hasRegDevice?: boolean;
  hasFinishedSurvey?: boolean;
}

// An interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// An interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document {
  _id: string
  email: string;
  password: string;
  groupId: string;
  usertype?: string;
  hasProvidedInfo?: boolean;
  hasBoughtDevice?: boolean;
  hasRegDevice?: boolean;
  hasFinishedSurvey?: boolean;
}

const userSchema = new mongoose.Schema<UserDoc, UserModel>({
  _id: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  groupId: {
    type: String,
    required: true
  },
  usertype: {
    type: String,
    default: 'client'
  },
  hasProvidedInfo: {
    type: Boolean,
    default: false
  },
  hasBoughtDevice: {
    type: Boolean,
    default: false
  },
  hasRegDevice: {
    type: Boolean,
    default: false
  },
  hasFinishedSurvey: {
    type: Boolean,
    default: false
  }},
  {
    _id: false,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.pre('save', async function(done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };