import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';
import { DatePipe} from '@angular/common';
import { jitOnlyGuardedExpression } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-employee-sales',
  templateUrl: './zip-sales.component.html',
  //styleUrls: ['./zip-sales.component.css']
})
export class ZipSalesComponent implements OnInit {
  searchText: string;
  orders: Order[];
  p: number =1;
  datesSet: boolean = true;
  filterOrder : Order[];
 startdate : Date;
 enddate : Date; 
  datePipeString: string; 
  sumSales = 0;
  sumSales55501 = 0;
  sumSales55502 = 0;
  sumSales55503 = 0;
  sumSales55504 = 0;

  

    constructor(private orderService: OrderService, private datePipe: DatePipe) {
       //this.orderService.getOrders().subscribe((data: any)=> {this.orders = data;});
     }

  ngOnInit(): void {
     this.orderService.getOrders().subscribe((data: any)=> {this.orders = data;});
    // this.transformDate();
     this.totalSales();
     this.totalSalesByZip();
  }
 
  totalSales() {
    this.sumSales =0;
   
    for(let i = 0; i<=this.orders.length; i++){
      
      {this.sumSales += this.orders[i].priceCharged;}
    }
    
   // return this.sumSales;
  }

totalSalesByZip(){
   if (this.datesSet == true){
    for(let i = 0; i < this.orders.length; i++){
      if(this.orders[i].zipcode == 55501)
      {this.sumSales55501 += this.orders[i].priceCharged;
      console.log(this.sumSales55501)};
      if(this.orders[i].zipcode == 55502)
      {this.sumSales55502 += this.orders[i].priceCharged;}
      if(this.orders[i].zipcode == 55503)
      {this.sumSales55503 += this.orders[i].priceCharged;}
      if(this.orders[i].zipcode == 55504)
      {this.sumSales55504 += this.orders[i].priceCharged;}
    }
    this.sumSales = this.sumSales55501 + this.sumSales55502 + this.sumSales55503 + this.sumSales55504;
   }
  this.datesSet = false;
}
 
transformDate (){
  for(let i  of this.orders){
    this.datePipeString =
     this.datePipe.transform(i.dateTime, 'w');
    
  i['weeknumber']= this.datePipeString;
    
     }
     console.log(this.orders);
}

getOrdersAll(){
  this.sumSales = 0;
  this.sumSales55501 = 0;
  this.sumSales55502 = 0;
  this.sumSales55503 = 0;
  this.sumSales55504 = 0;
  this.orderService.getOrders().subscribe((data: any)=> {this.orders = data;});
  this.datesSet = true;
}

filterByDate() {
  let start = this.startdate;
  let end = this.enddate;
  this.filterOrder = this.orders.filter(function(obj){
    console.log("time" + obj.dateTime);
    console.log("starttime" + start);
    console.log("ENDtime" + end);
    return obj.dateTime >= start && obj.dateTime <= end;
 
  });
this.orders = this.filterOrder;
console.log(this.orders)
this.datesSet = true;
  }

}


