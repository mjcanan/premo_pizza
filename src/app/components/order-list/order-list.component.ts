import { Component, OnInit } from '@angular/core';
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
  p: number = 1;
  constructor(private orderService : OrderService) { }

  ngOnInit(): void {
    this.retrieveOrders();
  }

  //moved outside OnInit to allow for reloading on delete
  retrieveOrders() : void {
    this.orderService.getOrders().subscribe((data:any) => {
      this.orders = data;
    });
  }

  delete(id): void {
    this.orderService.deleteOrder(id).subscribe((data:any) => {
      console.log(data);
      this.retrieveOrders();
    });
  }

  searchOrders() : void {
    this.orderService.getOrdersByPhonenumber(this.phonenumber).subscribe( (data:any) =>  {
      this.orders = data;
    })
  }

}
