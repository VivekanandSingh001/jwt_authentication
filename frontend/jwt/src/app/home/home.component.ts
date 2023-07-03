import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private http:HttpClient) {
    this.http.get("http://localhost:5000/users").subscribe(res=>{
      console.log("login form ",res);
    })
  }
}
