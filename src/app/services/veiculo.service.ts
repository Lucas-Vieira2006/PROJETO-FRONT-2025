import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../core/api.service';
import { Veiculo } from '../models/veiculo';

@Injectable({ providedIn: 'root' })
export class VeiculoService {
  constructor(private api: ApiService) {}

  getAll(): Observable<Veiculo[]> {
    return this.api.get<Veiculo[]>('veiculos');
  }

  getById(id: number): Observable<Veiculo> {
    return this.api.get<Veiculo>(`veiculos/${id}`);
  }

  create(data: Veiculo): Observable<Veiculo> {
    return this.api.post<Veiculo>('veiculos', data);
  }

  update(id: number, data: Veiculo): Observable<Veiculo> {
    return this.api.put<Veiculo>(`veiculos/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.api.delete<void>(`veiculos/${id}`);
  }
}
