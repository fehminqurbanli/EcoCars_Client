import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { CreateProduct } from 'src/app/contracts/create-product';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService:HttpClientService) { }

  create(product:CreateProduct){
    this.httpClientService.post({
      controller:"TB_Ads"
    },product)
      .subscribe((res)=>{
        console.log(res);
      });

    
    console.log("Full Name : " + product.name);  
   console.log("Email Id : " + product.email); 
   console.log("Phone : " + product.phonenumber); 
   console.log("City : " + product.city); 
   console.log("Note : " + product.note); 
  }

  getBrandNames():Observable<any>{
    return this.httpClientService.get({
      controller:"TB_Ads/GetBrandNames"
    })



    // this.httpClientService.get({
    //   controller:"TB_Ads/GetBrandNames"
    // })
    //   .subscribe((res)=>{
    //     console.log(res);
    //   })
    }
    

  
}
