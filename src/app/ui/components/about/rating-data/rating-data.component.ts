import { Component } from '@angular/core';
import {  FormGroup,  FormBuilder } from '@angular/forms'; 
import { Router } from '@angular/router';
import { RatingDataService } from 'src/app/services/common/models/rating-data.service';

@Component({
  selector: 'app-rating-data',
  templateUrl: './rating-data.component.html',
  styleUrls: ['./rating-data.component.scss']
})
export class RatingDataComponent {
  constructor(
    private ratingDataService:RatingDataService,
    private router: Router
    // ,private fb: FormBuilder
    ){
  }

  formData = { description:'',ratingStar:0,userName:''};


ratingStar:number;




  create(value:any){
    const formPayload: FormData = new FormData();
    formPayload.append('description',this.formData.description);
    formPayload.append('ratingStar',this.formData.ratingStar.toString());
    formPayload.append('userName',this.formData.userName);
    
    this.ratingDataService.create(formPayload);
    this.router.navigate([``]);

  }
}
