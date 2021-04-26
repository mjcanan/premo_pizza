import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

//import {HttpClient} from '@angular/core';


@Component({
  selector: 'app-employee-sales',
  templateUrl: './employee-sales.component.html',
  //styleUrls: ['./employee-sales.component.css']
<<<<<<< HEAD
=======
 
>>>>>>> 2ace5c505cfa2890a02ae9ef803a0b11edfad94f
})
export class EmployeeSalesComponent implements OnInit {
  searchTerm: number;
  orders: Order[];
  allOrders: Order[];
  term: number;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((data: any)=> {
      this.orders = data;
      this.allOrders = this.orders;
    });
  }

  search(value: string): void {
    // this.orders = this.allOrders.filter((val) => val.dateTime.includes(value));
  }



}
