import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  private base = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) {}

  listar(nome?: string): Observable<Cliente[]> {
    const url = nome ? `${this.base}?nome=${encodeURIComponent(nome)}` : this.base;
    return this.http.get<Cliente[]>(url);
  }

  buscar(id: number) { return this.http.get<Cliente>(`${this.base}/${id}`); }
  criar(c: Cliente) { return this.http.post<Cliente>(this.base, c); }
  atualizar(id: number, c: Cliente) { return this.http.put<Cliente>(`${this.base}/${id}`, c); }
  deletar(id: number) { return this.http.delete(`${this.base}/${id}`); }
}
