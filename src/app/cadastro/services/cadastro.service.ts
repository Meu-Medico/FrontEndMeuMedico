import { Injectable } from '@angular/core';
import { Cadastro } from '../../shared/models/cadastro.model';

const LS_CHAVE: string = 'cadastros';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor() { }

  listarTodos(): Cadastro[] {
    const cadastros = localStorage[LS_CHAVE];
    return cadastros ? JSON.parse(cadastros) : [];
  }

  cadastrar(cadastro: Cadastro): void {
    const cadastros = this.listarTodos();
    cadastro.id = new Date().getTime();
    cadastros.push(cadastro);
    localStorage[LS_CHAVE] = JSON.stringify(cadastros);
  }

  buscarPorId(id: number): Cadastro | undefined {
    const cadastros: Cadastro[] = this.listarTodos();
    return cadastros.find(cadastro => cadastro.id === id);
  }

  atualizar(cadastro: Cadastro): void {
    const cadastros: Cadastro[] = this.listarTodos();
    cadastros.forEach((obj, index, objs) => {
      if (cadastro.id === obj.id) {
        objs[index] = cadastro;
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(cadastros);
  }

  remover(id: number): void {
    let cadastros: Cadastro[] = this.listarTodos();
    cadastros = cadastros.filter(cadastro => cadastro.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(cadastros);
  }
}
