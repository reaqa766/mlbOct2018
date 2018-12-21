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
  {code: 444876, pregunta: '¿Con que apodo se conoce?', respuesta: 'Magic', activo: true},
  {code: 467092, pregunta: 'En que equipo jugará en 2019?', respuesta: 'NY Mets', activo: true},
  {code: 471911, pregunta: '¿Cuántos juegos inició?', respuesta: '30', activo: true},
  {code: 514888, pregunta: '¿En qué fecha estuvo lesionado?', respuesta: '29 de julio de 2018', activo: true},
  {code: 650402, pregunta: '¿Cuántos jonrones bateó?', respuesta: '24', activo: true},
  {code: 660670, pregunta: '¿Cuáles premios le otorgaron?', respuesta: 'Entre otros Novato del Año, LN', activo: true}
  ];
  constructor() { }

  ngOnInit() {
  }

textChange(i) {
  this.players[i].activo = !this.players[i].activo;
}


}
