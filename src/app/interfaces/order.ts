export class Order {
    public orderId : number
    public phonenumber : string
    public productIds : number[]
    public dateTime : Date
    public discount: number
    public employeeId : number
    public quantity: number
    public priceCharged: number
    public zipcode:number

    constructor(phonenumber: string, productIds: number[], dateTime: Date, discount: number, employeeId: number, quantity: number, priceCharged: number, zipcode: number){

        this.phonenumber = phonenumber;
        this.productIds = productIds;
        this.dateTime = dateTime;
        this.discount = discount;
        this.employeeId = employeeId;
        this.quantity = quantity;
        this.priceCharged = priceCharged;
        this.zipcode = zipcode;
    }
}
