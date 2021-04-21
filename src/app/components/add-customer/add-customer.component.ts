import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customer = {
    phonenumber: null,
    name: '',
    address: '',
    zipcode: null
  }
  private subscription;
  submitted: boolean = false;
  
  constructor(private customerService: CustomerService) { }
  
  ngOnInit(): void {  
    
      }

      saveCustomer(): void {
        const data = {
          
          phonenumber: this.customer.phonenumber,
          name: this.customer.name,
          address:this.customer.address,
          zipcode:this.customer.zipcode
        };
        this.customerService.createCustomer(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
}


  newCustomer(): void {
    this.submitted= false;
    this.customer = {
    phonenumber: 0,
    name: '',
    address: ' ',
    zipcode: 0
    };
  }

}





  
