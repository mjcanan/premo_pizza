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

const routes: Routes = [
  {path: "product", component: ProductComponent},
  {path:"order", component: OrderComponent},
  {path: "employee-list", component: EmployeeListComponent},
  {path: "employee-add", component: EmployeeAddComponent},
  {path: "employee-update/:id", component: EmployeeUpdateComponent},
  {path: "order-list", component: OrderListComponent},
  {path: "order-details/:id",component:OrderDetailsComponent},
  {path:"order", component: OrderComponent},
  
    {path:'',redirectTo: 'customers',pathMatch:'full'},
    {path:"customer-search",component: CustomerListComponent},
    {path:"customer-details/:id",component:CustomerDetailsComponent },
    {path:"customer-add",component:AddCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
