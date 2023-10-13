import { Component,OnInit} from '@angular/core';
import { ProductService } from 'src/app/services/common/models/product.service';
// import {  FormGroup,  FormBuilder } from '@angular/forms'; 
import { GetBrandName } from 'src/app/contracts/get-brand-name';
import { GetModelName } from 'src/app/contracts/get-model-name';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent{
  // frmRegister: FormGroup;  
  // public brandNames:[];
  bName: string;
  Model_Id: string;
  public brandNames:GetBrandName[];
  public modelNames:GetModelName[];
  
  transmission_id:number;
  public transmissions: Array<any> = [
    { id: "1", description: "Arxa" },
    { id: "2", description: "Ön" },
    { id: "3", description: "Tam" },
  ];


  ban_type:number;
  public banTypes: Array<any> = [
    { id: "1", description: "Arxa" },
    { id: "2", description: "Ön" },
    { id: "3", description: "Tam" },
  ];



  constructor(private productService:ProductService){
    this.productService.getBrandNames().subscribe((results)=>{
      this.brandNames=results;
      console.log(this.brandNames);
      
    })

  }
  


  onChange($event: any) {

    this.productService.getModelNames($event).subscribe((res)=>{
    this.modelNames=res;
   console.log(this.modelNames);

  })
  }


  create(value:any){
    this.productService.create(value);
  }
}
