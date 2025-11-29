import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocacaoService } from '../../../core/locacao.service';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-minhas-locacoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './minhas-locacoes.component.html',
  styleUrls: ['./minhas-locacoes.component.scss']
})
export class MinhasLocacoesComponent implements OnInit {

  locacoes: any[] = [];
  loading = true;
  clienteNome = '';

  constructor(
    private locacaoService: LocacaoService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.clienteNome = this.auth.getUsername();
    this.buscarMinhasLocacoes();
  }

  buscarMinhasLocacoes() {
    this.loading = true;

    this.locacaoService.list().subscribe((dados: any[]) => {
      this.locacoes = dados.filter(l => l.nomeLocatario === this.clienteNome);
      this.loading = false;
    });
  }
}
