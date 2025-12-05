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
import { ClienteGuard } from './core/cliente.guard';  // NOVO!

export const routes: Routes = [

  // LOGIN
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  // ------------------------------------
  // 🔵 ROTAS DO ADMINISTRADOR
  // ------------------------------------

{
  path: 'admin',
  component: LayoutAdminComponent,
  canActivate: [AuthGuard, AdminGuard],
  children: [
    { path: 'home', component: VeiculoListComponent },          // OK
    { path: 'veiculos', component: VeiculoListComponent },      // mesma tela
    { path: 'clientes', component: ClienteListComponent },      // OK
    { path: 'locacoes', component: MinhasLocacoesComponent },   // admin vê todas (temporário)
    // relatórios depois podemos criar uma página simples
  ]
},




  {
    path: 'admin',
    component: LayoutAdminComponent,
    canActivate: [AuthGuard, AdminGuard],
    children: [
      { path: 'home', component: VeiculoListComponent },
      { path: 'clientes', component: ClienteListComponent }
    ]
  },

  // ------------------------------------
  // 🟢 ROTAS DO CLIENTE
  // ------------------------------------
  {
    path: 'cliente',
    component: LayoutClienteComponent,
    canActivate: [AuthGuard, ClienteGuard],  // agora protegido!
    children: [
      { path: 'veiculos', component: VeiculosDisponiveisComponent },
      { path: 'locacoes', component: MinhasLocacoesComponent }
    ]
  },

  // ------------------------------------
  // 404 → LOGIN
  // ------------------------------------
  { path: '**', redirectTo: 'login' }

  
];
