import { Observable } from 'rxjs';
import { EspecialidadeService } from './../../especialidade/services/especialidade.service';
import { HospitalService } from './../../hospital/services/hospital.service';
import { Hospital } from './../../shared/models/hospital.model';
import { Especialidade } from './../../shared/models/especialidade.model';
import { ProfissionalService } from './../../profissional/services/profissional.service';
import { Profissional } from './../../shared/models/profissional.model';
import { AgendamentoService } from './../services/agendamento.service';
import { Router } from '@angular/router';
import { Agendamento } from './../../shared/models/agendamento.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
// import { environment } from 'src/environment/environment';
 import { HttpHeaders, HttpClient } from '@angular/common/http';


// var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

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
  selector: 'app-inserir-agendamento',
  templateUrl: './inserir-agendamento.component.html',
  styleUrls: ['./inserir-agendamento.component.css']
})

//implements OnInit
export class InserirAgendamentoComponent {

  url = 'https://localhost:7248/';

@ViewChild('formAgendamento') formAgendamento!: NgForm;
agendamento!: Agendamento;
profissional: Profissional[] = [];
especialidade: Especialidade[] = [];
hospital: Hospital[] = [];
// baseApiUrl = Environment.baseApiUrl
// import {Response} from '../Response';

  constructor(
    private agendamentoService: AgendamentoService,
    private profissionalService: ProfissionalService,
    private especialidadeService: EspecialidadeService,
    private hospitalService: HospitalService,
    private router: Router,
    //private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.agendamento = new Agendamento();
    this.profissional = this.profissionalService.listarTodos();
    this.especialidade = this.especialidadeService.listarTodos();
    this.hospital = this.hospitalService.listarTodos();

  }

  agendar(): void {
    if (this.formAgendamento.form.valid) {
      this.agendamentoService.cadastrar(this.agendamento);
      this.router.navigate(['/confirmacao']);
    }
  }

  // rota do botão profissional

 // profissional(): void {
 //   if (this.formAgendamento.form.valid) {
 //     this.agendamentoService.cadastrar(this.agendamento);
 //     this.router.navigate(['/profissional']);
 //   }
 // }

  listar(): void {
    if (this.formAgendamento.form.valid) {
      this.agendamentoService.cadastrar(this.agendamento);
      this.router.navigate(['agendamento/listar-agendamento']);
    }
  }

  cadastrar(): void {
    if (this.formAgendamento.form.valid) {
      this.agendamentoService.cadastrar(this.agendamento);
      this.router.navigate(['/cadastro/inserir-cadastro']);
    }
  }



}
