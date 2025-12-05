import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
  username = '';
  password = '';
  loading = false;
  error = false;

  constructor(private auth: AuthService, private router: Router) {}

  fazerLogin() {
    this.loading = true;
    this.error = false;

    this.auth.login({ username: this.username, password: this.password }).subscribe({
      next: (resp: any) => {

        // salva token + role + username
        this.auth.saveSession(resp);

        const role = resp.role;

        if (role === 'ROLE_ADMIN') {
          this.router.navigate(['/admin/home']);
        } else {
          this.router.navigate(['/cliente/veiculos']);
        }

      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
}
