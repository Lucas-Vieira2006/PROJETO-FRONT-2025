import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {

    const token = this.auth.getToken();

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    // 🔥 verificar se o token é válido (não expirou / estrutura ok)
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));

      // exp é em segundos → converter para milissegundos
      const exp = payload.exp * 1000;  

      if (Date.now() > exp) {
        // token expirou → limpar sessão e exigir login
        this.auth.logout();
        return false;
      }

      return true;

    } catch (e) {
      // token corrompido → NAO deixa passar
      this.auth.logout();
      return false;
    }
  }
}
