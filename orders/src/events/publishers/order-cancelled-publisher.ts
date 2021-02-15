import { Subjects, Publisher, OrderCancelledEvent } from '@gadue/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
