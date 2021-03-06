import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from '../../interfaces/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
 
    
  currentCustomer : Customer;
  message = '';
  id: any;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getCustomerById(this.route.snapshot.paramMap.get('id'));
    //this.getCustomerByPhonenumber(this.route.snapshot.paramMap.get('id'));
  }
  getCustomerById(id): void {
    this.customerService.getCustomerById(id)
    .subscribe(
      data => {
        this.currentCustomer=data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }


  // getCustomerByPhonenumber(id): void {
  //   this.customerService.getCustomerById(id)
  //     .subscribe(
  //       data => {
  //         this.currentCustomer= data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
  updatecustomer(): void {
    
      this.customerService.update(this.currentCustomer.id, this.currentCustomer)
        .subscribe(
          response => {
            console.log(response);
            this.message = 'The Customer is updated successfully!';
          },
          error => {
            console.log(error);
          });
    }

 

 
}
