import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({ providedIn: 'root' })
export class AlertService {
  success(msg: string) { Swal.fire('Sucesso', msg, 'success'); }
  error(msg: string) { Swal.fire('Erro', msg, 'error'); }
}
