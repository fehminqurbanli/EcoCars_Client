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

  public tbAdsDetail:undefined | product;
  constructor(private activeRoute:ActivatedRoute,private productService: ProductService){
  }
  // @Input() list: ListComponent;
  // @Input() inputFromParent: string="";

  ngOnInit(): void {
    let id= this.activeRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.productService.getById(id).subscribe((res)=>{
      console.log(res);
      this.tbAdsDetail=res;
    })
    
  }

}
