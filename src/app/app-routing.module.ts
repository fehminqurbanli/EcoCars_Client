import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';
import { CreateComponent } from './ui/components/products/create/create.component';
import { ListItemComponent } from './ui/components/products/list/list-item/list-item.component';
import { AboutComponent } from './ui/components/about/about.component';

const routes: Routes = [
  {
    path:"admin",component:LayoutComponent,children:[
      {path:"",component:DashboardComponent},
      {path:"customers",loadChildren:()=> import("./admin/components/customer/customer.module").then
      (module=> module.CustomerModule)},
      {path:"order",loadChildren:()=> import("./admin/components/order/order.module").then
      (module=> module.OrderModule)},
      {path:"products",loadChildren:()=> import("./admin/components/products/products.module").then
      (module=> module.ProductsModule)},
    ]
  },
  {path:'' , component:HomeComponent},
  {path:'products',loadChildren:()=>import("./ui/components/products/products.module").then(
    module=>module.ProductsModule
  )},
  { path: 'create', component: CreateComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products/list-item/:id', component: ListItemComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
