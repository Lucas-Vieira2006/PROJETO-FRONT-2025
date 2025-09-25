import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { VeiculoService } from '../../../core/veiculo.service';
import { Veiculo } from '../../../models/veiculo';

@Component({
  standalone: true,
  selector: 'app-veiculo-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.scss']
})
export class VeiculoListComponent implements OnInit {
  private service = inject(VeiculoService);
  veiculos: Veiculo[] = [];
  loading = false;

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.loading = true;
    this.service.list().subscribe({
      next: (data) => { this.veiculos = data; this.loading = false; },
      error: () => { alert('Erro ao carregar veículos'); this.loading = false; }
    });
  }

  carregarDisponiveis() {
    this.loading = true;
    this.service.listDisponiveis().subscribe({
      next: (data) => { this.veiculos = data; this.loading = false; },
      error: () => { alert('Erro ao carregar veículos disponíveis'); this.loading = false; }
    });
  }

  remover(v: Veiculo) {
    if (!v.id) return;
    if (!confirm(`Excluir veículo ${v.modelo} (${v.placa})?`)) return;
    this.service.delete(v.id).subscribe({
      next: () => { alert('Veículo excluído'); this.carregar(); },
      error: () => alert('Erro ao excluir veículo')
    });
  }
}
