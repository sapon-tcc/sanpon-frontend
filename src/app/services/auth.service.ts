// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://ec2-52-70-194-31.compute-1.amazonaws.com/api/v1'; // Substitua pela URL real do seu backend

  constructor(private http: HttpClient) {}

  save(credentials: { nm_name: string; nm_password: string; nm_email: string; }): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, credentials);
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login/access-token`, credentials);
  }

  saveToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  isAuthenticated(): boolean {
    // Verifica se o token existe e não está expirado
    const token = this.getToken();
    return token ? true : false;
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }
}
