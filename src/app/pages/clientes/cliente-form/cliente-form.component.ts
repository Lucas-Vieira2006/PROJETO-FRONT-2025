import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../models/cliente';

@Component({
  selector: 'app-cliente-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent {
  cliente: Cliente = { nome: '' };
  isEdit = false;

  constructor(private svc: ClienteService, private route: ActivatedRoute, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.svc.buscar(Number(id)).subscribe(c => this.cliente = c);
    }
  }

  salvar() {
    if (this.isEdit && this.cliente.id) {
      this.svc.atualizar(this.cliente.id, this.cliente).subscribe(() => this.router.navigate(['/clientes']));
    } else {
      this.svc.criar(this.cliente).subscribe(() => this.router.navigate(['/clientes']));
    }
  }
}
