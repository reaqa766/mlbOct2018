import { Component, OnInit } from '@angular/core';
import { CodegenComponentFactoryResolver } from '@angular/core/src/linker/component_factory_resolver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // text_11 = true;
  // text_22 = true;
  players = [
  {code: 444482, pregunta: '¿Qué posición juega?', respuesta: 'Left Field', activo: true},
  {code: 446653, pregunta: '¿Cuál es su nombre?', respuesta: 'Jose Lobaton', activo: true},
  {code: 444876, pregunta: '¿Cuál es su apodo?', respuesta: 'Magic', activo: true},
  {code: 467092, pregunta: '¿Equipo para el 2019?', respuesta: 'NY Mets', activo: true},
  {code: 514888, pregunta: '¿Fecha de  su lesión?', respuesta: '29 de julio de 2018', activo: true},
  {code: 506702, pregunta: '¿Cuantos Hits bateó?', respuesta: '47', activo: true},
  {code: 650402, pregunta: '¿Cuántos jonrones bateó?', respuesta: '24', activo: true},
  {code: 660670, pregunta: '¿Premio en MLB 2018?', respuesta: 'Novato del Año...', activo: true}
  ];
  constructor() { }

  ngOnInit() {
    console.log('code', this.players);

  }

textChange(i) {
  this.players[i].activo = !this.players[i].activo;
}


}
