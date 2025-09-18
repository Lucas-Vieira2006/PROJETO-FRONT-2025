import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { VeiculoListComponent } from './components/veiculos/veiculo-list/veiculo-list.component';
import { VeiculoFormComponent } from './components/veiculos/veiculo-form/veiculo-form.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'veiculos', component: VeiculoListComponent },
  { path: 'veiculos/novo', component: VeiculoFormComponent },
  { path: 'veiculos/editar/:id', component: VeiculoFormComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
