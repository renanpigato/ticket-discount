import Discount from './Discount';

class Ticket {
	readonly TYPE_CHILDREN: string = 'C';
    readonly TYPE_STUDENT: string = 'S';
    readonly TYPE_ELDERLY: string = 'E';
    readonly PRICE: number;

    discounts: Discount[];
    date: Date;

	constructor(date: Date)
	{
        this.date = date;
	}

    addDiscount(discount: Discount)
    {
        this.discounts.push(discount);
    }

	calculate()
	{
		return this.PRICE;
	}
}

module.exports = Ticket;
