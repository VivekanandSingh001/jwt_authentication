import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  constructor(private router:Router,private http:HttpClient,private formBuilder:FormBuilder){}
  signupForm!:FormGroup;
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }
  onSubmit(){
this.http.post<any>("http://localhost:3000/users",this.signupForm.value).subscribe(res=>{console.log(res)})
  }
}
