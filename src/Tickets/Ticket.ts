import CalendarDate from './CalendarDate/CalendarDate';
import Discount from './Discounts/Discount';
import DiscountFactory from './Discounts/Factories/DiscountFactory';

export default class Ticket {
    static readonly TYPE_DEFAULT: string = 'D';
    static readonly TYPE_CHILDREN: string = 'C';
    static readonly TYPE_STUDENT: string = 'S';
    static readonly TYPE_ELDERLY: string = 'E';
    
    _price: number;
    _date: CalendarDate;
    _typeSelected: string = Ticket.TYPE_DEFAULT;

    constructor(date: CalendarDate, typeSelected: string | null)
    {
        this._date = date;

        if (!!typeSelected) {
            this._typeSelected = typeSelected;
        }
    }

    set price(price: number)
    {
        this._price = price;
    }

    set date(date: CalendarDate)
    {
        this._date = date;
    }

    set typeSelected(typeSelected: string)
    {
        this._typeSelected = typeSelected;
    }

    get price(): number
    {
        switch(this._typeSelected) {
            case Ticket.TYPE_CHILDREN:
                return 5.5;

            case Ticket.TYPE_STUDENT:
                return 8;

            case Ticket.TYPE_ELDERLY:
                return 6;
        }

        return 10; // Ticket.TYPE_DEFAULT
    }

    get date(): CalendarDate
    {
        return this._date;
    }

    get typeSelected(): string
    {
        return this._typeSelected;
    }

    calculate(discount: Discount | null = null)
    {
        const price = this.price;
        const discountCalculated = !!discount ? discount : DiscountFactory.create(
            this._date,
            price,
            this._typeSelected
        );
        /*
        console.log('Ticket - calculate'
            ,price
            ,discountCalculated.calculate()
            ,Math.round(discountCalculated.calculate())
            ,price - Math.round(discountCalculated.calculate())
        );
        */

        return Math.round((price - discountCalculated.calculate() + Number.EPSILON) * 100) / 100;
    }
}
