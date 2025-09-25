import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VeiculoService } from '../../../core/veiculo.service';
import { Veiculo } from '../../../models/veiculo';

@Component({
  standalone: true,
  selector: 'app-veiculo-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './veiculo-form.component.html',
  styleUrls: ['./veiculo-form.component.scss']
})
export class VeiculoFormComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private service = inject(VeiculoService);

  id?: number;
  modelo = '';
  placa = '';
  ano?: number;
  categoria = '';
  valorHora: number = 0;


  ngOnInit() {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      this.id = +paramId;
      this.service.getById(this.id).subscribe({
        next: (v) => {
          this.modelo = v.modelo;
          this.placa = v.placa;
          this.ano = v.ano;
        },
        error: () => alert('Erro ao carregar veículo')
      });
    }
  }

  salvar() {
    const dto: Veiculo = { id: this.id, modelo: this.modelo, placa: this.placa, ano: this.ano, categoria: this.categoria, valorHora: this.valorHora};

    const req = this.id
      ? this.service.update(this.id, dto)
      : this.service.create(dto);

    req.subscribe({
      next: () => {
        alert('Salvo com sucesso!');
        this.router.navigateByUrl('/veiculos');
      },
      error: () => alert('Erro ao salvar')
    });
  }

  cancelar() {
    this.router.navigateByUrl('/veiculos');
  }
}
