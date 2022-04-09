import { Publisher, Subjects, ProfileSavedEvent } from '@ohbiohealth/common';

export class ProfileSavedPublisher extends Publisher<ProfileSavedEvent> {
  readonly subject = Subjects.ProfileSaved;
}
