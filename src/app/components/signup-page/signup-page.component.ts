import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { singUpService } from '../../services/signup.service';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css',
})
export class SignupPageComponent {
  userData = {
    email: '',
    password: '',
    name: '',
  };

  constructor(private singUpService: singUpService) {}

  signUp() {
    this.singUpService.createUserData(this.userData).subscribe(
      (response) => {
        console.log('Sign-up successful', response);
      },
      (error) => {
        console.error('Error signing up', error);
      }
    );
  }
}
