import Ticket from './Ticket';

class StudentTicket extends Ticket {
	readonly price: number = 8;

	constructor()
	{
		super();
		console.log('StudentTicket');
	}
}

module.exports = StudentTicket;
