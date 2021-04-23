import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import { Order } from 'src/app/interfaces/order';
import { SalesDataChart } from 'src/app/interfaces/sales-data-chart';
import { EmployeeService } from 'src/app/services/employee.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  //TODO: Dynamically load employees
  salesData: SalesDataChart[];
  salesDataZipCode: SalesDataChart[];
  orders: Order[];
  ytd: number;
  startDate: Date;
  endDate: Date;
  loaded: boolean = false;
  year: number = 0;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((data:any[])=>{
      this.orders = data;
      this.ordersByEmployeeId();
    });
  }
  ordersByZipcode() {
    this.salesDataZipCode = [{name:55501,value:0},{name:55502,value:0},{name:55503,value:0},{name:55504,value:0}]
    this.salesDataZipCode = [...this.salesDataZipCode]
    this.orders.forEach((order)=> {
      for (let i = 0; i < this.salesDataZipCode.length; i++){
        if (this.salesDataZipCode[i].name == order.zipcode &&
          order.dateTime >= this.startDate && order.dateTime <= this.endDate) {
            this.salesDataZipCode[i].value += order.priceCharged;
          }
        }
      });
      this.salesDataZipCode = [...this.salesDataZipCode];
      this.loaded = true;

  }

  ordersByEmployeeId() {
      this.salesData = [{name:1,value:0},{name:2,value:0},{name:3,value:0}]
      this.salesData = [...this.salesData]
      this.orders.forEach((order)=> {
        for (let i = 0; i < this.salesData.length; i++){
          if (this.salesData[i].name == order.employeeId &&
            order.dateTime >= this.startDate && order.dateTime <= this.endDate) {
            this.salesData[i].value += order.priceCharged;
          }
        }
      });
      this.salesData = [...this.salesData];
      this.ordersByZipcode();
      this.yearToDate();
  }

  yearToDate() {
    if (this.startDate != null && this.endDate!=null){
      this.ytd = 0;
      this.orders.forEach((order)=> {
        if (order.dateTime.getFullYear == this.startDate.getFullYear){
          this.ytd += order.priceCharged;
        }
      }
    )
    this.year = new Date(this.startDate).getFullYear();
    }
  }





}
