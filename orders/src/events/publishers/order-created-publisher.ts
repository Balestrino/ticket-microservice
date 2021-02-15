import { Publisher, OrderCreatedEvent, Subjects } from '@gadue/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
