import { Component, OnInit } from '@angular/core';
import { Campeonato } from '../Interfaces/Campeonato';
import { Ligas } from '../Interfaces/Ligas';
import { Equipos } from '../Interfaces/Equipos';
import { Jugador } from '../Interfaces/Jugador';

@Component({
  selector: 'app-fantasy-seleccion-jugadores',
  templateUrl: './fantasy-seleccion-jugadores.component.html',
  styleUrls: ['./fantasy-seleccion-jugadores.component.css']
})
export class FantasySeleccionJugadoresComponent implements OnInit {

  campeonato: Campeonato;
  ligas: Ligas[];
  equipos: Equipos;
  jugador: Jugador;


  tipoDeCampeonatoSeleccionado: boolean;
  tipoDeLigaSeleccionado: string;
  tipoLigas: { display: string; esPaga: boolean; }[];
  nombreLigaPaga: { nombrePaga: string; }[];
  nombreLigaGratis: { nombreGratis: string; }[];
  ligasFiltradas: Ligas[];

  verSeleccion: string;




  constructor() { }

  ngOnInit() {

    this.tipoLigas = [{ display: "Paga", esPaga:true }, { display: "Gratis", esPaga:false }];

    this.ligas = [{ nombre: "Venedompro Vzla", esPaga:"true", logo:"", equipos:[] },
    { nombre: "Venedompro Centro", esPaga:"true", logo:"", equipos:[] },
    { nombre: " Venedompro Sur", esPaga: "true", logo:"", equipos:[] },
    { nombre: "VDVzla",esPaga:"false", logo:"", equipos:[] },
    { nombre: " VD", esPaga:"false", logo:"", equipos:[] },
    { nombre: "VDEste",  esPaga: "false", logo:"", equipos:[] },
    { nombre: "VDOeste", esPaga: "false", logo:"", equipos:[] },
    { nombre: "VDNorte",  esPaga: "false", logo:"", equipos:[] },
    { nombre: " VDSur",  esPaga: "false", logo:"", equipos:[] },
    { nombre: "VDCentro",  esPaga: "false", logo:"", equipos:[] }];


  }


  muestraTipodeLiga(tipoDeCampeonatoSeleccionado) {
    this.ligasFiltradas = [];
    this.ligasFiltradas =  this.ligas.filter(liga => tipoDeCampeonatoSeleccionado == liga.esPaga)
    // .sort(({ nombre: a }, { nombre: b }) => {
    //   if (a > b) {
    //     return 1;
    //   } else if (a < b) {
    //     return -1;
    //   } else if (a === b) {
    //     return 0;
    //   }});


      console.log ("ligaFiltrada", this.ligasFiltradas);
      console.log ("ligas", this.ligas);
      console.log ("tipoDeCampeonatoSeleccionado", tipoDeCampeonatoSeleccionado);
      console.log ("Boolean del tipoDeCampeonatoSeleccionado", Boolean(tipoDeCampeonatoSeleccionado));
      console.log ("Boolean", Boolean(true));
    // this.tituloEquipo = this.equipos[index-1].equipo;
    // this.logoEquipo = this.equipos[index-1].url;
}



}

