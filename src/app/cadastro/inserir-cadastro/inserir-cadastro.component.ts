import { CadastroService } from './../services/cadastro.service';
import { Cadastro } from './../../shared/models/cadastro.model';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-cadastro',
  templateUrl: './inserir-cadastro.component.html',
  styleUrls: ['./inserir-cadastro.component.css']
})
export class InserirCadastroComponent {
  @ViewChild('formCadastro') formCadastro!: NgForm;
  cadastro!: Cadastro;

  constructor(
    private cadastroService: CadastroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cadastro = new Cadastro();
  }


  cadastrar(): void {
    if (this.formCadastro.form.valid) {
      this.cadastroService.cadastrar(this.cadastro);
      this.router.navigate(['/cadastro']);
    }
  }
}
