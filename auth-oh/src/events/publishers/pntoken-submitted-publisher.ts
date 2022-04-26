import { Publisher, Subjects, TokenSubmittedEvent } from '@ohbiohealth/common';

export class PNTokenSubmittedPublisher extends Publisher<TokenSubmittedEvent> {
  readonly subject = Subjects.PNTokenSubmitted;
}
