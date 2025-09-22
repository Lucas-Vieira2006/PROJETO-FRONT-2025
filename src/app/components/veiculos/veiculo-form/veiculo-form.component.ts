import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-veiculo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './veiculo-form.component.html',
  styleUrls: ['./veiculo-form.component.scss'],
})
export class VeiculoFormComponent {
  modelo = '';
  placa = '';
  ano?: number;

  salvar() {
    alert('(placeholder) Salvando veículo...\n' +
          `Modelo: ${this.modelo}\nPlaca: ${this.placa}\nAno: ${this.ano ?? ''}`);
  }
}
