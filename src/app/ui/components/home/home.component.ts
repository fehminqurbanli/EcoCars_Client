import { Component,OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/services/common/models/product.service';
import { GetBrandName } from 'src/app/contracts/get-brand-name';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {
  faArrowRight = faArrowRight;
  public tbAds:any[];
  public brandNames:GetBrandName[];
 
  imageUrl: string;

  constructor(private productService:ProductService){
    this.productService.getBrandNames().subscribe((results)=>{
      this.brandNames=results;
      console.log(this.brandNames);
      
    })

  }

  ngOnInit(): void {
    this.productService.getTopThreeCars().subscribe((res)=>{
      console.log(res);
      for (let i = 0; i < res.length; i++) {
        
        console.log(res[i]);
        this.imageUrl = 'data:image/jpeg;base64,' + res[i].tB_AdsImages[0].imageData; // Adjust according to your image type

        res[i].imageUrl=this.imageUrl;
        

        this.productService.getModelAndBrand(res[i].model_Id).subscribe((result)=>{
          console.log(result);
          res[i].brandName=result.brandName;
          res[i].modelName=result.modelName;
        })


        if (res[i].currency_Id==1) {
          res[i].currencyName="AZN";
        }
        else if (res[i].currency_Id==2) {
          res[i].currencyName="USD";
        } 
        else{
          res[i].currencyName="EUR";
        }

        //------------------------------------
        if (res[i].speed_Box==1) {
          res[i].speedBox="Avtomat";
        }
        else if (res[i].speed_Box==2) {
          res[i].speedBox="Mexaniki";
        } 
        else if (res[i].speed_Box==3) {
          res[i].speedBox="Robotlaşdırılmış";
        } 
        else{
          res[i].speedBox="Variator";
        }

    
        if (res[i].distance_Id==1) {
          res[i].distanceType="km";
        }
        else{
          res[i].distanceType="mi";
        }

      }
      this.tbAds=res;
  })



  }
}
