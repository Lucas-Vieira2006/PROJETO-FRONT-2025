import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarClienteComponent } from '../navbar-cliente/navbar-cliente.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout-cliente',
  standalone: true,
  templateUrl: './layout-cliente.component.html',
  styleUrls: ['./layout-cliente.component.scss'],
  imports: [
    RouterOutlet,
    CommonModule,
    NavbarClienteComponent
  ]
})
export class LayoutClienteComponent {}
