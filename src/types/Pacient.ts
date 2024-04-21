export interface Pacient {
  nome: { value: "" | string; isConfermed: false | boolean };
  idade: { value: "" | string; isConfermed: false | boolean };
  //botoes
  temDoenca: { value: false | boolean; isConfermed: false | boolean };
  estaAconpanhada: { value: false | boolean; isConfermed: false | boolean };
  marcarConsulta: { value: false | boolean; isConfermed: false | boolean };
  //botoes
  medico: { value: "" | string; isConfermed: false | boolean };
  //botoes
  horario: { value: "" | string; isConfermed: false | boolean };
}
