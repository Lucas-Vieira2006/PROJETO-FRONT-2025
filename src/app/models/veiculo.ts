export interface Veiculo {
  id?: number;
  modelo: string;
  placa: string;
  ano?: number;
  disponivel?: boolean; 
  categoria: string;
  valorHora: number;
}
