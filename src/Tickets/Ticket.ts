import Discount from './Discounts/Discount';

class Ticket {
    readonly TYPE_DEFAULT: string = 'D';
    readonly TYPE_CHILDREN: string = 'C';
    readonly TYPE_STUDENT: string = 'S';
    readonly TYPE_ELDERLY: string = 'E';
    readonly PRICE: number;

    date: Date;
    typeSelected: string;

    constructor(date: Date, typeSelected = Ticket.TYPE_DEFAULT)
    {
        this.date = date;
        this.typeSelected = typeSelected;
    }

    calculate(discount: Discount | null = null)
    {
        const price = this.PRICE;
        const discountCalculate = !!discount ? discount : new Discount(price, this.date, this.typeSelected);

        return (price - discountCalculate.calculate());
    }
}

module.exports = Ticket;
