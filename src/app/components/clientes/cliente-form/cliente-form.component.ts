import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../../core/cliente.service';
import { Cliente } from '../../../models/cliente';

@Component({
  selector: 'app-cliente-form',
  standalone: true,
  // REMOVIDO RouterLink dos imports
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {
  titulo = 'Novo Cliente';
  idEdicao?: number;
  modelo: Cliente = { nome: '', cpf: '', telefone: '' };
  salvando = false;

  // pode continuar private porque o template não vai mais usar router direto
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ClienteService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.idEdicao = +id;
      this.titulo = 'Editar Cliente';
      this.service.buscarPorId(this.idEdicao).subscribe({
        next: (c) => (this.modelo = { ...c }),
        error: () => alert('Cliente não encontrado.')
      });
    }
  }

  salvar(): void {
    this.salvando = true;
    const obs = this.idEdicao
      ? this.service.atualizar(this.idEdicao, this.modelo)
      : this.service.criar(this.modelo);

    obs.subscribe({
      next: () => this.router.navigateByUrl('/clientes'),
      error: () => {
        this.salvando = false;
        alert('Não foi possível salvar. Verifique os dados.');
      }
    });
  }

  cancelar(): void {
    this.router.navigateByUrl('/clientes');
  }

  // ✅ Adicionado para corrigir (click)="resetar(f)"
  resetar(form: NgForm): void {
    form.resetForm({
      nome: '',
      cpf: '',
      telefone: ''
    });
  }
}
