import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthGuard } from './core/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    canActivate: [AuthGuard],
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'veiculos',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./components/veiculos/veiculo-list/veiculo-list.component')
                .then(m => m.VeiculoListComponent),
          },
          {
            path: 'novo',
            loadComponent: () =>
              import('./components/veiculos/veiculo-form/veiculo-form.component')
                .then(m => m.VeiculoFormComponent),
          },
          {
            path: 'editar/:id',
            loadComponent: () =>
              import('./components/veiculos/veiculo-form/veiculo-form.component')
                .then(m => m.VeiculoFormComponent),
          },
        ],
      },
      { path: '', pathMatch: 'full', redirectTo: 'home' },
    ],
  },

  { path: '**', redirectTo: '' },
];
