import mongoose from 'mongoose';

interface PainConditionsAttrs {
    muscleache: boolean,
    needlesensation: boolean,
    burningsensation: boolean,
    numbsensation: boolean,
    painpositions: number[],
    diagnosis: string[]
}

export interface PainConditionsDoc extends mongoose.Document {
    muscleache: boolean,
    needlesensation: boolean,
    burningsensation: boolean,
    numbsensation: boolean,
    painpositions: number[],
    diagnosis: string[]
}

export interface PainConditionsModel extends mongoose.Model<PainConditionsDoc> {
    build(attrs: PainConditionsAttrs): PainConditionsDoc;
}

const painConditionsSchema = new mongoose.Schema<PainConditionsDoc,PainConditionsModel>(
    {
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
);

painConditionsSchema.statics.build = (attrs: PainConditionsAttrs) => {
    return new PainConditions(attrs);
};

const PainConditions = mongoose.model<PainConditionsDoc, PainConditionsModel>('PainConditions', painConditionsSchema);

export { PainConditions };