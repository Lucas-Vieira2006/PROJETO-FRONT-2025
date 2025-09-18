import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 getToken(): string | null {
  return localStorage.getItem('token');
}

logout(): void {
  localStorage.removeItem('token');
}

  constructor() { }
}


