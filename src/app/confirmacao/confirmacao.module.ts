import { ConfirmacaoService } from './services';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmacaoComponent } from './confirmacao';



@NgModule({
  declarations: [
    ConfirmacaoComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    ConfirmacaoComponent
  ],

  providers: [
    ConfirmacaoService
  ]
})
export class ConfirmacaoModule { }
