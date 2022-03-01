import CalendarDate from '../CalendarDate/CalendarDate';
import Ticket from './Ticket';

export default class StudentTicket extends Ticket {
    readonly PRICE: number = 8;
    readonly DISCOUNT_PERCENT: number = 0.35;
    readonly WEEKEND: number[] = [6, 0];

    constructor(date: CalendarDate)
    {
        super(date, Ticket.TYPE_STUDENT);
    }

    calculate()
    {
        const basePrice = this.PRICE;
        let discount = this.DISCOUNT_PERCENT;

        if (this.WEEKEND.indexOf(this.date.date.getDay()) > -1) {
            discount = 0;
        }

        return basePrice - (basePrice * discount);
    }
}
