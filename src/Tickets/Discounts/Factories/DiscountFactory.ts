import CalendarDate from '../../CalendarDate/CalendarDate';
import Discount from '../Discount';
import DiscountMonday from '../DiscountMonday';
import DiscountTuesday from '../DiscountTuesday';
import DiscountWednesday from '../DiscountWednesday';
import DiscountThursday from '../DiscountThursday';
import DiscountFriday from '../DiscountFriday';
import DiscountWeekend from '../DiscountWeekend';

export default class DiscountFactory {
    static create(date: CalendarDate, basePrice: number, ticketType: string) {

        if (date.isDayOf()) {
            return new DiscountWeekend(basePrice, ticketType);
        }

        switch(date.date.getDay()) {
            case 1:
                return new DiscountMonday(basePrice, ticketType);
            case 2:
                return new DiscountTuesday(basePrice, ticketType);
            case 3:
                return new DiscountWednesday(basePrice, ticketType);
            case 4:
                return new DiscountThursday(basePrice, ticketType);
            case 5:
                return new DiscountFriday(basePrice, ticketType);
            case 0:
            case 6:
                return new DiscountWeekend(basePrice, ticketType);
        }

        return new Discount(basePrice, ticketType);
    }
}
