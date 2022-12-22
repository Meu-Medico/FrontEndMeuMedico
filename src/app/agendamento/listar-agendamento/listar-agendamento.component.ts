import { Agendamento } from './../../shared/models/agendamento.model';
import { AgendamentoService } from './../services/agendamento.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-agendamento',
  templateUrl: './listar-agendamento.component.html',
  styleUrls: ['./listar-agendamento.component.css'],
})

export class ListarAgendamentoComponent {

  agendamentos: Agendamento[] = [];

  constructor(private AgendamentoService: AgendamentoService) { }


  ngOnInit(): void {
    this.agendamentos = this.AgendamentoService.listarTodos();
  }

  listarTodos(): Agendamento[] {
    //return this.AgendamentoService.listarTodos();

    return [
      new Agendamento(1, 'Margarida', 'Hospital Menino Jesus', 'Dermatologia', 'Dr Carlos Gomes', '12/12/2020', '12:00'),
      new Agendamento(1, 'Claudio', 'Clinica Médica', 'Cardiologia', 'Dra Aline', '18/10/2020', '10:00',),
      new Agendamento(1, 'Margarida', 'Hospital Menino Jesus', 'Dermatologia', 'Dr Carlos Gomes', '12/12/2020', '12:00'),
      new Agendamento(1, 'Claudio', 'Clinica Médica', 'Cardiologia', 'Dra Aline', '18/10/2020', '10:00',),
    ]
  }
}
