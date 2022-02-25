import Ticket from './Ticket';

class ChildrenTicket extends Ticket {
	readonly price: number = 5.5;

	constructor()
	{
		super();
		console.log('ChildrenTicket');
	}
}

module.exports = ChildrenTicket;
