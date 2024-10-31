import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  loginData = {
    email: '',
    password: '',
  };

  constructor(private loginService: LoginService) {}

  login() {
    this.loginService.validateUserData(this.loginData).subscribe(
      (response) => {
        console.log('Login successful', response);
      },
      (error) => {
        console.error('Error signing up', error);
      }
    );
  }
}
