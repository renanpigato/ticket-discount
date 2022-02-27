import Ticket from '../src/Tickets/Ticket';
import StudentTicket from '../src/Tickets/StudentTicket';
import ChildrenTicket from '../src/Tickets/ChildrenTicket';
import ElderlyTicket from '../src/Tickets/ElderlyTicket';

test('Discount to student', () => {
  expect((new StudentTicket(new Date('September 15, 1986 8:00:00'))).calculate()).toBe(5.2); // Monday
  expect((new StudentTicket(new Date('September 16, 1986 8:00:00'))).calculate()).toBe(5.2); // Tuesday
  expect((new StudentTicket(new Date('September 17, 1986 8:00:00'))).calculate()).toBe(5.2); // Wednesday
  expect((new StudentTicket(new Date('September 18, 1986 8:00:00'))).calculate()).toBe(5.2); // Thursday
  expect((new StudentTicket(new Date('September 19, 1986 8:00:00'))).calculate()).toBe(5.2); // Friday
});

test('Student has no discount', () => {
  expect((new StudentTicket(new Date('September 14, 1986 8:00:00'))).calculate()).toBe(8); // Sunday
  expect((new StudentTicket(new Date('September 20, 1986 8:00:00'))).calculate()).toBe(8); // Saturday
});

test('Tickets at Monday', () => {
  const date = new Date('September 15, 1986 8:00:00');

  expect((new ChildrenTicket(date)).calculate()).toBe(4.95);
  expect((new StudentTicket(date)).calculate()).toBe(5.2);
  expect((new ElderlyTicket(date)).calculate()).toBe(5.4);
});