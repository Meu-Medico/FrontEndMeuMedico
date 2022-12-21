import { ConfirmacaoComponent } from './confirmacao/confirmacao/confirmacao.component';
import { InserirAgendamentoComponent } from './agendamento/inserir-agendamento/inserir-agendamento.component';
import { ListarAgendamentoComponent } from './agendamento/listar-agendamento/listar-agendamento.component';
import { InserirCadastroComponent } from './cadastro/inserir-cadastro/inserir-cadastro.component';
import { ListarCadastroComponent } from './cadastro/listar-cadastro/listar-cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cadastro/inserir-cadastro', pathMatch: 'full' },
  { path: 'cadastro/inserir-cadastro', component: InserirCadastroComponent },
  { path: 'cadastro/listar-cadastro', component: ListarCadastroComponent },
  { path: 'agendamento/listar-agendamento', component: ListarAgendamentoComponent },
  { path: 'agendamento/inserir-agendamento', component: InserirAgendamentoComponent },
  { path: 'confirmacao', component: ConfirmacaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
