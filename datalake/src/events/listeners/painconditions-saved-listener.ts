import { Message } from 'node-nats-streaming';
import mongoose from 'mongoose';
import { Subjects, Listener, PainConditionsSavedEvent, NotFoundError, BadRequestError } from '@ohbiohealth/common';
import { painConditionsQueueGroupName } from './queue-group-name'
import { PainConditions } from '../../models/oh/painconditions'

export class PainConditionsSavedListener extends Listener<PainConditionsSavedEvent> {
    subject: Subjects.PainConditionsSaved = Subjects.PainConditionsSaved;
    queueGroupName = painConditionsQueueGroupName;

    async onMessage(data: PainConditionsSavedEvent['data'], msg: Message) {
        let doc = JSON.parse(JSON.stringify(data))
        let groupId = doc.groupId
        let _id = doc._id
        delete doc.groupId

        PainConditions.exists({_id: _id}, async function(err, result) {
            if (err) {
                console.log('Error:', err)
            } else {
                if (!result) {
                    let newPainCondition = PainConditions.build(doc)
                    await newPainCondition.save()
                } else {
                    delete doc._id
                    PainConditions.findByIdAndUpdate(_id, doc, {}, function(err, result) {
                        if (err) {
                            console.log('Error:', err)
                        }
                    })
                }
            }
        })

        msg.ack();
    }
}
