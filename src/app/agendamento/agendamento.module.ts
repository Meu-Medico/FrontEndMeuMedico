import { ProfissionalComponent } from './../profissional/profissional.component';
import { Profissional } from './../shared/models/profissional.model';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgendamentoService } from './services/agendamento.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarAgendamentoComponent } from './listar-agendamento/listar-agendamento.component';
import { InserirAgendamentoComponent } from './inserir-agendamento/inserir-agendamento.component';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    ListarAgendamentoComponent,
    InserirAgendamentoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgSelectModule
  ],

  providers: [
    AgendamentoService
  ]

})
export class AgendamentoModule { }
