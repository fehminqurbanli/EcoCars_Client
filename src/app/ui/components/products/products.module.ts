import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListItemComponent } from './list/list-item/list-item.component';

@NgModule({
  declarations: [
    ProductsComponent,
    CreateComponent,
    ListComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:ProductsComponent}
    ]),
    FormsModule,
    ReactiveFormsModule,FontAwesomeModule
  ]
})
export class ProductsModule { }
