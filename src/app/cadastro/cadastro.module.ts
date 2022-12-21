import { RouterModule } from '@angular/router';
import { CadastroService } from './services/cadastro.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCadastroComponent } from './listar-cadastro/listar-cadastro.component';
import { FormsModule } from '@angular/forms';
import { InserirCadastroComponent } from './inserir-cadastro/inserir-cadastro.component';



@NgModule({
  declarations: [
    ListarCadastroComponent,
    InserirCadastroComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],

  providers: [
    CadastroService
  ],
})
export class CadastroModule { }
