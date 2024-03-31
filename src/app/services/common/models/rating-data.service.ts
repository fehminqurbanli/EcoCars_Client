import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatingDataService {

  constructor(private httpClientService:HttpClientService) { }

  create(formData:FormData){

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    this.httpClientService.post({
      controller:"RatingData",headers:headers
    },formData)
      .subscribe((res)=>{
        console.log(res);
      });

      
  }
}
