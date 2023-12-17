import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient,@Inject("baseUrl") private baseUrl:string) {   }

  private url(requestParameters:Partial<RequestParameters>): string{
    return `${requestParameters.baseUrl?requestParameters.baseUrl:this.baseUrl}/${requestParameters.controller}${requestParameters.action ? `/${requestParameters.action}`:""}`;
  }

  get<T>(requestParameters:Partial<RequestParameters>,id?:string):Observable<T>{
    let url:string ="";
    if(requestParameters.fullEndPoint){
      url=requestParameters.fullEndPoint;
    }
    else{
      url=`${this.url(requestParameters)}${id?`/${id}`:""} `;
    }
    return this.httpClient.get<T>(url,{headers:requestParameters.headers});
   }

   post<T>(requestParameter: Partial<RequestParameters>,body: Partial<T>):Observable<T>{
    let url:string="";
    if(requestParameter.fullEndPoint){
      url=requestParameter.fullEndPoint;
    }
    else{
      url=`${this.url(requestParameter)}`;
    }
    // console.log(url);
    return this.httpClient.post<T>(url,body,{headers:requestParameter.headers});
   }

   put<T>(requestParameter:Partial<RequestParameters>,body:Partial<T>):Observable<T>{
    let url:string="";
    if(requestParameter.fullEndPoint){
      url=requestParameter.fullEndPoint;
    } 
    else{
      url=`${this.url(requestParameter)}`;
    }
    return this.httpClient.put<T>(url,body,{headers:requestParameter.headers});
   }

   delete<T>(requestParameter:Partial<RequestParameters>,id:string):Observable<T>{
    let url:string="";
    if(requestParameter.fullEndPoint){
      url=requestParameter.fullEndPoint;
    } 
    else{
      url=`${this.url(requestParameter)}/${id}`;
    }
    return this.httpClient.delete<T>(url,{headers:requestParameter.headers});
   }


   uploadPhoto(photo: any) {
    let apiUrl:string="https://localhost:7171/api/";

    return this.httpClient.post(apiUrl + 'Tb_Ads/Upload', photo);
  }
}


export class RequestParameters{
  controller?:string;
  action?:string;

  headers?:HttpHeaders;
  baseUrl?:string;
  fullEndPoint?:string;
}