import { Component } from '@angular/core';
import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [LoginPageComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css',
})
export class MasterComponent {}
