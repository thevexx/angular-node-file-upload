import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  upload(file) {
    return this.http.post('http://localhost:3000/upload', file);
  }

  getAllFiles() {
    return this.http.get('http://localhost:3000/allFiles')
  }
  getfile(file) {
    return this.http.get('http://localhost:3000/file/' + file)
  }
}
