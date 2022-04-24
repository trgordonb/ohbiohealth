import { Message } from 'node-nats-streaming';
import { Subjects, Listener, EntitySavedEvent } from '@ohbiohealth/common';
import { profileQueueGroupName } from './queue-group-name'

export class EntitySavedListener extends Listener<EntitySavedEvent> {
    subject: Subjects.EntitySaved = Subjects.EntitySaved;
    queueGroupName = profileQueueGroupName;

    async onMessage(data: EntitySavedEvent['data'], msg: Message) {
        console.log(data)
        msg.ack()
    }

}