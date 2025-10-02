export interface Locacao {
  id?: number;
  veiculoId: number;
  clienteId: number;
  dataInicio: string;
  dataFim: string;
  valorTotal?: number;
  status?: string;
}