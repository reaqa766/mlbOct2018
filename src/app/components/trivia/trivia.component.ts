import { Component, OnInit } from '@angular/core';
import { CodegenComponentFactoryResolver } from '@angular/core/src/linker/component_factory_resolver';


@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {
  // text_11 = true;
  // text_22 = true;
  players = [
  {code: 444482, pregunta: '¿Qué posición juega?', respuesta: 'Left Field', activo: true, option: true, opcion1: 'magic', opcion2:'KC', opcion3:'Sabanero'},
  {code: 446653, pregunta: '¿Cuál es su nombre?', respuesta: 'Jose Lobaton', activo: true, option: true, opcion1: '', opcion2:'', opcion3:'' },
  {code: 444876, pregunta: '¿Cuál es su apodo?', respuesta: 'Magic', activo: true, option: true, opcion1: '', opcion2:'', opcion3:'' },
  {code: 467092, pregunta: '¿Equipo para el 2019?', respuesta: 'NY Mets', activo: true, option: true, opcion1: '', opcion2:'', opcion3:'' },
  {code: 514888, pregunta: '¿Fecha de  su lesión?', respuesta: '29 de julio de 2018', activo: true, option: true, opcion1: '', opcion2:'', opcion3:'' },
  {code: 506702, pregunta: '¿Cuantos Hits bateó?', respuesta: '47', activo: true, option: true, opcion1: '', opcion2:'', opcion3:'' },
  {code: 650402, pregunta: '¿Cuántos jonrones bateó?', respuesta: '24', activo: true, option: true, opcion1: '', opcion2:'', opcion3:'' },
  {code: 660670, pregunta: '¿Premio en MLB 2018?', respuesta: 'Novato del Año...', activo: true, option: true, opcion1: '', opcion2:'', opcion3:'' }
  ];
  constructor() { }

  ngOnInit() {
    console.log('code', this.players);

  }

textChange(i) {
  this.players[i].activo = !this.players[i].activo;
}

respChange(i) {
  this.players[i].option = !this.players[i].option;
}



}


