import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './core/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    canActivate: [AuthGuard],
    
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
      // 🔥 ADICIONE AS ROTAS DA LOCAÇÃO AQUI 🔥
      {
        path: 'locacoes',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./components/locacoes/locacao-list/locacao-list.component')
                .then(m => m.LocacaoListComponent),
          },
          {
            path: 'nova',
            loadComponent: () =>
              import('./components/locacoes/locacao-form/locacao-form.component')
                .then(m => m.LocacaoFormComponent),
          },
          {
            path: 'editar/:id',
            loadComponent: () =>
              import('./components/locacoes/locacao-form/locacao-form.component')
                .then(m => m.LocacaoFormComponent),
          },
        ],
      },
      { path: '', pathMatch: 'full', redirectTo: 'home' },
    ],
  },

  { path: '**', redirectTo: '' },
];