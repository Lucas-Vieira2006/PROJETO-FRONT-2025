import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated() {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:8080/auth'; // depois troca pela URL da AWS

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(username: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/login`, {
      username: username,
      password: password
    });
  }

  salvarToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  estaLogado(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
