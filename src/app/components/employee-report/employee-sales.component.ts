import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

//import {HttpClient} from '@angular/core';


@Component({
  selector: 'app-employee-sales',
  templateUrl: './employee-sales.component.html',
  styleUrls: ['./employee-sales.component.css']
})
export class EmployeeSalesComponent implements OnInit {
  searchTerm: number;
  orders: Order[];
  term: number;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((data: any)=> {this.orders = data})
  }

}
