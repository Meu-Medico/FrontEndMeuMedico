import { Cadastro } from './../../shared/models/cadastro.model';
import { CadastroService } from './../services/cadastro.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-listar-cadastro',
  templateUrl: './listar-cadastro.component.html',
  styleUrls: ['./listar-cadastro.component.css']
})

export class ListarCadastroComponent {

  cadastro: Cadastro[] = [];

  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {
    this.cadastro = this.listarTodos()
  }

  listarTodos(): Cadastro[] {
    return this.cadastroService.listarTodos();


  }

}
