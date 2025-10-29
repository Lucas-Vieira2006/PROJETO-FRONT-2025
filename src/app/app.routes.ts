import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { VeiculoListComponent } from './components/veiculos/veiculo-list/veiculo-list.component';
import { VeiculoFormComponent } from './components/veiculos/veiculo-form/veiculo-form.component';
import { ClienteListComponent } from './components/clientes/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './components/clientes/cliente-form/cliente-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },

  // Veículos
  { path: 'veiculos', component: VeiculoListComponent },
  { path: 'veiculos/novo', component: VeiculoFormComponent },
  { path: 'veiculos/editar/:id', component: VeiculoFormComponent },

  // Clientes (CRUD)
  { path: 'clientes', component: ClienteListComponent },
  { path: 'clientes/novo', component: ClienteFormComponent },
  { path: 'clientes/editar/:id', component: ClienteFormComponent },

  { path: '**', redirectTo: 'home' }
];
