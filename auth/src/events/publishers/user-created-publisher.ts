import { Publisher, Subjects, UserCreatedEvent } from '@ohbiohealth/common';

export class UserCreatedPublisher extends Publisher<UserCreatedEvent> {
  readonly subject = Subjects.UserCreated;
}
