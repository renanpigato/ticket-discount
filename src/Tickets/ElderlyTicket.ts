import Ticket from './Ticket';

class ElderlyTicket extends Ticket {
	readonly price: number = 5.5;

	constructor()
	{
		super();
		console.log('ElderlyTicket');
	}
}

module.exports = ElderlyTicket;
