import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

//import {HttpClient} from '@angular/core';


@Component({
  selector: 'app-employee-sales',
  templateUrl: './employee-sales.component.html',
  //styleUrls: ['./employee-sales.component.css']
 
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
