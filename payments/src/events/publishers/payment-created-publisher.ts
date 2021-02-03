import { Subjects, Publisher, PaymentCreatedEvent } from '@gadue/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
