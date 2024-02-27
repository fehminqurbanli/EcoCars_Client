import { Component,Input ,OnInit} from '@angular/core';
import { ProductService } from 'src/app/services/common/models/product.service';
import { ListComponent } from '../list.component';
import { ActivatedRoute } from '@angular/router';
import { CreateProduct } from 'src/app/contracts/create-product';
import { product } from 'src/app/data-types';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit{
  mainImage:string;
  imageUrl: string[]=[];

  public tbAdsDetail:any;
  constructor(private activeRoute:ActivatedRoute,private productService: ProductService){
  }
  // @Input() list: ListComponent;
  // @Input() inputFromParent: string="";

  ngOnInit(): void {
    let id= this.activeRoute.snapshot.paramMap.get('id');
    // console.log(id);
    this.productService.getById(id).subscribe((res)=>{
      // console.log(res);
      
      console.log(this.tbAdsDetail);
      for (let i = 0; i < res.tB_AdsImages.length; i++) {
        console.log(res.tB_AdsImages[i]);
        // const element = array[i];
        this.imageUrl.push('data:image/jpeg;base64,' + res.tB_AdsImages[i].imageData)
      }

      this.productService.getModelAndBrand(res.model_Id).subscribe((result)=>{
        console.log(result);
        res.brandName=result.brandName;
        res.modelName=result.modelName;
      });
      if (res.leather_Salon==false) {res.leather="Yoxdur";}
      else {res.leather="Var";}
      if (res.park_radar==false) {res.park="Yoxdur";}
      else {res.park="Var";}
      if (res.lyuk==false) {res.dn_Lyuk="Yoxdur";}
      else {res.dn_Lyuk="Var";}
      if (res.condisioner==false) {res.cond="Yoxdur";}
      else {res.cond="Var";}
      if (res.rear_Camera==false) {res.rear="Yoxdur";}
      else {res.rear="Var";}
      if (res.seat_Heating==false) {res.seatHeat="Yoxdur";}
      else {res.seatHeat="Var";}


      if (res.transmission_Id==1) {res.transmission="Arxa";}
      else if (res.transmission_Id==2) {res.transmission="Ön";}
      else {res.transmission="Tam";}

      if (res.speed_Box==1) {res.speedBox="Avtomat";}
      else if (res.speed_Box==2) {res.speedBox="Mexaniki";}
      else if (res.speed_Box==3) {res.speedBox="Robotlaşdırılmış";}
      else {res.speedBox="Variator";}




      if (res.distance_Id==1) {
        res.distanceType="km";
      }
      else{
        res.distanceType="mi";
      }

      if (res.color_Id==1) {
        res.colorName="Yaşıl";
      }
      else if (res.color_Id==2) {
        res.colorName="Qara";
      } 
      else if (res.color_Id==3) {
        res.colorName="Bənövşəyi";
      } 
      else if (res.color_Id==4) {
        res.colorName="Qızılı";
      } 
      else if (res.color_Id==5) {
        res.colorName="Mavi";
      } 
      else if (res.color_Id==6) {
        res.colorName="Narıncı";
      } 
      else if (res.color_Id==7) {
        res.colorName="Qəhvəyi";
      } 
      else if (res.color_Id==8) {
        res.colorName="Sarı";
      } 
      else if (res.color_Id==9) {
        res.colorName="Qırmızı";
      } 
      else if (res.color_Id==10) {
        res.colorName="Gümüşü";
      } 
      else if (res.color_Id==11) {
        res.colorName="Çəhrayı";
      } 
      else if (res.color_Id==12) {
        res.colorName="Ağ";
      } 
      else if (res.color_Id==13) {
        res.colorName="Yaş Asfalt";
      } 
      else if (res.color_Id==14) {
        res.colorName="Göy";
      } 
      else if (res.color_Id==15) {
        res.colorName="Boz";
      } 
      else{
        res.colorName="Bej";
      }




      if (res.ban_Type==1) {
        res.ban="Mikroavtobus";
      }
      else if (res.ban_Type==2) {
        res.ban="Yük maşını";
      } 
      else if (res.ban_Type==3) {
        res.ban="Furqon";
      } 
      else if (res.ban_Type==4) {
        res.ban="Hetçbek";
      } 
      else if (res.ban_Type==5) {
        res.ban="Offroader / SUV";
      } 
      else if (res.ban_Type==6) {
        res.ban="Universal";
      } 
      else if (res.ban_Type==7) {
        res.ban="Kabriolet";
      } 
      else if (res.ban_Type==8) {
        res.ban="Avtobus";
      } 
      else if (res.ban_Type==9) {
        res.ban="Pikap";
      } 
      else {
        res.ban="Sedan";
      } 






      if (res.seat_count==1) {
        res.seat=1;
      }
      else if (res.seat_count==2) {
        res.seat=2;
      } 
      else if (res.seat_count==3) {
        res.seat=3;
      } 
      else if (res.seat_count==4) {
        res.seat=4;
      } 
      else if (res.seat_count==5) {
        res.seat=5;
      } 
      else if (res.seat_count==6) {
        res.seat=6;
      } 
      else if (res.seat_count==7) {
        res.seat=7;
      } 
      else if (res.seat_count==8) {
        res.seat="8+";
      } 
      else {
        res.seat="Qeyd edilməyib";
      } 

      this.tbAdsDetail=res;

    })
    
  }

}
