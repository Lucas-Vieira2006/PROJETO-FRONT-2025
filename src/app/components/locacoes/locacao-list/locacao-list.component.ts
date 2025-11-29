import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LocacaoService } from '../../../core/locacao.service';
import { Locacao } from '../../../models/locacao';

@Component({
  standalone: true,
  selector: 'app-locacao-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './locacao-list.component.html',
  styleUrls: ['./locacao-list.component.scss']
})
export class LocacaoListComponent implements OnInit {
  private service = inject(LocacaoService);
  locacoes: Locacao[] = [];
  loading = false;

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.loading = true;
    this.service.list().subscribe({
      next: (locacoes) => {
        this.locacoes = locacoes;
        this.loading = false;
      },
      error: () => {
        alert('Erro ao carregar locações');
        this.loading = false;
      }
    });
  }

  remover(locacao: Locacao) {
    if (confirm(`Deseja excluir a locação #${locacao.id}?`)) {
      this.service.delete(locacao.id!).subscribe({
        next: () => {
          alert('Locação excluída com sucesso!');
          this.carregar();
        },
        error: () => alert('Erro ao excluir locação')
      });
    }
  }
}
