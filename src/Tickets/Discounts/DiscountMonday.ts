import Discount from './Discount';

class DiscountMonday extends Discount {
    static readonly DISCOUNT = 0.1;

    constructor(basePrice: number, typeTicket: string)
    {
        super(basePrice, typeTicket)
    }

    calculate()
    {
        return this.basePrice * DiscountMonday.DISCOUNT;
    }
}

module.exports = DiscountMonday;
