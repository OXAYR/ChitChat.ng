import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css',
})
export class SignupPageComponent {
  email: string = '';
  password: string = '';
  userName: string = '';

  login() {
    console.log('email:', this.email);
    console.log('Password:', this.password);
    console.log('Password:', this.userName);
    // Add further login logic here
  }
}
