import Discount from './Discount';

class Ticket {
	readonly TYPE_CHILDREN: string = 'C';
    readonly TYPE_STUDENT: string = 'S';
    readonly TYPE_ELDERLY: string = 'E';
    readonly price: number;

    discounts: Discount[];


	constructor()
	{        
		console.log('Ticket');
	}

    addDiscount(discount: Discount)
    {
        this.discounts.push(discount);
    }

	calculate()
	{
		return this.price;
	}
}

module.exports = Ticket;
