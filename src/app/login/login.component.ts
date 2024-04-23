
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  username:string="";
  password:string="";

  constructor(private fb: FormBuilder,private loginService: LoginService,private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    
    if (this.loginForm.valid) {
      // console.log('Username:', this.loginForm.value.username);
      // console.log('Password:', this.loginForm.value.password);
      
      this.username=this.loginForm.value.username;
      this.password=this.loginForm.value.password;

      this.loginService.login(this.username, this.password)
        .subscribe(
          token => {
            // Login başarılıysa yapılacak işlemler
            console.log('Login başarılı:', token);
            this.loginService.setToken(token);
            this.router.navigate(['/weather']);
          },
          error => {
            // Login başarısızsa yapılacak işlemler
            console.error('Login başarısız:', error);
          }
        );
    } 
        else {
      console.error('Form invalid');
    }
  }
}
