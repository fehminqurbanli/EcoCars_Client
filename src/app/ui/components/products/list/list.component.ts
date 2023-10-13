import { Component,OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  faArrowRight = faArrowRight;
  public tbAds:any[];
  // public id:string;

  
  constructor(private productService: ProductService){
  }


  ngOnInit(): void {
    this.productService.getAll().subscribe((res)=>{
    this.tbAds=res;
    
    })
  }

}
