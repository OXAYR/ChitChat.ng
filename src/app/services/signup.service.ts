import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class singUpService {
  private apiUrl = 'http://localhost:3000/user';

  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  createUserData(data: any): Observable<any> {
    console.log('here is the data ======>', data);
    return this.http.post<any>(this.apiUrl, data, { headers: this.headers });
  }
}
