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
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inserir-agendamento',
  templateUrl: './inserir-agendamento.component.html',
  styleUrls: ['./inserir-agendamento.component.css']
})
export class InserirAgendamentoComponent {
@ViewChild('formAgendamento') formAgendamento!: NgForm;
agendamento!: Agendamento;
profissional: Profissional[] = [];
especialidade: Especialidade[] = [];
hospital: Hospital[] = [];

  constructor(
    private agendamentoService: AgendamentoService,
    private profissionalService: ProfissionalService,
    private especialidadeService: EspecialidadeService,
    private hospitalService: HospitalService,
    private router: Router
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
