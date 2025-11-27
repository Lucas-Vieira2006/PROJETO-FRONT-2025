import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usuario: string = '';
  senha: string = '';
  carregando: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.carregando = true;

    this.authService.login(this.usuario, this.senha).subscribe({
      next: (res) => {
        this.authService.salvarToken(res.token);
        this.router.navigateByUrl('/home');
      },
      error: () => {
        alert('Usuario ou senha invalidos');
        this.carregando = false;
      }
    });
  }
}
