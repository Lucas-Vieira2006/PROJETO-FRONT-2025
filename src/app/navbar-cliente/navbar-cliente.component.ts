import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-cliente',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar-cliente.component.html'
})
export class NavbarClienteComponent {
  constructor(private auth: AuthService) {}

  logout() {
    this.auth.logout();
  }
}
