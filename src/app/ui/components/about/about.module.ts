import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { FormsModule } from '@angular/forms';
import { RatingDataComponent } from './rating-data/rating-data.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AboutComponent,
    RatingDataComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:AboutComponent}
    ]),
    FormsModule
  ]
})
export class AboutModule { }
