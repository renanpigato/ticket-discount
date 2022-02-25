import StudentTicket from '../src/Tickets/StudentTicket';

test('Discount to student', () => {
  expect((new StudentTicket(new Date('September 15, 1986 8:00:00'))).calculate()).toBe(5.2);
  expect((new StudentTicket(new Date('September 16, 1986 8:00:00'))).calculate()).toBe(5.2);
  expect((new StudentTicket(new Date('September 17, 1986 8:00:00'))).calculate()).toBe(5.2);
  expect((new StudentTicket(new Date('September 18, 1986 8:00:00'))).calculate()).toBe(5.2);
  expect((new StudentTicket(new Date('September 19, 1986 8:00:00'))).calculate()).toBe(5.2);
});

test('Student has no discount', () => {
  expect((new StudentTicket(new Date('September 20, 1986 8:00:00'))).calculate()).toBe(8);
  expect((new StudentTicket(new Date('September 21, 1986 8:00:00'))).calculate()).toBe(8);
});