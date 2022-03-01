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
});

test('Tickets at Tuesday', () => {
  const date = new CalendarDate(new Date('September 16, 1986 8:00:00'));

  expect((TicketFactory.create(date, Ticket.TYPE_CHILDREN)).calculate()).toBe(4.68);
  expect((TicketFactory.create(date, Ticket.TYPE_STUDENT)).calculate()).toBe(5.2);
  expect((TicketFactory.create(date, Ticket.TYPE_ELDERLY)).calculate()).toBe(5.1);
});

test('Tickets at Wednesday', () => {
  const date = new CalendarDate(new Date('September 17, 1986 8:00:00'));

  expect((TicketFactory.create(date, Ticket.TYPE_CHILDREN)).calculate()).toBe(3.85);
  expect((TicketFactory.create(date, Ticket.TYPE_STUDENT)).calculate()).toBe(5.2);
  expect((TicketFactory.create(date, Ticket.TYPE_ELDERLY)).calculate()).toBe(3.6);
});

test('Tickets at Thursday', () => {
  const date = new CalendarDate(new Date('September 18, 1986 8:00:00'));

  expect((TicketFactory.create(date, Ticket.TYPE_CHILDREN)).calculate()).toBe(5.5);
  expect((TicketFactory.create(date, Ticket.TYPE_STUDENT)).calculate()).toBe(5.2);
  expect((TicketFactory.create(date, Ticket.TYPE_ELDERLY)).calculate()).toBe(4.2);
});

test('Tickets at Friday', () => {
  const date = new CalendarDate(new Date('September 19, 1986 8:00:00'));

  expect((TicketFactory.create(date, Ticket.TYPE_CHILDREN)).calculate()).toBe(4.89);
  expect((TicketFactory.create(date, Ticket.TYPE_STUDENT)).calculate()).toBe(5.2);
  expect((TicketFactory.create(date, Ticket.TYPE_ELDERLY)).calculate()).toBe(6);
});

test('Tickets at Weekend', () => {
  const saturday = new CalendarDate(new Date('September 20, 1986 8:00:00'));
  const sunday = new CalendarDate(new Date('September 21, 1986 8:00:00'));

  expect((TicketFactory.create(saturday, Ticket.TYPE_CHILDREN)).calculate()).toBe(5.5);
  expect((TicketFactory.create(saturday, Ticket.TYPE_STUDENT)).calculate()).toBe(8);
  expect((TicketFactory.create(saturday, Ticket.TYPE_ELDERLY)).calculate()).toBe(5.7);

  expect((TicketFactory.create(sunday, Ticket.TYPE_CHILDREN)).calculate()).toBe(5.5);
  expect((TicketFactory.create(sunday, Ticket.TYPE_STUDENT)).calculate()).toBe(8);
  expect((TicketFactory.create(sunday, Ticket.TYPE_ELDERLY)).calculate()).toBe(5.7);
});

test('Tickets at Day Of', () => {
  const monday = new CalendarDate(new Date('September 15, 1986 8:00:00'));
  const tuesday = new CalendarDate(new Date('September 16, 1986 8:00:00'));
  const wednesday = new CalendarDate(new Date('September 17, 1986 8:00:00'));
  const thursday = new CalendarDate(new Date('September 18, 1986 8:00:00'));
  const friday = new CalendarDate(new Date('September 19, 1986 8:00:00'));
  const saturday = new CalendarDate(new Date('September 20, 1986 8:00:00'));
  const sunday = new CalendarDate(new Date('September 21, 1986 8:00:00'));

  monday.dayOf = true;
  tuesday.dayOf = true;
  wednesday.dayOf = true;
  thursday.dayOf = true;
  friday.dayOf = true;
  saturday.dayOf = true;
  sunday.dayOf = true;

  expect((TicketFactory.create(monday, Ticket.TYPE_CHILDREN)).calculate()).toBe(5.5);
  expect((TicketFactory.create(monday, Ticket.TYPE_STUDENT)).calculate()).toBe(5.2);
  expect((TicketFactory.create(monday, Ticket.TYPE_ELDERLY)).calculate()).toBe(5.7);

  expect((TicketFactory.create(tuesday, Ticket.TYPE_CHILDREN)).calculate()).toBe(5.5);
  expect((TicketFactory.create(tuesday, Ticket.TYPE_STUDENT)).calculate()).toBe(5.2);
  expect((TicketFactory.create(tuesday, Ticket.TYPE_ELDERLY)).calculate()).toBe(5.7);

  expect((TicketFactory.create(wednesday, Ticket.TYPE_CHILDREN)).calculate()).toBe(5.5);
  expect((TicketFactory.create(wednesday, Ticket.TYPE_STUDENT)).calculate()).toBe(5.2);
  expect((TicketFactory.create(wednesday, Ticket.TYPE_ELDERLY)).calculate()).toBe(5.7);

  expect((TicketFactory.create(thursday, Ticket.TYPE_CHILDREN)).calculate()).toBe(5.5);
  expect((TicketFactory.create(thursday, Ticket.TYPE_STUDENT)).calculate()).toBe(5.2);
  expect((TicketFactory.create(thursday, Ticket.TYPE_ELDERLY)).calculate()).toBe(5.7);

  expect((TicketFactory.create(friday, Ticket.TYPE_CHILDREN)).calculate()).toBe(5.5);
  expect((TicketFactory.create(friday, Ticket.TYPE_STUDENT)).calculate()).toBe(5.2);
  expect((TicketFactory.create(friday, Ticket.TYPE_ELDERLY)).calculate()).toBe(5.7);

  expect((TicketFactory.create(saturday, Ticket.TYPE_CHILDREN)).calculate()).toBe(5.5);
  expect((TicketFactory.create(saturday, Ticket.TYPE_STUDENT)).calculate()).toBe(8);
  expect((TicketFactory.create(saturday, Ticket.TYPE_ELDERLY)).calculate()).toBe(5.7);

  expect((TicketFactory.create(sunday, Ticket.TYPE_CHILDREN)).calculate()).toBe(5.5);
  expect((TicketFactory.create(sunday, Ticket.TYPE_STUDENT)).calculate()).toBe(8);
  expect((TicketFactory.create(sunday, Ticket.TYPE_ELDERLY)).calculate()).toBe(5.7);
});