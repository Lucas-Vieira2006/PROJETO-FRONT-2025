import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthGuard } from './core/auth.guard';

// EAGER imports dos placeholders (garante navegação já)
import { HomeComponent } from './pages/home/home.component';
import { VeiculoListComponent } from './components/veiculos/veiculo-list/veiculo-list.component';
import { ClienteListComponent } from './pages/clientes/cliente-list/cliente-list.component';
import { LocacaoListComponent } from './pages/locacoes/locacao-list/locacao-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {
    path: '',
    canActivate: [AuthGuard],
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'veiculos', component: VeiculoListComponent },
      { path: 'clientes', component: ClienteListComponent },
      { path: 'locacoes', component: LocacaoListComponent },
      { path: '', pathMatch: 'full', redirectTo: 'home' },
    ],
  },

  { path: '**', redirectTo: '' },
];
