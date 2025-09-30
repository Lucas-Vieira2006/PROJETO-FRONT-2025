import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <<< IMPORTA ISSO

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // <<< ADICIONA AQUI
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usuario: string = '';
  senha: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.usuario === 'admin' && this.senha === '123') {
      localStorage.setItem('token', 'fake-token');
      this.router.navigateByUrl('/home');
    } else {
      alert('Usuário ou senha inválidos');
    }
  }
}
