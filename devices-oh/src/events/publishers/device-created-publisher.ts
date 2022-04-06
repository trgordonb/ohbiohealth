import { Publisher, Subjects, DeviceCreatedEvent } from '@ohbiohealth/common';

export class DeviceCreatedPublisher extends Publisher<DeviceCreatedEvent> {
  readonly subject = Subjects.DeviceCreated;
}
