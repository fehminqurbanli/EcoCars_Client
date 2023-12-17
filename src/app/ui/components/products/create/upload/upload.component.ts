import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  progress: number;
  message: string;
  @Output() public onUploadFinished = new EventEmitter();
  
  constructor(private http: HttpClientService) { }
  ngOnInit() {
  }

  PhotoFileName = "";
  PhotoFilePath = "";
  photoUrl = "https://localhost:7171/Resources/Images/";


  // uploadFile = (files) => {
  //   if (files.length === 0) {
  //     return;
  //   }
  //   let fileToUpload = <File>files[0];
  //   const formData = new FormData();
  //   formData.append('file', fileToUpload, fileToUpload.name);
    
  //   this.http.post('https://localhost:7171/api/upload', formData, {reportProgress: true, observe: 'events'})
  //     .subscribe({
  //       next: (event) => {
  //       if (event.type === HttpEventType.UploadProgress)
  //         this.progress = Math.round(100 * event.loaded / event.total);
  //       else if (event.type === HttpEventType.Response) {
  //         this.message = 'Upload success.';
  //         this.onUploadFinished.emit(event.body);
  //       }
  //     },
  //     error: (err: HttpErrorResponse) => console.log(err)
  //   });
    
  // }


  uploadPhoto(event: any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    this.http.uploadPhoto(formData).subscribe((data: any) => {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.photoUrl + this.PhotoFileName;
    })
  }
}