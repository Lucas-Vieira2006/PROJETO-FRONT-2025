import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Locacao } from '../models/locacao';

@Injectable({
  providedIn: 'root'
})
export class LocacaoService {
  private baseUrl = 'http://localhost:8080/locacoes';

  constructor(private http: HttpClient) {}

  // Lista todas as locações
  list(): Observable<Locacao[]> {
    return this.http.get<Locacao[]>(this.baseUrl);
  }

  // Busca locação por ID
  findById(id: number): Observable<Locacao> {
    return this.http.get<Locacao>(`${this.baseUrl}/${id}`);
  }

  // Cria nova locação
  create(locacao: Locacao): Observable<Locacao> {
    return this.http.post<Locacao>(this.baseUrl, locacao);
  }

  // Atualiza locação
  update(id: number, locacao: Locacao): Observable<Locacao> {
    return this.http.put<Locacao>(`${this.baseUrl}/${id}`, locacao);
  }

  // Deleta locação
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}