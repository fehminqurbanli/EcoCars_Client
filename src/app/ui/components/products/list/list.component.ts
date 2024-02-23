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

  imageUrl: string;
  constructor(private productService: ProductService){
  }


  ngOnInit(): void {
    this.productService.getAll().subscribe((res)=>{
      console.log(res);
      for (let i = 0; i < res.length; i++) {
        // const element = array[i];
        console.log(res[i]);
        this.imageUrl = 'data:image/jpeg;base64,' + res[i].tB_AdsImages[0].imageData; // Adjust according to your image type

        res[i].imageUrl=this.imageUrl;
        
      }
      this.tbAds=res;
  })
  }

}
