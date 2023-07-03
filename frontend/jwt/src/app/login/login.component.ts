import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  title = 'jwt';
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
   
this.http.post<any>("http://localhost:5000/users/authenticate",this.loginForm.value).subscribe(res=>{
  console.log("login form ",res);
  localStorage.setItem('token', res.token);
  this.router.navigate(['/profile'])
})
  }
}
