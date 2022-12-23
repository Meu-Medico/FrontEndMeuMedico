import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agendamento } from './../../shared/models/agendamento.model';
import { Injectable } from '@angular/core';

const LS_CHAVE: string = 'agendamentos';

@Injectable({
  providedIn: 'root'
})
export class ProjetoApiService {

  readonly  projetoAPIUrl = "https://localhost:7279/api";

  constructor(private http:HttpClient) { }

   //Tarefa
  getProfissional():Observable<any[]>{
    return this.http.get<any>(this.projetoAPIUrl + '/ListarTodos/Profissionais');
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  constructor() { }

  listarTodos(): Agendamento[] {
    const agendamentos = localStorage[LS_CHAVE];
    return agendamentos ? JSON.parse(agendamentos) : [];
  }
}
