import { Component, OnInit } from '@angular/core';
import { Campeonato } from '../Interfaces/Campeonato';
import { Liga } from '../Interfaces/Liga';
import { Equipo } from '../Interfaces/Equipo';
import { Jugador } from '../Interfaces/Jugador';

@Component({
  selector: 'app-fantasy-seleccion-jugadores',
  templateUrl: './fantasy-seleccion-jugadores.component.html',
  styleUrls: ['./fantasy-seleccion-jugadores.component.css']
})
export class FantasySeleccionJugadoresComponent implements OnInit {

  campeonato: Campeonato;
  ligas: Liga[];
  equipos: Equipo[];
  jugador: Jugador;

  laLiga:boolean = true;
  elEquipo:boolean = true;



  tipoDeCampeonatoSeleccionado: boolean;
  ligaSeleccionada: Liga;
  tipoLigas: { display: string; esPaga: boolean; }[];
  nombreLigaPaga: { nombrePaga: string; }[];
  nombreLigaGratis: { nombreGratis: string; }[];
  ligasFiltradas: Liga[];
  equiposFiltrados: string [];
  equipoSeleccionado: Equipo;

  verSeleccion: string;




  constructor() { }

  ngOnInit() {

    this.tipoLigas = [{ display: "Paga", esPaga:true },
    { display: "Gratis", esPaga:false }];

    this.ligas = [{ nombre: "Venedompro Oeste",
    esPaga:"true",
    logo:"",
    equipos:["Los Estrada", "Paseo City", "Mi Familia SBC", "Los Pájaros Rojos", "Halp9779", "Pesqueros de Sucre", "Los Triunfadores","The Black Bull" ] },
    { nombre: "Venedompro Este",
    esPaga:"true",
    logo:"",
    equipos:[ "Los Mutantes", "Ronceros de Maracay", "Los Monstrones", "Padres", "Diablos Rojos", "Atléticos Del Jarillo", "The Golden", "Niño Team", "The Nuñez Team", "Bombarderos del Tuy", "Tiburones de Miami" ] },
    { nombre: " Venedompro Sur",
    esPaga: "true",
    logo:"",
    equipos:["Team Reales Primos", "Isafit Team", "Team Madrid", "Perros Locos", "Sin Nombre", "San Mateo MLB", "PanaBrothers", "Los Orientales del Pilar" ] },
    { nombre: "VDVzla",
    esPaga:"false",
    logo:"",
    equipos:["Los Triunfadores", "Marineros de la Sabana", "Cats Miranda", "Azulejos", "Pikacho Bol", "The Block", "Los Juanchos", "Vikings of the Guaira", "Chapines"] },
    { nombre: " VD",
    esPaga:"false",
    logo:"",
    equipos:["Guerreros del Centro B.B.C.", "The Chuchos", "Arepa Power", "Centinelas", "Ticodel", "Los Camellos de Falcón", "Estosellamabeisbol", "Aguizuela BBC", "Gringo23", "Team G. R. A."] },
    { nombre: "VDEste",
    esPaga: "false",
    logo:"",
    equipos:["Los Monstrones", "Panteras BBC", "Indios de Barcelona", "Monster", "Brohter' Patriots", "Vengadores MLB", "Los Gigantes", "Los Chiclosos", "Noctambulos", "Los Dragones" ] },
    { nombre: "VDOeste",
    esPaga: "false",
    logo:"",
    equipos:["Niño Team", "Los Roba Señas de Cooperstpwn", "Hardwell Team", "Chapi Team", "Moneyball Inc.", "Perfume de Feyalegria", "The Walkers", "Navegantes del Este", "Los Bad Boys", "Los Macrofagos"] },
    { nombre: "VDNorte",
    esPaga: "false",
    logo:"",
    equipos:["Alberto Monsalve Team", "Tucacas BBC", "Broncos", "Los Chonchis", "Leones del Valle", "Machique's Power", "OscarTeams", "Paredes Team", "Isotopos Team" ] },
    { nombre: " VDSur",
    esPaga: "false",
    logo:"",
    equipos:["El Cojedeño", "Delgados BBC", "Blue Sox", "D.Prada", "MLB en Santiago", "Pumas Vzla", "Delfines de Margarita", "Los Osos de Carabobo", "El Tarron Sport", "The Nuñez Team"] },
    { nombre: "VDCentro",
    esPaga: "false",
    logo:"",
    equipos:["Bravos de Araure", "Anthony BBC", "Gatos de Maracaibo", "La Elegancia", "The Power Family", "Team Peque", "Los Gutiz Baseball", "Chacalaca BBC", "Latinpower Team", "Los Gloriosos de Trujillo"] }];
  }


  filtrarLigasPorTipo(tipoDeCampeonatoSeleccionado) {
    this.laLiga = false;
    this.ligasFiltradas = [];
    this.ligasFiltradas =  this.ligas.filter(liga => tipoDeCampeonatoSeleccionado == liga.esPaga)
    .sort(({ nombre: a }, { nombre: b }) => {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else if (a === b) {
        return 0;
      }});

      // console.log("Equipos",this.ligasFiltradas );
      // console.log("tipoDeCampeonatoSeleccionado",this.tipoDeCampeonatoSeleccionado );

    }

    filtrarEquipos(event) {
      this.elEquipo= false;
      this.equiposFiltrados= [];
      this.equiposFiltrados = this.ligaSeleccionada.equipos;

}




}
