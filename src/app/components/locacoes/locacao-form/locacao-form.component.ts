import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocacaoService } from '../../../core/locacao.service';
import { Locacao } from '../../../models/locacao';

@Component({
  standalone: true,
  selector: 'app-locacao-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './locacao-form.component.html',
  styleUrls: ['./locacao-form.component.scss']  // ← VOLTE PARA PLURAL!
})

export class LocacaoFormComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private service = inject(LocacaoService);

  id?: number;
  veiculoId: number = 0;
  clienteId: number = 0;
  dataInicio = '';
  dataFim = '';
  valorTotal: number = 0;
  status = 'ATIVA';

  ngOnInit() {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      this.id = +paramId;
      this.service.findById(this.id).subscribe({
        next: (l) => {
          this.veiculoId = l.veiculoId;
          this.clienteId = l.clienteId;
          this.dataInicio = l.dataInicio;
          this.dataFim = l.dataFim;
          this.valorTotal = l.valorTotal || 0;
          this.status = l.status || 'ATIVA';
        },
        error: () => alert('Erro ao carregar locação')
      });
    }
  }

  salvar() {
    const dto: Locacao = { 
      id: this.id, 
      veiculoId: this.veiculoId, 
      clienteId: this.clienteId, 
      dataInicio: this.dataInicio, 
      dataFim: this.dataFim, 
      valorTotal: this.valorTotal,
      status: this.status
    };

    const req = this.id
      ? this.service.update(this.id, dto)
      : this.service.create(dto);

    req.subscribe({
      next: () => {
        alert('Locação salva com sucesso!');
        this.router.navigateByUrl('/locacoes');
      },
      error: () => alert('Erro ao salvar locação')
    });
  }

  cancelar() {
    this.router.navigateByUrl('/locacoes');
  }
}