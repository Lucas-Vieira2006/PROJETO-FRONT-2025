import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {

    const role = this.auth.getRole();

    if (role === 'ADMIN') {
      return true;
    }

    // se o usuário não for admin → manda pro login
    this.router.navigate(['/login']);
    return false;
  }
}
