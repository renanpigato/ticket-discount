import Discount from './Discount';

export default class DiscountTueday extends Discount {
    static readonly DISCOUNT = 0.15;

    constructor(basePrice: number, typeTicket: string)
    {
        super(basePrice, typeTicket)
    }

    calculate()
    {
        return super.apply(DiscountTueday.DISCOUNT);
    }
}
