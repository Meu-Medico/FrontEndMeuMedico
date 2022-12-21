import { ConfirmacaoService } from './../services';
import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.css']
})
export class ConfirmacaoComponent {


  constructor(private confirmacaoService: ConfirmacaoService) { }

    ngOnInit() {
    }
}
