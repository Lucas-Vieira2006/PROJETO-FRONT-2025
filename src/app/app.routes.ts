import { Routes } from '@angular/router';

// LOGIN
import { LoginComponent } from './components/login/login.component';

// LAYOUTS
import { LayoutAdminComponent } from './layout-admin/layout-admin.components';
import { LayoutClienteComponent } from './layout-cliente/layout-cliente.component';

// ADMIN PAGES
import { VeiculoListComponent } from './components/veiculos/veiculo-list/veiculo-list.component';
import { ClienteListComponent } from './components/clientes/cliente-list/cliente-list.component';

// CLIENTE PAGES
import { VeiculosDisponiveisComponent } from './components/veiculos/veiculos-disponiveis/veiculos-disponiveis.component';
import { MinhasLocacoesComponent } from './components/locacoes/minhas-locacoes/minhas-locacoes.component';

// GUARDS
import { AuthGuard } from './core/auth.guard';
import { AdminGuard } from './core/admin.guard';

export const routes: Routes = [

  // LOGIN
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  // ---------------------------
  // 🔵 ROTAS DO ADMINISTRADOR
  // ---------------------------
  {
    path: 'admin',
    component: LayoutAdminComponent,
    canActivate: [AuthGuard, AdminGuard],
    children: [
      { path: 'home', component: VeiculoListComponent },
      { path: 'clientes', component: ClienteListComponent },
      // futuramente: relatórios, gráficos, etc.
    ]
  },

  // ---------------------------
  // 🟢 ROTAS DO CLIENTE
  // ---------------------------
  {
    path: 'cliente',
    component: LayoutClienteComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'veiculos', component: VeiculosDisponiveisComponent },
      { path: 'locacoes', component: MinhasLocacoesComponent }
    ]
  },

  // ---------------------------
  // NOT FOUND → LOGIN
  // ---------------------------
  { path: '**', redirectTo: 'login' }
];
