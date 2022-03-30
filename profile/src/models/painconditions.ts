import mongoose from 'mongoose';

interface PainConditionsAttrs {
    _id: string,
    muscleache: boolean,
    needlesensation: boolean,
    burningsensation: boolean,
    numbsensation: boolean,
    painpositions: number[],
    diagnosis: string[]
}

export interface PainConditionsDoc extends mongoose.Document {
    _id: string,
    muscleache: boolean,
    needlesensation: boolean,
    burningsensation: boolean,
    numbsensation: boolean,
    painpositions: number[],
    diagnosis: string[]
}

interface PainConditionsModel extends mongoose.Model<PainConditionsDoc> {
    build(attrs: PainConditionsAttrs): PainConditionsDoc;
}

const painConditionsSchema = new mongoose.Schema<PainConditionsDoc,PainConditionsModel>(
    {
        _id: {
            type: String,
            required: true,
        },
        muscleache: {
            type: Boolean,
            required: true,
            default: false
        },
        needlesensation: {
            type: Boolean,
            required: true,
            default: false
        },
        burningsensation: {
            type: Boolean,
            required: true,
            default: false
        },
        numbsensation: {
            type: Boolean,
            required: true,
            default: false
        },
        painpositions: {
            type: [Number],
            required: true,
            default: []
        },
        diagnosis: {
            type: [String],
            required: true,
            default: []
        }
    },
    {
        _id: false   
    }
);

painConditionsSchema.statics.build = (attrs: PainConditionsAttrs) => {
    return new PainConditions(attrs);
};

const PainConditions = mongoose.model<PainConditionsDoc, PainConditionsModel>('PainConditions', painConditionsSchema);

export { PainConditions };