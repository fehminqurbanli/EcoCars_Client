import { HttpHeaders } from '@angular/common/http';
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

  create(formData:FormData
    // ,carImagePath:Array<File>
    ){

    // product.TB_AdsImages=carImagePath;
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    this.httpClientService.post({
      controller:"TB_Ads",headers:headers
    },formData)
      .subscribe((res)=>{
        console.log(res);
      });

      
  }

  getBrandNames():Observable<any>{
    return this.httpClientService.get({
      controller:"TB_Ads/GetBrandNames"
    })};
    

      getModelNames(brandId?:string):Observable<any>{
        return this.httpClientService.get<GetModelName>({
        controller:"TB_Ads/GetModelNames?brandId="+brandId
      })};

        getModelAndBrand(modelId?:string):Observable<any>{
          return this.httpClientService.get<any>({
          controller:"TB_Ads/GetModelAndBrand?modelId="+modelId
        })};

      getAll():Observable<any>{
        return this.httpClientService.get({
          controller:"TB_Ads"
        })
      };
  
      getTopThreeCars():Observable<any>{
        return this.httpClientService.get({
          controller:"TB_Ads/GetTopThreeCars"
        })
      };

      getById(id:string):Observable<any>{
        return this.httpClientService.get<product>({
          controller:"TB_Ads/GetById?id="+id
        })}


        upload(formData:any){
          return this.httpClientService.uploadPhoto(formData);
        }
}
