import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const AuthGuard: CanActivateFn = () => {

  const auth = inject(AuthService);
  const router = inject(Router);

  const isLogged = auth.estaLogado(); 

  if (!isLogged) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
