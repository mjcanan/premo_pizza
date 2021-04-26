
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './components/order/order.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { EmployeeListComponent } from './components/employee/employee-list.component';
import { EmployeeAddComponent } from './components/employee/employee-add.component';
import { EmployeeUpdateComponent } from './components/employee/employee-update.component';
import { ZipSalesComponent } from './components/zip-report/zip-sales.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ChartsModule } from 'ng2-charts';
import {DatePipe} from '@angular/common';
import { OrderEmpoyeeSalesComponent } from './components/order-employee-report/order-empoyee-sales.component';
import { ChartsComponent } from './components/charts/charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EmployeeSalesComponent} from './components/employee-report/employee-sales.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    CustomerDetailsComponent,
    CustomerListComponent,
    OrderComponent,
    ProductComponent,
    OrderDetailsComponent,
    OrderListComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeUpdateComponent,
    ZipSalesComponent,
    OrderEmpoyeeSalesComponent, 
    EmployeeSalesComponent,
    ChartsComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
