import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/interfaces/order';
import { Product } from 'src/app/interfaces/product';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  
  products : Product[] = [];
  order : Order;
  subscription;
  subscriptionProducts;
  updated = false;
  
  constructor(  private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router) { }
    
    ngOnInit(): void {
    this.getOrderDetails(this.route.snapshot.paramMap.get('id'));
    //copied from order component
    this.subscriptionProducts = this.orderService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
    
  getOrderDetails(orderId){
    this.subscription = this.orderService.getOrderById(orderId).subscribe((data:any) => {
      this.order = data 
    });  
  }

  update() {
    this.orderService.updateOrder(this.order.orderId, this.order).subscribe((data:any) => {
      console.log(data);
    });

    this.updated = true;
  }

/* *****************************************************
*
* COPY AND PASTED FROM ORDER COMPONENT -- BETTER SOLUTION IS TO REDIRECT TO ORDER COMPONENT, BUT WITH ORDERS PREPOPULATED
* JUST NOT SURE HOW TO DO THAT AND NEED TO GET SOMETHING WORKING
*
******************************************************* */

  //function to handle changes to discount 
  subtractDiscount(){
    let sum = 0;
    for(let i = 0; i < this.order.productIds.length; i++){
      sum += this.products[this.order.productIds[i]-1].price;
    };
    this.order.priceCharged = sum - this.order.discount;
}

  //removes items from order and adjusts priceCharged
  removeItem(index) {
    let id = this.order.productIds.splice(index, 1);
    this.order.priceCharged -= this.products[id[0]-1].price;
  }
  
  addToOrder(product){
    this.order.productIds.push(product.productId);
    this.order.quantity += 1;
    this.order.priceCharged += product.price;
    console.log("Product ID: " + product.productId);
  }

  ngOnDestroy() : void {
    this.subscription.unsubscribe();
    this.subscriptionProducts.unsubscribe();
  }

}
