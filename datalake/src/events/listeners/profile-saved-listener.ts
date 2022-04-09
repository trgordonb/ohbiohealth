import { Message } from 'node-nats-streaming';
import mongoose from 'mongoose';
import { Subjects, Listener, ProfileSavedEvent, NotFoundError, BadRequestError } from '@ohbiohealth/common';
import { profileQueueGroupName } from './queue-group-name'
import { Profile } from '../../models/oh/profile'

export class ProfileSavedListener extends Listener<ProfileSavedEvent> {
    subject: Subjects.ProfileSaved = Subjects.ProfileSaved;
    queueGroupName = profileQueueGroupName;

    async onMessage(data: ProfileSavedEvent['data'], msg: Message) {
        let doc = JSON.parse(JSON.stringify(data))
        let groupId = doc.groupId
        let _id = doc._id
        delete doc.groupId

        Profile.exists({_id: _id}, async function(err, result) {
            if (err) {
                console.log('Error:', err)
            } else {
                if (!result) {
                    let newProfile = Profile.build(doc)
                    await newProfile.save()
                } else {
                    delete doc._id
                    Profile.findByIdAndUpdate(_id, doc, {}, function(err, result) {
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
