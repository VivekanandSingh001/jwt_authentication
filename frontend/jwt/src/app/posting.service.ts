import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostingService {

  constructor(private http:HttpClient) {
   }
  // postData(){
  //   return this.http.post<any>("",)
  // } 
  }
