import { ConfirmacaoModule } from './confirmacao';
import { AgendamentoModule } from './agendamento/agendamento.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfissionalComponent } from './profissional/profissional.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { HospitalComponent } from './hospital/hospital.component';
import { EspecialidadeComponent } from './especialidade/especialidade.component';


@NgModule({
  declarations: [
    AppComponent,
    HospitalComponent,
    EspecialidadeComponent,
    ProfissionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CadastroModule,
    AgendamentoModule,
    ConfirmacaoModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
