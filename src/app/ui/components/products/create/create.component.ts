import { Component,OnInit} from '@angular/core';
import { ProductService } from 'src/app/services/common/models/product.service';
import {  FormGroup,  FormBuilder } from '@angular/forms'; 
import { GetBrandName } from 'src/app/contracts/get-brand-name';
import { GetModelName } from 'src/app/contracts/get-model-name';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent{
  // frmRegister: FormGroup;  
  // public brandNames:[];
  bName: string;
  model_id: string;
  public brandNames:GetBrandName[];
  public modelNames:GetModelName[];
  

  todoForm: FormGroup = this.fb.group({
    todo: '',
    image:'', //making the image required here
    done: [false]
  })


  transmission_id:number;
  public transmissions: Array<any> = [
    { id: "1", description: "Arxa" },
    { id: "2", description: "Ön" },
    { id: "3", description: "Tam" },
  ];


  ban_type:number;
  public banTypes: Array<any> = [
    { id: "1", description: "Mikroavtobus" },
    { id: "2", description: "Yük maşını" },
    { id: "3", description: "Furqon" },
    { id: "4", description: "Hetçbek" },
    { id: "5", description: "Offroader / SUV" },
    { id: "6", description: "Universal" },
    { id: "7", description: "Kabriolet" },
    { id: "8", description: "Avtobus" },
    { id: "9", description: "Pikap" },
    { id: "10", description: "Sedan" }
  ];


  speed_box:number;
  public speedBoxes: Array<any> = [
    { id: "1", description: "Avtomat" },
    { id: "2", description: "Mexaniki" },
    { id: "3", description: "Robotlaşdırılmış" },
    { id: "4", description: "Variator" }
  ];



  year:number;
  public years: Array<any> = [
    {  description: "2023" },
    {  description: "2022" },
    {  description: "2021" },
    {  description: "2020" },
    {  description: "2019" },
    {  description: "2018" },
    {  description: "2017" },
    {  description: "2016" },
    {  description: "2015" },
    {  description: "2014" },
    {  description: "2013" },
    {  description: "2012" },
    {  description: "2011" },
    {  description: "2010" },
    {  description: "2009" },
    {  description: "2008" },
    {  description: "2007" },
    {  description: "2006" },
    {  description: "2005" },
    {  description: "2004" },
    {  description: "2003" },
    {  description: "2002" },
    {  description: "2001" },
    {  description: "2000" }
  ];

  color_id:number;
  public colors: Array<any> = [
    { id: "1", description: "Yaşıl" },
    { id: "2", description: "Qara" },
    { id: "3", description: "Bənövşəyi" },
    { id: "4", description: "Qızılı" },
    { id: "5", description: "Mavi" },
    { id: "6", description: "Narıncı" },
    { id: "7", description: "Qəhvəyi" },
    { id: "8", description: "Sarı" },
    { id: "9", description: "Qırmızı" },
    { id: "10", description: "Gümüşü" },
    { id: "10", description: "Çəhrayı" },
    { id: "10", description: "Ağ" },
    { id: "10", description: "Yaş Asfalt" },
    { id: "10", description: "Göy" },
    { id: "10", description: "Boz" },
    { id: "10", description: "Bej" },
  ];

  currency_id:number;
  distance_id:number;
  seat_count:number;
  price:number;

  leather_salon:boolean=false;
  park_radar:boolean=false;
  lyuk:boolean=false;
  condisioner:boolean=false;
  rear_camera:boolean=false;
  seat_heating:boolean=false;
  PhotoFileName = "";
  PhotoFilePath = "";

  fileToUpload:Array<File> | null = null;
  constructor(private productService:ProductService,private router: Router,private fb: FormBuilder){
    this.productService.getBrandNames().subscribe((results)=>{
      this.brandNames=results;
      console.log(this.brandNames);
      
    })

  }
  myFiles:File [] = [];
  readonly apiUrl = 'https://localhost:7171/api/';
  readonly photoUrl = "https://localhost:7171/Resources/Images/";



  handleFileInput(files: any) {
    for (var i = 0; i < files.target.files.length; i++) { 
      this.myFiles.push(files.target.files[i]);
  }


    console.log(files);
    this.fileToUpload = files.target.files;

    var file = files.target.files;
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);


    for (var i = 0; i < this.myFiles.length; i++) { 
      formData.append("file[]", this.myFiles[i]);
    }


    console.log('formData: '+formData);
    this.productService.upload(formData).subscribe((data: any) => {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.photoUrl + this.PhotoFileName;
    })

}
uploadPhoto(event: any) {
    
  }

  onChange($event: any) {

    this.productService.getModelNames($event).subscribe((res)=>{
    this.modelNames=res;
   console.log(this.modelNames);

  })
  }


  create(value:any){
    console.log(this.myFiles);
    this.productService.create(value,this.myFiles);
    this.router.navigate([``]);

  }
}
