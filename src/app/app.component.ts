import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  msg = '';
  title = 'angular-file-upload';
  defaultImage = 'assets/placeholder.png';
  selectedFile;
  files = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllFiles().subscribe((data: any) => {
      this.files = data;
    })
  }

  fileInputChange(event) {
    this.defaultImage = event.target.files[0];
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event: any) => {
      this.defaultImage = event.target.result;
    };
  }

  upload() {
    this.msg = '';
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    this.apiService.upload(formData).subscribe((data: any) => {
      this.msg = data.msg;
      this.ngOnInit();
    })
  }
}
