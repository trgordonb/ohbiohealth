import mongoose from 'mongoose';
import { PainConditionsSavedPublisher } from '../events/publishers/painconditions-saved-publisher';
import { natsWrapper } from '../nats-wrapper';

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

painConditionsSchema.post('save', async function(doc, next) {
    let result = JSON.parse(JSON.stringify(doc))
    delete result.__v
    result.groupId = 'oh'
    if (result) {
        await new PainConditionsSavedPublisher(natsWrapper.client).publish({
            _id: result._id,
            groupId: result.groupId,
            muscleache: result.muscleache,
            needlesensation: result.needlesensation,
            burningsensation: result.burningsensation,
            numsensation: result.numbsensation,
            painpositions: result.painpositions,
            diagnosis: result.diagnosis
        })
    }
    next()
})

const PainConditions = mongoose.model<PainConditionsDoc, PainConditionsModel>('PainConditions', painConditionsSchema);

export { PainConditions };