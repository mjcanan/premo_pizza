import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderComponent } from './components/order/order.component';
import { ProductComponent } from './components/product/product.component';
import {EmployeeListComponent} from './components/employee/employee-list.component';
import {EmployeeAddComponent} from './components/employee/employee-add.component';
import { EmployeeUpdateComponent } from './components/employee/employee-update.component';
import { OrderEmpoyeeSalesComponent } from './components/order-employee-report/order-empoyee-sales.component';
import { EmployeeSalesComponent } from './components/employee-report/employee-sales.component';
//import { ChartsComponent } from './components/charts/charts.component';
//import { ZipSalesComponent} from './components/zip-report/zip-sales.component';
//import { EmployeeSalesComponent } from './components/employee-report/employee-sales.component';
import { ZipSalesComponent} from './components/zip-report/zip-sales.component';
import { ChartsComponent } from './components/charts/charts.component';
//import { OrderEmpoyeeSalesComponent } from './components/order-employee-report/order-empoyee-sales.component';

const routes: Routes = [
  {path: "product", component: ProductComponent},
  {path:"order", component: OrderComponent},
  {path: "order/:id", component: OrderComponent},
  {path: "employee-list", component: EmployeeListComponent},
  {path: "employee-add", component: EmployeeAddComponent},
  {path: "employee-update/:id", component: EmployeeUpdateComponent},
  {path: "order-list", component: OrderListComponent},
  {path: "order-details/:id",component:OrderDetailsComponent},
  {path:"order", component: OrderComponent},
  {path:'customers',component: CustomerListComponent},
  {path: 'customers/:id',component:CustomerDetailsComponent },
  {path:'add',component:AddCustomerComponent},
  {path:'employee-sales',component:OrderEmpoyeeSalesComponent},
 //{path:'charts',component:ChartsComponent},
  
  {path:'',redirectTo: 'customers',pathMatch:'full'},
 {path: "zip-report", component: ZipSalesComponent},
  {path:'employee-sales',component:OrderEmpoyeeSalesComponent},
  {path:'charts',component:ChartsComponent},
  {path:'',redirectTo: 'customers',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
