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

 

  refreshList(): void {
    this.retrieveCustomers();
    this.currentCustomer = null;
    this.currentIndex = -1;
  }

  setActiveCustomer(customer, index): void {
    this.currentCustomer= customer;
    this.currentIndex = index;
  }

  removeAllCustomers(): void {
    this.customerService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveCustomers();
        },
        error => {
          console.log(error);
        });
  }

  searchPhonenumber(): void {
    this.customerService.getCustomerById(this.phonenumber) 
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


