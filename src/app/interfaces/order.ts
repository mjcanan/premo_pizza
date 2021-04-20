export interface Order {
    orderId?: number
    phonenumber : string
    productIds : number[]
    dateTime : Date
    discount: number
    employeeId : number
    quantity: number
    priceCharged: number
    zipcode:number

    // constructor(phonenumber: string, productIds: number[], dateTime: Date, discount: number, employeeId: number, quantity: number, priceCharged: number, zipcode: number){

    //     this.phonenumber = phonenumber;
    //     this.productIds = productIds;
    //     this.dateTime = dateTime;
    //     this.discount = discount;
    //     this.employeeId = employeeId;
    //     this.quantity = quantity;
    //     this.priceCharged = priceCharged;
    //     this.zipcode = zipcode;
    // }
}
