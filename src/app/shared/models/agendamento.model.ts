export class Agendamento {
  constructor(
    public id?: number,
    public nome?: string,
    public hospital?: string,
    public especialidade?: string,
    public profissional?: string,
    public data?: string,
    public horario?: string,
  ) { }
}
