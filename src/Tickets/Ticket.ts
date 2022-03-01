import CalendarDate from './CalendarDate/CalendarDate';
import Discount from './Discounts/Discount';
import DiscountFactory from './Discounts/Factories/DiscountFactory';

export default class Ticket {
    static readonly TYPE_DEFAULT: string = 'D';
    static readonly TYPE_CHILDREN: string = 'C';
    static readonly TYPE_STUDENT: string = 'S';
    static readonly TYPE_ELDERLY: string = 'E';
    static readonly PRICE: number;

    date: CalendarDate;
    typeSelected: string = Ticket.TYPE_DEFAULT;

    constructor(date: CalendarDate, typeSelected: string | null)
    {
        this.date = date;

        if (!!typeSelected) {
            this.typeSelected = typeSelected;
        }
    }

    calculate(discount: Discount | null = null)
    {
        const price = this.PRICE;
        const discountCalculate = !!discount ? discount : DiscountFactory.create(this.date, price, this.typeSelected);
        /*
        console.log('Ticket - calculate'
            ,price
            ,discountCalculate
        );
        */

        return (price - discountCalculate.calculate());
    }
}
