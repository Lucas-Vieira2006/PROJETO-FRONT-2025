import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AlertService } from './alert.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private alert: AlertService) {}
  canActivate(): boolean {
    if (this.auth.isAuthenticated()) return true;
    this.alert.error('Faça login para continuar');
    this.router.navigate(['/login']);
    return false;
  }
}
