import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  {path:"order", component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
