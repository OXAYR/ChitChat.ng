import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/user/login'; // Your backend API endpoint

  constructor(private http: HttpClient) {}

  validateUserData(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Set content type
      Authorization: 'Bearer YOUR_TOKEN_HERE', // Include token if needed
    });

    console.log('here is the data ======>', data);
    return this.http.post<any>(this.apiUrl, data, { headers });
  }
}
