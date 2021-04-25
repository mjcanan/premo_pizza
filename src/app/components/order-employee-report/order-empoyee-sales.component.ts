import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/interfaces/order';
import { OrderSearch } from 'src/app/interfaces/ordersearch';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-empoyee-sales',
  templateUrl: './order-empoyee-sales.component.html',
  styleUrls: ['./order-empoyee-sales.component.css']
})
export class OrderEmpoyeeSalesComponent implements OnInit {

  datasource= new FormData();
  orders:Order[];
  ordersearch:OrderSearch[];
  employeeID: any;
  searchValue: string;
  startDate:string;
  endDate:string;
  week: string;
  ordersTotal = 0;
  priceCharged: number;
  
    subtotal: number;
    discount: number;
    total: number;
  
  
  

  
  constructor(private orderService: OrderService,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveOrders();

    
      }
      
      retrieveOrders() : void {
        this.orderService.getOrders().subscribe((data:any) => {
          //this.orders = data;
          this.ordersearch=data;
         // this.ordersearch.week = (this.ordersearch.dateTime | date : "w");
        });
      }
      searchEmployees() : void {
       this.orderService.getAllEmployeeById(this.employeeID).subscribe( (data:any) =>  {
       // this.orders = data;
       this.ordersearch=data;
        this.employeeSales();

        })
      }
      

    employeeSales():void{
      let sum = 0;

      //for(let i = 0; i < this.orders.length; i++){
        for(let i = 0; i < this.ordersearch.length; i++){
        sum+=this.ordersearch[i].priceCharged;
        
      };
      this.ordersTotal = sum ;
  }
  applyFilter(filterValue: string): void{
   // this.datasource.filter= filterValue.trim().toLowerCase();
  }
  
  }
 




