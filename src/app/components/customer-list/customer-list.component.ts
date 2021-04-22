import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from '../../interfaces/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  [x: string]: any;

  //customer:any;
  //currentCustomer = null;
  currentIndex=-1;
  phonenumber:number;
  currentCustomer : Customer ;
  message = '';



  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
    
      }

  searchPhonenumber(): void {
    this.customerService.getCustomerByPhonenumber(this.phonenumber) 
      .subscribe(
        data => {
          this.currentCustomer = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
 
}


