import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet] // <<--- aqui!
})
export class AppComponent {
  constructor() {}

  logout() {
    localStorage.removeItem('token'); // limpa sessão
    // aqui você pode redirecionar manualmente se quiser
    window.location.href = '/login';
  }
}
