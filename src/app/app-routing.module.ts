import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderComponent } from './components/order/order.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path: "product", component: ProductComponent},
  {path: "order-list", component: OrderListComponent},
  {path: "order-details/:id",component:OrderDetailsComponent},
  {path:"order", component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
