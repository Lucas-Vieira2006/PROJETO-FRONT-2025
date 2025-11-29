import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculoService } from '../../../core/veiculo.service';

@Component({
  selector: 'app-veiculos-disponiveis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './veiculos-disponiveis.component.html',
  styleUrls: ['./veiculos-disponiveis.component.scss']
})
export class VeiculosDisponiveisComponent implements OnInit {

  veiculos: any[] = [];
  loading = true;

  constructor(private veiculoService: VeiculoService) {}

  ngOnInit(): void {
    this.buscarDisponiveis();
  }

  buscarDisponiveis() {
    this.loading = true;
   this.veiculoService.list().subscribe((dados) => {
      this.veiculos = dados.filter(v => v.disponivel === true);
      this.loading = false;
    });
  }
}
