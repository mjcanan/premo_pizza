import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/interfaces/order';
import { Product } from 'src/app/interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

/* *****************************************************************************
  THIS COMPONENT IS FOR PLACING OF ORDERS (CREATE)
    ORDER-LIST WILL HAVE A LIST OF ALL ORDERS (READ) -- WILL NEED SEARCH
    ORDER-DETAILS WILL BE A GET BY ID (UPDATE -- NO DELETE?)
******************************************************************************* */
export class OrderComponent implements OnInit {

  products: Product[] = [];
  subscription;
  //for checking if an order has been submitted
  submitted = false;
  details = false;
  updated = false;
  order : Order = {
    phonenumber: null,
    productIds: [],
    dateTime: new Date(),
    discount: null,
    employeeId: null,
    quantity: null,
    priceCharged: null,
    zipcode: null
  }
  
  // subtotal: number = 0;
  // tax: number = 0.00;
  // adjustment : number = 0;
  // grandTotal : number = 0;
  // displayedColumns = ['', 'Item', 'Description', 'Price'];
  // postOrder = {};
  // employeeid: number = 0;
  
  constructor(private orderService: OrderService,
              private route: ActivatedRoute,
              private router: Router) { }
            
  ngOnInit(): void {
    
    if (this.router.url.includes('order-details')){
      this.subscription = this.orderService.getOrderById(this.route.snapshot.paramMap.get('id')).subscribe((data:any) => {
        this.order = data 
      });
      this.details = true;
    }
    this.subscription = this.orderService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  
  }

  addToOrder(product){
    this.order.productIds.push(product.productId);
    this.order.quantity += 1;
    this.order.priceCharged += product.price;
    console.log("Product ID: " + product.productId);
  }

  //removes items from order and adjusts priceCharged
  removeItem(index) {
    let id = this.order.productIds.splice(index, 1);
    this.order.priceCharged -= this.products[id[0]-1].price;
  }

  //function to handle changes to discount 
  subtractDiscount(){
      let sum = 0;
      for(let i = 0; i < this.order.productIds.length; i++){
        sum += this.products[this.order.productIds[i]-1].price;
      };
      this.order.priceCharged = sum - this.order.discount;
  }

  update() {
    this.orderService.updateOrder(this.order.orderId, this.order).subscribe((data:any) => {
      console.log(data);
    });

    this.updated = true;
  }
  
  sendOrder() {

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
    //Checking for errors
    console.log(orderData);

    this.orderService.sendPostRequest(orderData).subscribe((data:any)=>{
      console.log(data);
      this.submitted = true;
    },
    error=> {
      console.log(error);
    });

    this.submitted = true;
  }

  newOrder() {

    this.order = {
      phonenumber: null,
      productIds: [],
      dateTime: new Date(),
      discount: null,
      employeeId: null,
      quantity: null,
      priceCharged: null,
      zipcode: null
    }
    this.submitted = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}