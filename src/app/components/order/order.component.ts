import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/interfaces/order';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

/* *****************************************************************************
  THIS COMPONENT IS FOR PLACING OF ORDERS (CREATE)
    ORDER-LIST WILL HAVE A LIST OF ALL ORDERS (READ) -- WILL NEED SEARCH
    ORDER-DETAILS WILL BE A GET BY ID (PHONENUMBER?) (UPDATE -- NO DELETE?)
******************************************************************************* */
export class OrderComponent implements OnInit {

  products: Product[] = [];
  // order : Order = {
  //   orderId : 0,
  //   phonenumber: '',
  //   productIds : [],
  //   dateTime : new Date(),
  //   discount: 0,
  //   employeeId : 0,
  //   quantity: 0,
  //   priceCharged: 0,
  //   zipcode: 0,
  // };
  //for checking if an order has been submitted
  submitted: boolean = false;
  order : Order = {
    phonenumber: "888-888-8888",
    productIds: [1,1],
    dateTime: new Date(),
    discount: 1.00,
    employeeId: 1,
    quantity: 2,
    priceCharged: 14.50,
    zipcode: 55501
  }
  
  // subtotal: number = 0;
  // tax: number = 0.00;
  // adjustment : number = 0;
  // grandTotal : number = 0;
  // displayedColumns = ['', 'Item', 'Description', 'Price'];
  // postOrder = {};
  // employeeid: number = 0;
  
  constructor(private orderService: OrderService) { }
  
  ngOnInit(): void {
    this.orderService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
  
  sendOrder() {
    //hard coded to test backend -- FIX LATER
    //let order : Order = new Order("666-666-6666",[2], new Date(),1.35,1,2,10.50,55501); 
    
    // this.order.phonenumber = "888-888-8888";
    // this.order.discount = 1.00;
    // this.order.employeeId = 1;
    // this.order.quantity = 2;
    // this.order.priceCharged = 14.50;
    // this.order.zipcode = 55501;

    const orderData : Order = {
      phonenumber: this.order.phonenumber,
      productIds: this.order.productIds,
      dateTime: new Date(),
      discount: this.order.discount,
      employeeId: this.order.employeeId,
      quantity: this.order.quantity,
      priceCharged: this.order.priceCharged,
      zipcode: this.order.zipcode,
    }
    console.log(orderData);

    this.orderService.sendPostRequest(orderData).subscribe((data:any)=>{
      console.log(data);
      this.submitted = true;
    },
    error=> {
      console.log(error);
    });
  }
}