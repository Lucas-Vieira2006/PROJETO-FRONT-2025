import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarAdminComponent } from '../navbar-admin/navbar-admin.component';

@Component({
  selector: 'app-layout-admin',
  standalone: true,
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss'],
  imports: [
    RouterOutlet,
    CommonModule,
    NavbarAdminComponent
  ]
})
export class LayoutAdminComponent { }
