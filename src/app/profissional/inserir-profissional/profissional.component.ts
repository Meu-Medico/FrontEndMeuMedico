import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Component, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProjetoApiService {

  readonly  projetoAPIUrl = "https://localhost:7279/api";

  constructor(private http:HttpClient) { }

   //Tarefa
  getAgendamento():Observable<any[]>{
    return this.http.get<any>(this.projetoAPIUrl + '/inserir-agendamento');
  }
}

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css']
})
export class ProfissionalComponent {

}
