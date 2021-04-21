import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from '../interface/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  currentCustomer : Customer;
  message = '';
  //phonenumber: any;
 phonenumber: number;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    
    this.getCustomerById(this.route.snapshot.paramMap.get['id']);
  }

  getCustomerById(id): void {
    this.customerService.getCustomerById(id)
      .subscribe(
        data => {
          this.currentCustomer = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  /*updatePublished(status): void {
    const data = {
      title: this.currentCustomer.title,
      description: this.currentCustomer.description,
      published: status
    };*/

  /*  this.customerService.update(this.currentCustomer.phonenumber, data)
      .subscribe(
        response => {
          this.currentCustomer.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }*/

  updateCustomer(): void {
    const data = {
      phonenumber: this.currentCustomer.phonenumber,
      name: this.currentCustomer.name,
      address:this.currentCustomer.address,
      zipcode:this.currentCustomer.zipcode
    };
    this.customerService.update(this.currentCustomer.phonenumber, data)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The customer is updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteCustomer(): void {
    this.customerService.delete(this.phonenumber)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/customers']);
        },
        error => {
          console.log(error);
        });
  }
}
