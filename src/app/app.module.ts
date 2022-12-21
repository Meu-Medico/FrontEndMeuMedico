import { ConfirmacaoModule } from './confirmacao';
import { AgendamentoModule } from './agendamento/agendamento.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CadastroModule,
    AgendamentoModule,
    ConfirmacaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
