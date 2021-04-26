import { DatePipe } from '@angular/common';
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
  sum:number;
  week: string;
  ordersTotal = 0;
  weeksum=0;
  employeeID: any;
  dateTime: string;
  orders:Order[];
  ordersearch : OrderSearch[];
  filteredOrders: OrderSearch[];
   private _searchValue: string;
  datePipeString: string;
   
   get searchValue(): string{
     return this._searchValue;
   }

   set searchValue(value: string) {
     this._searchValue=value;
     console.log(this._searchValue);
     this.filteredOrders = this.filterOrders(value);
     console.log(this.filteredOrders);
   }
  
 
  filterOrders(searchString: string) {
       return this.ordersearch.filter(ordersearch=> ordersearch.dateTime.toLocaleLowerCase().includes(searchString.toLocaleLowerCase()));
  }
  
 
  constructor(private orderService: OrderService, private datePipe: DatePipe,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveOrders();
    this.filteredOrders=this.ordersearch

  }
      
      retrieveOrders() : void {
        this.orderService.getOrders().subscribe((data:any) => {
        this.ordersearch=data;
       });
      }
      searchEmployees() : void {
       this.orderService.getAllEmployeeById(this.employeeID).subscribe( (data:any) =>  {
       this.ordersearch=data;
       this.employeeSales();
       this.transformDate();

        })
      }
      

    employeeSales():void{
      let sum = 0;

      for(let i = 0; i < this.ordersearch.length; i++){
        sum+=this.ordersearch[i].priceCharged;
        
      };
      this.ordersTotal = sum ;
  }

  salesByWeek(searchString: string){
   
   this.ordersearch = this.filterOrders(this.searchValue);
   let sum=0;
   for(let i =0; i< this.ordersearch.length;i++){
    sum+=this.ordersearch[i].priceCharged;
  };
  this.weeksum = sum;  
}

// transforms the date field to week number
transformDate (){
  
    for ( let i=0; i<this.ordersearch.length;i++){
    this.datePipeString =
    this.datePipe.transform(this.ordersearch[i].dateTime, 'w');
    this.ordersearch[i].dateTime = this.datePipeString;
  
    }

  }

}


