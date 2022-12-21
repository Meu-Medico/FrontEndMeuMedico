import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgendamentoService } from './services/agendamento.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarAgendamentoComponent } from './listar-agendamento/listar-agendamento.component';
import { InserirAgendamentoComponent } from './inserir-agendamento/inserir-agendamento.component';



@NgModule({
  declarations: [
    ListarAgendamentoComponent,
    InserirAgendamentoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],

  providers: [
    AgendamentoService
  ]

})
export class AgendamentoModule { }
