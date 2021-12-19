import { Publisher, Subjects, ProfileCompletedEvent } from '@ohbiohealth/common';

export class ProfileCompletedPublisher extends Publisher<ProfileCompletedEvent> {
  readonly subject = Subjects.ProfileCompleted;
}
