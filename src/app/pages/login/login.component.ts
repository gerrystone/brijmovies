import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ToastService} from "angular-toastify";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  errorMsg = ""
  constructor(private http: HttpClient, private router:Router, private toastService:ToastService) { }

  ngOnInit(): void {
    //check if user is logged in and redirect to dashboard
    if(localStorage.getItem('email')) {
      this.router.navigate(['/dashboard']);
    }
    this.loginForm = new FormGroup<any>({
      email:new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    })
  }
  onSubmit(){
    // Check if the loginForm FormGroup is valid
    if (this.loginForm.valid) {
      // Clear the error message if any
      this.errorMsg = '';
      // Extract the email and password fields from the loginForm's values
      const { email, password } = this.loginForm.value;
      // Check if the email and password match the expected values
      if (email === 'yourname@gmail.com' && password === 'Password.0707') {
        // If the credentials match, save the email to localStorage
        localStorage.setItem('email', email);
        // And navigate to the dashboard route
        this.router.navigate(['/dashboard']);
      } else {
        // If the credentials do not match, set an error message
        this.toastService.error('Invalid email or password!')
      }
    } else {
      // If the loginForm is not valid, set an error message
      this.toastService.error('Form data is not accurate')
    }
  }
}
