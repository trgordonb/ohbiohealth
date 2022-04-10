import { Message } from 'node-nats-streaming';
import { Subjects, Listener, PatientProfileSavedEvent, NotFoundError, BadRequestError } from '@ohbiohealth/common';
import { patientProfileQueueGroupName } from './queue-group-name'
import { PatientProfile } from '../../models/oh/patientprofile'

export class PatientProfileSavedListener extends Listener<PatientProfileSavedEvent> {
    subject: Subjects.PatientProfileSaved = Subjects.PatientProfileSaved;
    queueGroupName = patientProfileQueueGroupName;

    async onMessage(data: PatientProfileSavedEvent['data'], msg: Message) {
        console.log(data)
        let doc = JSON.parse(JSON.stringify(data))
        let groupId = doc.groupId
        let _id = doc._id
        delete doc.groupId

        PatientProfile.exists({_id: _id}, async function(err, result) {
            if (err) {
                console.log('Error: ', err)
            } else {
                if (!result) {
                    let newPatientProfile = PatientProfile.build(doc)
                    await newPatientProfile.save()
                    console.log('New Patient Profile saved')
                } else {
                    delete doc._id
                    PatientProfile.findByIdAndUpdate(_id, doc, {}, function(err, result) {
                        if (err) {
                            console.log('Error:', err)
                        }
                    })
                    console.log('Patient Profile updated')
                }
            }
        })
        msg.ack()
    }   

}