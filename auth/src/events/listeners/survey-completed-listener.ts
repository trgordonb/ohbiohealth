import { Message } from 'node-nats-streaming';
import { Subjects, Listener, SurveyCompletedEvent } from '@ohbiohealth/common';
import { User } from '../../models/user';
import { authQueueGroupName } from './queue-group-name';

export class SurveyCompletedListener extends Listener<SurveyCompletedEvent> {
    subject: Subjects.SurveyCompleted = Subjects.SurveyCompleted;
    queueGroupName = authQueueGroupName;

    async onMessage(data: SurveyCompletedEvent['data'], msg: Message) {
        const { userId } = data;
        const user = await User.findById(userId)
        user?.set({
            hasFinishedSurvey: true
        })
        await user?.save()

        msg.ack();
    }
}
