import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veiculo } from '../models/veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  private baseUrl = 'http://localhost:8080/veiculos';

  constructor(private http: HttpClient) {}

  // Lista todos os veículos
  list(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.baseUrl);
  }

  // Lista só os disponíveis
  listDisponiveis(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(`${this.baseUrl}?disponiveis=true`);
  }

  // Busca veículo por ID
  getById(id: number): Observable<Veiculo> {
    return this.http.get<Veiculo>(`${this.baseUrl}/${id}`);
  }

  // Cria veículo
  create(dto: Veiculo): Observable<Veiculo> {
    return this.http.post<Veiculo>(this.baseUrl, dto);
  }

  // Atualiza veículo
  update(id: number, dto: Veiculo): Observable<Veiculo> {
    return this.http.put<Veiculo>(`${this.baseUrl}/${id}`, dto);
  }

  // Deleta veículo
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
