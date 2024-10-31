import { Component } from '@angular/core';
import { LoginPageComponent } from '../login-page/login-page.component';
import { SignupPageComponent } from '../signup-page/signup-page.component';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [LoginPageComponent, SignupPageComponent],
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'], // Corrected "styleUrl" to "styleUrls"
})
export class MasterComponent {}
