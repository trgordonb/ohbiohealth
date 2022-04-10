import mongoose from 'mongoose';
import { Gender } from '@ohbiohealth/common';

interface PatientProfileAttrs {
    _id: string;
    gender?: Gender;
    birthdate?: Date;
    firstconsultdate?: Date;
    occupation?: string;
    painduration?: number;
    armupliftangle?: number;
    painlocations?: [string];
    painconsequences?: [string];
    paincause?: string;
    paincategory?: string;
    QE_positions?: [string];
    BEM_positions?: [string];
}

interface PatientProfileDoc extends mongoose.Document {
    _id: string;
    gender?: Gender;
    birthdate?: Date;
    firstconsultdate?: Date;
    occupation?: string;
    painduration?: number;
    armupliftangle?: number;
    painlocations?: [string];
    painconsequences?: [string];
    paincause?: string;
    paincategory?: string;
    QE_positions?: [string];
    BEM_positions?: [string];
}

interface PatientProfileModel extends mongoose.Model<PatientProfileDoc> {
    build(attrs: PatientProfileAttrs): PatientProfileDoc;
}

const patientProfileSchema = new mongoose.Schema<PatientProfileDoc, PatientProfileModel>(
  {
    _id: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: Object.values(Gender),
    },
    birthdate: Date,
    firstconsultdate: Date,
    occupation: String,
    painduration: Number,
    armupliftangle: Number,
    painlocations: [String],
    painconsequences: [String],
    paincause: String,
    paincategory: String,
    QE_positions: [String],
    BEM_positions: [String]
  },
  {
    _id: false,
  }
);

patientProfileSchema.statics.build = (attrs: PatientProfileAttrs) => {
  return new PatientProfile(attrs);
};

const PatientProfile = mongoose.connection.useDb('oh').model<PatientProfileDoc, PatientProfileModel>('PatientProfile', patientProfileSchema);

export { PatientProfile };
