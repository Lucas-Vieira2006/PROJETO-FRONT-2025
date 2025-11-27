import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  // Não adicionar token na rota de login
  if (req.url.includes(`${environment.apiUrl}/auth/login`)) {
    return next(req);
  }

  const token = localStorage.getItem('token');

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req);
};
