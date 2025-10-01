import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth/login';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  login(username: string, password: string): Observable<any> {
     console.log('Tentando login com:', username, password);
  
  if (username === 'admin' && password === '123') {
    console.log('Login local bem-sucedido!');
    return new Observable(observer => {
      setTimeout(() => {
        const fakeResponse = { 
          token: 'fake-jwt-token-admin-123',
          user: { name: 'Administrador' }
        };
        observer.next(fakeResponse);
        observer.complete();
      }, 1000);
    });
  }
  
  return new Observable(observer => {
    setTimeout(() => {
      observer.error({ error: 'Credenciais inválidas' });
    }, 1000);
  });
    return this.http.post<any>(this.apiUrl, { username, password });
  }

  isAuthenticated(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('token');
    }
    return false; // no servidor sempre falso
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
  }
}
