import { Component, OnInit } from '@angular/core';
import { CodegenComponentFactoryResolver } from '@angular/core/src/linker/component_factory_resolver';


@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {
  // text_11 = true;
  // text_22 = true;s
  answerDef = ' ' ;
  answer_array: Array<string[]> = [];
  answer: Array<string[]> =  [];
  // answer = ' ';
  respuesta_def = true;
  respuesta_dada = true;
  form_container = true;
  opcion = '0' ;
  selection = ' ' ;
  players = [
  {code: 444482, pregunta: '¿Qué posición juega?',
  respuesta: 'Left Field',
  activo: true, option: true,
  opcion1: 'Short Stop', opcion2: 'Catcher', opcion3: 'Left Field'},

  {code: 446653, pregunta: '¿Cuál es su nombre?',
  respuesta: 'Jose Lobaton', activo: true, option: true,
  opcion1: 'Gleyber Torres', opcion2: 'José Lobatón', opcion3: 'Harold Castro' },

  {code: 444876, pregunta: '¿Cuál es su apodo?',
  respuesta: 'Magic', activo: true, option: true,
  opcion1: 'Magic', opcion2: 'Sabanero Soy', opcion3: 'Esco' },

  {code: 467092, pregunta: '¿Equipo para el 2019?',
  respuesta: 'NY Mets', activo: true, option: true, opcion1: 'Tampa', opcion2: 'Yankees', opcion3: 'Mets' },

  {code: 514888, pregunta: '¿Fecha de  su lesión?',
  respuesta: '29 de julio de 2018', activo: true, option: true, opcion1: '5 Abril', opcion2: 'Julio', opcion3: '3 Octubre' },

  {code: 506702, pregunta: '¿Cuantos Hits bateó?',
  respuesta: '47', activo: true, option: true, opcion1: '75', opcion2: '47', opcion3: '53' },

  {code: 650402, pregunta: '¿Cuántos jonrones bateó?',
  respuesta: '24', activo: true, option: true, opcion1: '35', opcion2: '20', opcion3: '24' },

  {code: 660670, pregunta: '¿Premio en MLB 2018?',
  respuesta: 'Novato del Año...', activo: true, option: true, opcion1: 'MVP', opcion2: 'Rookie of the year', opcion3: 'Cy Young' }

];
  constructor() { }

  ngOnInit() {
    for (var answer_array  of  this.answer) {
      this.answer_array.push;
      console.log('answer_OnInit', this.answer_array);
      
    }

  }

textChange(i) {
  this.players[i].activo = !this.players[i].activo;
}

respDada(i) {
  this.respuesta_def = true;
  this.respuesta_dada = true;
  this.respuesta_def = !this.respuesta_def;
  this.respuesta_dada = !this.respuesta_dada;
  console.log('answer', this.answer);
  console.log('respuesta_def', this.respuesta_def);
  console.log('respuesta_dada', this.respuesta_dada);
  console.log('correcta', this.players[i].respuesta);
  

  
}
}


