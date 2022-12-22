import { Agendamento } from './../../shared/models/agendamento.model';
import { Injectable } from '@angular/core';

const LS_CHAVE: string = 'agendamentos';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService {

  constructor() { }

  listarTodos(): Agendamento[] {
    const agendamentos = localStorage[LS_CHAVE];
    return agendamentos ? JSON.parse(agendamentos) : [];
  }
}
