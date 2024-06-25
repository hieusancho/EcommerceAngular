import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { OrderPageComponent } from './component/order-page/order-page.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductViewComponent } from './component/product-view/product-view.component';

const routes: Routes = [
  {path:'', component:ProductViewComponent} ,
  {path:'product-detail/:productid', component:ProductDetailComponent},
  {path:'cart-page', component: CartPageComponent},
  {path:'order-page', component: OrderPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
