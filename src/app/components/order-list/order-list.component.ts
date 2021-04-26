import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders : Order[] = [];
  phonenumber: number;
  //pagination variable (start on page 1)
  p: number = 1;
  private subscription;

  constructor(private orderService : OrderService) { }

  delete(id): void {
    this.orderService.deleteOrder(id).subscribe((data:any) => {
      console.log(data);
      this.retrieveOrders();
    });
  }

  ngOnInit(): void {
  this.retrieveOrders();
  }

  ngOnDestroy() : void {
    this.subscription.unsubscribe();
  }

  //moved outside OnInit to allow for reloading on delete
  retrieveOrders() : void {
    this.subscription = this.orderService.getOrders().subscribe((data:any) => {
      this.orders = data;
    });
  }

  //search by phone number
  searchOrders() : void {
    this.orderService.getOrdersByPhonenumber(this.phonenumber).subscribe( (data:any) =>  {
      this.orders = data;
    })
  }
}
