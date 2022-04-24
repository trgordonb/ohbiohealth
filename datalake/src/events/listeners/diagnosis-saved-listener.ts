import { Message } from 'node-nats-streaming';
import { Subjects, Listener, DiagnosisSavedEvent } from '@ohbiohealth/common';
import { profileQueueGroupName } from './queue-group-name'

export class DiagnosisSavedListener extends Listener<DiagnosisSavedEvent> {
    subject: Subjects.DiagnosisSaved = Subjects.DiagnosisSaved;
    queueGroupName = profileQueueGroupName;

    async onMessage(data: DiagnosisSavedEvent['data'], msg: Message) {
        console.log(data)
        msg.ack()
    }

}