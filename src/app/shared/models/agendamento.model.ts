import { Hospital } from './hospital.model';
import { Especialidade } from './especialidade.model';
import { Profissional } from './profissional.model';


export class Agendamento {
  constructor(
    public id?: number,
    public nome?: string,
    public hospital?: Hospital,
    public especialidade?: Especialidade,
    public profissional?: Profissional,
    public data?: string,
    public horario?: string,
  ) { }
}
