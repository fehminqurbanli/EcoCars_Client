import { Component ,OnInit} from '@angular/core';
import { CreateProduct } from 'src/app/contracts/create-product';
import { ProductService } from 'src/app/services/common/models/product.service';
import {  FormGroup,  FormBuilder } from '@angular/forms'; 
import { GetBrandName } from 'src/app/contracts/get-brand-name';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit{
  frmRegister: FormGroup;  
  // public brandNames:[];
  constructor(private _fb: FormBuilder,private productService:ProductService){
  }

  public brandNames:GetBrandName[];

  ngOnInit(): void {
    this.productService.getBrandNames().subscribe((results)=>{
      this.brandNames=results;
    })
  }
  
  // create(name : HTMLInputElement,city: HTMLInputElement,email: HTMLInputElement,phone: HTMLInputElement){
  //   const create_product:CreateProduct=new CreateProduct();
  //   create_product.name=name.value;
  //   create_product.city=city.value;
  //   create_product.email=email.value;
  //   create_product.phone=phone.value;
  //   // create_product.stock=parseInt(stock.value);
  //   // create_product.price=parseFloat(price.value);

  //   this.productService.create(create_product);
  // }


  create(value:any){
    
    // create_product.stock=parseInt(stock.value);
    // create_product.price=parseFloat(price.value);

    this.productService.create(value);
  }
}
