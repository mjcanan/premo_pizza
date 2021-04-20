import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  
  order : Order;
  subscription;
  
  constructor(  private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router) { }
    
    ngOnInit(): void {
    this.getOrderDetails(this.route.snapshot.paramMap.get('id'));
  }
    
  getOrderDetails(orderId){
    this.subscription = this.orderService.getOrderById(orderId).subscribe((data:any) => {
      this.order = data 
    });  
  }

  update() {
    this.orderService.updateOrder(this.order.orderId, this.order).subscribe((data:any) => {
      console.log(data);
    })
  }

  ngOnDestroy() : void {
    this.subscription.unsubscribe();
  }

}
