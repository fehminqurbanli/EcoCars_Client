import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { CreateProduct } from 'src/app/contracts/create-product';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from 'src/app/data-types';
import { GetModelName } from 'src/app/contracts/get-model-name';


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

  }

  getBrandNames():Observable<any>{
    return this.httpClientService.get({
      controller:"TB_Ads/GetBrandNames"
    })}
    

    getModelNames(brandId?:string):Observable<any>{
      return this.httpClientService.get<GetModelName>({
        controller:"TB_Ads/GetModelNames?brandId="+brandId
      })}

      getAll():Observable<any>{
        return this.httpClientService.get({
          controller:"TB_Ads"
        })
      };
  


      getById(id:string){
        return this.httpClientService.get<product>({
          controller:"TB_Ads/GetById?id="+id
        })}
}
