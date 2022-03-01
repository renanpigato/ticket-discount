import CalendarDate from '../src/CalendarDate/CalendarDate';
import TicketFactory from '../src/Tickets/Factories/TicketFactory';
import Ticket from '../src/Tickets/Ticket';
import StudentTicket from '../src/Tickets/StudentTicket';

test('Discount to student', () => {
  expect((new StudentTicket(new CalendarDate(new Date('September 15, 1986 8:00:00')))).calculate()).toBe(5.2); // Monday
  expect((new StudentTicket(new CalendarDate(new Date('September 16, 1986 8:00:00')))).calculate()).toBe(5.2); // Tuesday
  expect((new StudentTicket(new CalendarDate(new Date('September 17, 1986 8:00:00')))).calculate()).toBe(5.2); // Wednesday
  expect((new StudentTicket(new CalendarDate(new Date('September 18, 1986 8:00:00')))).calculate()).toBe(5.2); // Thursday
  expect((new StudentTicket(new CalendarDate(new Date('September 19, 1986 8:00:00')))).calculate()).toBe(5.2); // Friday
});

test('Student has no discount', () => {
  expect((new StudentTicket(new CalendarDate(new Date('September 14, 1986 8:00:00')))).calculate()).toBe(8); // Sunday
  expect((new StudentTicket(new CalendarDate(new Date('September 20, 1986 8:00:00')))).calculate()).toBe(8); // Saturday
});

test('Tickets at Monday', () => {
  const date = new CalendarDate(new Date('September 15, 1986 8:00:00'));

  expect((TicketFactory.create(date, Ticket.TYPE_CHILDREN)).calculate()).toBe(4.95);
  expect((TicketFactory.create(date, Ticket.TYPE_STUDENT)).calculate()).toBe(5.2);
  expect((TicketFactory.create(date, Ticket.TYPE_ELDERLY)).calculate()).toBe(5.4);

  date.dayOf = true;

  expect((TicketFactory.create(date, Ticket.TYPE_CHILDREN)).calculate()).toBe(5.5);
  expect((TicketFactory.create(date, Ticket.TYPE_STUDENT)).calculate()).toBe(5.2);
  expect((TicketFactory.create(date, Ticket.TYPE_ELDERLY)).calculate()).toBe(5.7);
});

test('Tickets at Tuesday', () => {
  const date = new CalendarDate(new Date('September 16, 1986 8:00:00'));

  expect((TicketFactory.create(date, Ticket.TYPE_CHILDREN)).calculate()).toBe(4.68);
  expect((TicketFactory.create(date, Ticket.TYPE_STUDENT)).calculate()).toBe(5.2);
  expect((TicketFactory.create(date, Ticket.TYPE_ELDERLY)).calculate()).toBe(5.1);

  date.dayOf = true;

  expect((TicketFactory.create(date, Ticket.TYPE_CHILDREN)).calculate()).toBe(5.5);
  expect((TicketFactory.create(date, Ticket.TYPE_STUDENT)).calculate()).toBe(5.2);
  expect((TicketFactory.create(date, Ticket.TYPE_ELDERLY)).calculate()).toBe(5.7);
});

test('Tickets at Wednesday', () => {
  const date = new CalendarDate(new Date('September 17, 1986 8:00:00'));

  expect((TicketFactory.create(date, Ticket.TYPE_CHILDREN)).calculate()).toBe(3.85);
  expect((TicketFactory.create(date, Ticket.TYPE_STUDENT)).calculate()).toBe(5.2);
  expect((TicketFactory.create(date, Ticket.TYPE_ELDERLY)).calculate()).toBe(3.6);

  date.dayOf = true;

  expect((TicketFactory.create(date, Ticket.TYPE_CHILDREN)).calculate()).toBe(5.5);
  expect((TicketFactory.create(date, Ticket.TYPE_STUDENT)).calculate()).toBe(5.2);
  expect((TicketFactory.create(date, Ticket.TYPE_ELDERLY)).calculate()).toBe(5.7);
});

test('Tickets at Thursday', () => {
  const date = new CalendarDate(new Date('September 18, 1986 8:00:00'));

  expect((TicketFactory.create(date, Ticket.TYPE_CHILDREN)).calculate()).toBe(5.5);
  expect((TicketFactory.create(date, Ticket.TYPE_STUDENT)).calculate()).toBe(5.2);
  expect((TicketFactory.create(date, Ticket.TYPE_ELDERLY)).calculate()).toBe(4.2);

  date.dayOf = true;

  expect((TicketFactory.create(date, Ticket.TYPE_CHILDREN)).calculate()).toBe(5.5);
  expect((TicketFactory.create(date, Ticket.TYPE_STUDENT)).calculate()).toBe(5.2);
  expect((TicketFactory.create(date, Ticket.TYPE_ELDERLY)).calculate()).toBe(5.7);
});

test('Tickets at Friday', () => {
  const date = new CalendarDate(new Date('September 19, 1986 8:00:00'));

  expect((TicketFactory.create(date, Ticket.TYPE_CHILDREN)).calculate()).toBe(4.89);
  expect((TicketFactory.create(date, Ticket.TYPE_STUDENT)).calculate()).toBe(5.2);
  expect((TicketFactory.create(date, Ticket.TYPE_ELDERLY)).calculate()).toBe(6);

  date.dayOf = true;

  expect((TicketFactory.create(date, Ticket.TYPE_CHILDREN)).calculate()).toBe(5.5);
  expect((TicketFactory.create(date, Ticket.TYPE_STUDENT)).calculate()).toBe(5.2);
  expect((TicketFactory.create(date, Ticket.TYPE_ELDERLY)).calculate()).toBe(5.7);
});