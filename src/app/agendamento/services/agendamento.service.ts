import { Injectable } from '@angular/core';
import { Agendamento } from '../../shared/models/agendamento.model';

const LS_CHAVE: string = 'agendamentos';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  constructor() { }

  listarTodos(): Agendamento[] {
    const agendamentos = localStorage[LS_CHAVE];
    return agendamentos ? JSON.parse(agendamentos) : [];
  }

  cadastrar(agendamento: Agendamento): void {
    const agendamentos = this.listarTodos();
    agendamentos.push(agendamento);
    localStorage[LS_CHAVE] = JSON.stringify(agendamentos);
  }

  buscarPorId(id: number): Agendamento | undefined {
    const agendamentos: Agendamento[] = this.listarTodos();
    return agendamentos.find(a => a.id === id);
  }

  atualizar(agendamento: Agendamento): void {
    const agendamentos: Agendamento[] = this.listarTodos();
    agendamentos.forEach((obj, index, objs) => {
      if (agendamento.id === obj.id) {
        objs[index] = agendamento;
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(agendamentos);
  }

  remover(id: number): void {
    let agendamentos: Agendamento[] = this.listarTodos();
    agendamentos = agendamentos.filter(a => a.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(agendamentos);
  }

}
