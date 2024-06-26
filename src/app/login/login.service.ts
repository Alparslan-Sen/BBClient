import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private apiUrl = 'http://localhost:4200//api/Account/Login'; // API URL'nizi buraya girin
  private apiUrl = "https://localhost:7287/api/Account/login"

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username, password });
  }

  setToken(token: string) {

    localStorage.setItem('token', JSON.stringify(token));
  }

  // getToken() {
  //   return localStorage.getItem('token');
  // }

  getToken() {
    const token = localStorage.getItem('token');
    return token ? JSON.parse(token) : null;
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
  }

}
