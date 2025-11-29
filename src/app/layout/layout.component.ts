import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../core/auth.service';
import { NavbarAdminComponent } from '../navbar-admin/navbar-admin.component';
import { NavbarClienteComponent } from '../navbar-cliente/navbar-cliente.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [
    RouterOutlet,
    CommonModule,
    NavbarAdminComponent,
    NavbarClienteComponent
  ]
})
export class LayoutComponent implements OnInit {

  role = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.role = this.auth.getRole();
  }
}
