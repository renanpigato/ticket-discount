import CalendarDate from '../src/CalendarDate/CalendarDate';
import TicketFactory from '../src/Tickets/Factories/TicketFactory';
import Ticket from '../src/Tickets/Ticket';
import StudentTicket from '../src/Tickets/StudentTicket';

/**
 * Teste de ingressos de estudantes.
 * 
 * O Desconto concedido deve ser de 35%, em qualquer dia da semana,
 * exceto nos finais de semana restando o valor com desconto de R$ 5,20
 * 
 * Valor original R$ 8,00
 * Desconto R$ 2,80
 * Valor com desconto R$ 5,20
 */
test('Discount to student', () => {
  expect((new StudentTicket(new CalendarDate(new Date('September 15, 1986 8:00:00')))).calculate()).toBe(5.2); // Monday
  expect((new StudentTicket(new CalendarDate(new Date('September 16, 1986 8:00:00')))).calculate()).toBe(5.2); // Tuesday
  expect((new StudentTicket(new CalendarDate(new Date('September 17, 1986 8:00:00')))).calculate()).toBe(5.2); // Wednesday
  expect((new StudentTicket(new CalendarDate(new Date('September 18, 1986 8:00:00')))).calculate()).toBe(5.2); // Thursday
  expect((new StudentTicket(new CalendarDate(new Date('September 19, 1986 8:00:00')))).calculate()).toBe(5.2); // Friday
});

/**
 * Teste de ingressos de estudantes.
 * 
 * Em finais de semana o estudante não tem desconto,
 * permanecendo o valor original de R$ 8,00
 */
test('Student has no discount', () => {
  expect((new StudentTicket(new CalendarDate(new Date('September 14, 1986 8:00:00')))).calculate()).toBe(8); // Sunday
  expect((new StudentTicket(new CalendarDate(new Date('September 20, 1986 8:00:00')))).calculate()).toBe(8); // Saturday
});

/**
 * Testes de ingressos na segunda-feira, 
 * o desconto deve ser de 10% para todos os ingressos,
 * entretanto estudantes sempre tem 35% de descontos
 * nos dias da semana entre segunda e sexta,
 * portanto sobrescreve essa regra no caso de estudantes,
 * permanecendo como a tabela abaixo:s
 * 
 *              |  Valor original   |  Desconto  |  Valor com desconto
 * Crianças     |         R$ 5,50   |     10%    |             R$ 4,95
 * Estudantes   |         R$ 8,00   |     35%    |             R$ 5,20
 * Idosos       |         R$ 6,00   |     10%    |             R$ 5,40
 */
test('Tickets at Monday', () => {
  const date = new CalendarDate(new Date('September 15, 1986 8:00:00'));

  expect((TicketFactory.create(date, Ticket.TYPE_CHILDREN)).calculate()).toBe(4.95);
  expect((TicketFactory.create(date, Ticket.TYPE_STUDENT)).calculate()).toBe(5.2);
  expect((TicketFactory.create(date, Ticket.TYPE_ELDERLY)).calculate()).toBe(5.4);
});

/**
 * Testes de ingressos na terça-feira, o desconto deve ser de 15% para 
 * idosos e crianças e 5% para estudantes entretanto esse último sempre
 * tem 35% de descontos nos dias da semana entre segunda e sexta, portanto 
 * sobrescreve essa regra no caso de estudantes, permanecendo como a 
 * tabela abaixo:
 * 
 *              |  Valor original   |  Desconto  |  Valor com desconto
 * Crianças     |         R$ 5,50   |     15%    |             R$ 4,68
 * Estudantes   |         R$ 8,00   |     35%    |             R$ 5,20
 * Idosos       |         R$ 6,00   |     15%    |             R$ 5,10
 */
test('Tickets at Tuesday', () => {
  const date = new CalendarDate(new Date('September 16, 1986 8:00:00'));

  expect((TicketFactory.create(date, Ticket.TYPE_CHILDREN)).calculate()).toBe(4.68);
  expect((TicketFactory.create(date, Ticket.TYPE_STUDENT)).calculate()).toBe(5.2);
  expect((TicketFactory.create(date, Ticket.TYPE_ELDERLY)).calculate()).toBe(5.1);
});

/**
 * Testes de ingressos na quarta-feira, o desconto deve ser de 40% para 
 * idosos, 30% para crianças e 50% para estudantes entretanto esse último
 * sempre tem 35% de descontos nos dias da semana entre segunda e sexta,
 * portanto sobrescreve essa regra no caso de estudantes, permanecendo como
 * a tabela abaixo:
 * 
 *              |  Valor original   |  Desconto  |  Valor com desconto
 * Crianças     |         R$ 5,50   |     30%    |             R$ 3,85
 * Estudantes   |         R$ 8,00   |     35%    |             R$ 5,20
 * Idosos       |         R$ 6,00   |     40%    |             R$ 3,60
 */
test('Tickets at Wednesday', () => {
  const date = new CalendarDate(new Date('September 17, 1986 8:00:00'));

  expect((TicketFactory.create(date, Ticket.TYPE_CHILDREN)).calculate()).toBe(3.85);
  expect((TicketFactory.create(date, Ticket.TYPE_STUDENT)).calculate()).toBe(5.2);
  expect((TicketFactory.create(date, Ticket.TYPE_ELDERLY)).calculate()).toBe(3.6);
});

/**
 * Testes de ingressos na quinta-feira, o desconto deve ser de 30% para 
 * idosos e estudantes entretanto estudantes sempre tem 35% de descontos
 * nos dias da semana entre segunda e sexta, portanto sobrescreve essa 
 * regra no caso de estudantes, permanecendo como a tabela abaixo:
 * 
 *              |  Valor original   |  Desconto  |  Valor com desconto
 * Crianças     |         R$ 5,50   |      0%    |             R$ 5,50
 * Estudantes   |         R$ 8,00   |     35%    |             R$ 5,20
 * Idosos       |         R$ 6,00   |     30%    |             R$ 4,20
 */
test('Tickets at Thursday', () => {
  const date = new CalendarDate(new Date('September 18, 1986 8:00:00'));

  expect((TicketFactory.create(date, Ticket.TYPE_CHILDREN)).calculate()).toBe(5.5);
  expect((TicketFactory.create(date, Ticket.TYPE_STUDENT)).calculate()).toBe(5.2);
  expect((TicketFactory.create(date, Ticket.TYPE_ELDERLY)).calculate()).toBe(4.2);
});

/**
 * Testes de ingressos na sexta-feira, o desconto deve ser de 11% nos 
 * ingressos para crianças apenas, entretanto estudantes sempre tem 
 * 35% de descontos nos dias da semana entre segunda e sexta, portanto 
 * sobrescreve essa regra no caso de estudantes, permanecendo como a 
 * tabela abaixo:
 * 
 *              |  Valor original   |  Desconto  |  Valor com desconto
 * Crianças     |         R$ 5,50   |     11%    |             R$ 4,89
 * Estudantes   |         R$ 8,00   |     35%    |             R$ 5,20
 * Idosos       |         R$ 6,00   |      0%    |             R$ 6,00
 */
test('Tickets at Friday', () => {
  const date = new CalendarDate(new Date('September 19, 1986 8:00:00'));

  expect((TicketFactory.create(date, Ticket.TYPE_CHILDREN)).calculate()).toBe(4.89);
  expect((TicketFactory.create(date, Ticket.TYPE_STUDENT)).calculate()).toBe(5.2);
  expect((TicketFactory.create(date, Ticket.TYPE_ELDERLY)).calculate()).toBe(6);
});

/**
 * Testes de ingressos nos finais de semana, o desconto deve ser de 5% 
 * para idosos apenas, conforme a tabela abaixo:
 * 
 *              |  Valor original   |  Desconto  |  Valor com desconto
 * Crianças     |         R$ 5,50   |      0%    |             R$ 5,50
 * Estudantes   |         R$ 8,00   |      0%    |             R$ 8,00
 * Idosos       |         R$ 6,00   |      5%    |             R$ 5,70
 */
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

/**
 * Testes de ingressos nos feriados, independente do dia da semana, 
 * se final de semana ou não, o desconto deve ser de 5%  para idosos apenas,
 * entretanto estudantes sempre tem 35% de descontos nos dias da semana
 * entre segunda e sexta, portanto sobrescreve essa regra no caso de estudantes,
 * conforme a tabela abaixo:
 * 
 *              |  Valor original   |  Desconto  |  Valor com desconto
 * Crianças     |         R$ 5,50   |      0%    |             R$ 5,50
 * Estudantes   |         R$ 8,00   |     35%    |             R$ 5,20
 * Estudantes   |         R$ 8,00   |      0%    |             R$ 8,00 ** finais de semana
 * Idosos       |         R$ 6,00   |      5%    |             R$ 5,70
 */
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