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

  constructor(
    private agendamentoService: AgendamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.agendamento = new Agendamento();
  }

  cadastrar(): void {
    if (this.formAgendamento.form.valid) {
      this.agendamentoService.cadastrar(this.agendamento);
      this.router.navigate(['/agendamento/listar-agendamento']);
    }
  }
}
