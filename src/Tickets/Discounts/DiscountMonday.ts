import Discount from './Discount';

export default class DiscountMonday extends Discount {
    static readonly DISCOUNT = 0.1;

    constructor(basePrice: number, typeTicket: string)
    {
        super(basePrice, typeTicket)
    }

    calculate()
    {
        return super.apply(DiscountMonday.DISCOUNT);
    }
}
