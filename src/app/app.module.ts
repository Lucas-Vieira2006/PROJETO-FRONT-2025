import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { TOKEN_INTERCEPTOR_PROVIDER } from './core/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
{ path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: MainLayoutComponent }
      { path: 'clientes', loadComponent: () => import('./pages/clientes/cliente-list/cliente-list.component').then(m => m.ClienteListComponent) },
      { path: 'clientes/novo', loadComponent: () => import('./pages/clientes/cliente-form/cliente-form.component').then(m => m.ClienteFormComponent) },
      { path: 'clientes/:id', loadComponent: () => import('./pages/clientes/cliente-form/cliente-form.component').then(m => m.ClienteFormComponent) },
]),
    HttpClientModule
  ],
  providers: [
    TOKEN_INTERCEPTOR_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
