import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/interfaces/order';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  products: Product[] = [];
  orderDetail = [];
  phonenumber: string = "0";
  subtotal: number = 0;
  tax: number = 0.00;
  adjustment : number = 0;
  grandTotal : number = 0;
  displayedColumns = ['', 'Item', 'Description', 'Price'];
  postOrder = {};
  employeeid: number = 0;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  sendOrder() {
    let order : Order = new Order("666-666-6666",[2], new Date(),1.35,1,2,10.50,55501); 
    this.orderService.sendPostRequest(order).subscribe((data:any)=>{
      console.log(data);
    },
    error=> {
      console.log(error);
    });
  }
}