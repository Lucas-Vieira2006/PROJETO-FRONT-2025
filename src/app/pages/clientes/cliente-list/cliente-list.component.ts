import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../models/cliente';

@Component({
  selector: 'app-cliente-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent {
  clientes: Cliente[] = [];
  filtro = '';

  constructor(private svc: ClienteService) { this.load(); }

  load() {
    this.svc.listar(this.filtro || undefined).subscribe(c => this.clientes = c);
  }

  pesquisar() { this.load(); }

  excluir(c: Cliente) {
    if (!confirm(`Confirma exclusão de "${c.nome}"?`)) return;
    if (!c.id) return;
    this.svc.deletar(c.id).subscribe(() => this.load());
  }
}
