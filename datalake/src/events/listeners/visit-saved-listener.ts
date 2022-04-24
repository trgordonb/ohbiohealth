import { Message } from 'node-nats-streaming';
import { Subjects, Listener, VisitSavedEvent } from '@ohbiohealth/common';
import { profileQueueGroupName } from './queue-group-name'

export class VisitSavedListener extends Listener<VisitSavedEvent> {
    subject: Subjects.VisitSaved = Subjects.VisitSaved;
    queueGroupName = profileQueueGroupName;

    async onMessage(data: VisitSavedEvent['data'], msg: Message) {
        console.log(data)
        msg.ack()
    }

}