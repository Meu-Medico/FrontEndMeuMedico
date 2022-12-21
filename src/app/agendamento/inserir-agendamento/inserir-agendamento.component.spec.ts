import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirAgendamentoComponent } from './inserir-agendamento.component';

describe('InserirAgendamentoComponent', () => {
  let component: InserirAgendamentoComponent;
  let fixture: ComponentFixture<InserirAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirAgendamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
