import StudentTicket from '../src/Tickets/StudentTicket';

test('Discount to student', () => {
  expect((new StudentTicket()).calculate()).toBe(3);
});
