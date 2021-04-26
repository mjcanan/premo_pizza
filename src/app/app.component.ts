import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'premo-pizza';
  toggleEmployee = false;
  toggleCustomer = false;
  toggleReports = false;

  public showDropdown(toggle){
    switch(toggle){
      case 1:
        this.toggleCustomer = !this.toggleCustomer;
        this.toggleEmployee = false;
        this.toggleReports = false;
        break;
      case 2:
        this.toggleCustomer = false;
        this.toggleEmployee = !this.toggleEmployee;
        this.toggleReports = false;
        break;
      case 3:
        this.toggleCustomer = false;
        this.toggleEmployee = false;
        this.toggleReports = !this.toggleReports;
        break;
      default:
        this.toggleCustomer = false;
        this.toggleEmployee = false;
        this.toggleReports = false;
        break;
    }
  }

}
