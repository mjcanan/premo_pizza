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

 public errorApi = false;

  constructor(private customerService: CustomerService,
    private router: Router) { }

    ngOnInit(): void {
//       this.service.getIncidents(this.phonenumber).subscribe(
//      (success) => {
//         this.loading = true;
//         this.data = success.result;
//         this.loading = false;
//         //console.log('Result - ', );
//         console.log('data is received');
//       },
//      (error) => {
//        this.errorApi = true;
//        console.log('Error state from API:', error)}

// )
      }
  


  searchPhonenumber(): void {
    this.customerService.getCustomerByPhonenumber(this.phonenumber) 
      .subscribe(
        data => {
          this.currentCustomer = data;
          console.log(data);
        },
        error => {
          this.handleError(error);
        });
  }
  handleError(error: any) {
    //console.error('An error occurred:', error.message);
    //console.error(error);
    alert("There is no customer with this phone number.  Please Add New Customer.");
}
}


