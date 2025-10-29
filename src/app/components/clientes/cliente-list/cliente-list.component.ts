import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Cliente } from '../../../models/cliente';
import { ClienteService } from '../../../core/cliente.service';

@Component({
  standalone: true,
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss'],
  imports: [CommonModule, RouterLink],
})
export class ClienteListComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private service: ClienteService, private router: Router) {}

  ngOnInit(): void {
    this.carregar();
  }

  carregar(): void {
    this.service.listar().subscribe({
      next: (dados) => (this.clientes = dados),
      error: () => alert('Erro ao carregar clientes'),
    });
  }

  remover(c: Cliente): void {
    if (confirm(`Excluir cliente ${c.nome}?`)) {
      this.service.remover(c.id!).subscribe({
        next: () => this.carregar(),
        error: () => alert('Erro ao excluir cliente'),
      });
    }
  }
}
