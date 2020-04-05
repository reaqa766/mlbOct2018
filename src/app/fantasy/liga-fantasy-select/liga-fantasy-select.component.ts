import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Campeonato } from '../Interfaces/Campeonato';
import { Liga } from '../Interfaces/Liga';
import { Equipo } from '../Interfaces/Equipo';
import { Jugador } from '../Interfaces/Jugador';



// Para usar en el area de PLAYERS
import { PlayersFantasyService } from '../../services/players-fantasy.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../interfaces/players';

import { PagerService } from '../../../services/index'


// Para utilizar Exportr en formato Excel
import * as xlsx from 'xlsx';

@Component({
  selector: 'app-liga-fantasy-select',
  templateUrl: './liga-fantasy-select.component.html',
  styleUrls: ['./liga-fantasy-select.component.css']
})
export class LigaFantasySelectComponent implements OnInit {
  // Para utilizar Exportar en formato Excel
  @ViewChild('epltable') epltable: ElementRef;
// Para utilizar Exportar en formato Excel



  campeonato: Campeonato;
  ligas: Liga[];
  equipos: Equipo[];
  jugador: Jugador;

  laLiga: boolean = true;
  elEquipo: boolean = true;

  tipoDeCampeonatoSeleccionado: boolean;
  ligaSeleccionada: Liga;
  tipoLigas: { display: string; esPaga: boolean; }[];
  nombreLigaPaga: { nombrePaga: string; }[];
  nombreLigaGratis: { nombreGratis: string; }[];
  ligasFiltradas: Liga[];
  equiposFiltrados: string[];
  equipoSeleccionado: Equipo;
  verSeleccion: string;
  mostrarJugadores: boolean = false;



  // Para usar en el area de PLAYERS
  public players = [];
  groups: any;
  selectedGroup: any;
  elarray: any;
  datesN: number = 10;
  searchText: string;
  playerAuxList = [];
  counter: number;
  n: number;
  m: number;
  n1: number = 12;
  n10: number = 10;
  public allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  isLoading: boolean;
  jsonPlayers: string;


  // Para usar en el area de PLAYERS

  selectedPlayers: any[] = [];

  constructor(private playerService: PlayersFantasyService, private pagerService: PagerService) { }


  ngOnInit() {
    this.tipoLigas = [{ display: "Paga", esPaga: true },
    { display: "Gratis", esPaga: false }];



    this.ligas = [{
      nombre: "Venedompro Oeste",
      esPaga: "true",
      logo: "",
      equipos: [{nombre: "Los Estrada", jugadores: [], managerId:"CREAR" },  {nombre: "Paseo City", jugadores: [], managerId:"CREAR" },
          {nombre: "Mi Familia SBC",jugadores: [], managerId:"CREAR" }, {nombre: "Los Pájaros Rojos",jugadores: [], managerId:"CREAR" },
          {nombre: "Halp9779",jugadores: [], managerId:"CREAR" }, {nombre: "Pesqueros de Sucre",jugadores: [], managerId:"CREAR" },
          {nombre: "Los Triunfadores",jugadores: [], managerId:"CREAR" }, {nombre: "The Black Bull",jugadores: [], managerId:"CREAR" }]},
    {
      nombre: "Venedompro Este",
      esPaga: "true",
      logo: "",
      equipos: [{nombre: "Los Mutantes", jugadores: [], managerId:"CREAR"}, {nombre:  "Ronceros de Maracay", jugadores: [], managerId:"CREAR"},
        {nombre:  "Los Monstrones", jugadores: [], managerId:"CREAR"}, {nombre:  "Padres", jugadores: [], managerId:"CREAR"},
        {nombre: "Diablos Rojos", jugadores: [], managerId:"CREAR"},  {nombre: "Atléticos Del Jarillo", jugadores: [], managerId:"CREAR"},
        {nombre: "The Golden", jugadores: [], managerId:"CREAR"},  {nombre: "Niño Team", jugadores: [], managerId:"CREAR"},
        {nombre: "The Nuñez Team", jugadores: [], managerId:"CREAR"},  {nombre: "Bombarderos del Tuy", jugadores: [], managerId:"CREAR"},
        {nombre: "Tiburones de Miami", jugadores: [], managerId:"CREAR"}]},
    {
      nombre: " Venedompro Sur",
      esPaga: "true",
      logo: "",
      equipos: [{nombre: "Team Reales Primos",jugadores: [], managerId:"CREAR"}, {nombre:  "Isafit Team",  jugadores: [], managerId:"CREAR"},
        {nombre:  "Team Madrid", jugadores: [], managerId:"CREAR"},  {nombre:  "Perros Locos", jugadores: [], managerId:"CREAR"},
        {nombre:  "Sin Nombre", jugadores: [], managerId:"CREAR"},  {nombre:  "San Mateo MLB", jugadores: [], managerId:"CREAR"},
        {nombre:  "PanaBrothers", jugadores: [], managerId:"CREAR"},  {nombre:  "Los Orientales del Pilar",  jugadores: [], managerId:"CREAR"}]},
    {
      nombre: "VDVzla",
      esPaga: "false",
      logo: "",
      equipos: [ {nombre: "Los Triunfadores", jugadores: [], managerId:"CREAR"},   {nombre: "Marineros de la Sabana", jugadores: [], managerId:"CREAR"},
          {nombre: "Cats Miranda", jugadores: [], managerId:"CREAR"},   {nombre: "Azulejos", jugadores: [], managerId:"CREAR"},
          {nombre: "Pikacho Bol", jugadores: [], managerId:"CREAR"},   {nombre: "The Block", jugadores: [], managerId:"CREAR"} ,
          {nombre: "Los Juanchos", jugadores: [], managerId:"CREAR"},   {nombre: "Vikings of the Guaira", jugadores: [], managerId:"CREAR"},
          {nombre: "Chapines", jugadores: [], managerId:"CREAR"}]},
    {
      nombre: " VD",
      esPaga: "false",
      logo: "",
      equipos: [ {nombre: "Guerreros del Centro B.B.C.", jugadores: [], managerId:"CREAR"}, {nombre: "The Chuchos", jugadores: [], managerId:"CREAR"},
          {nombre: "Arepa Power", jugadores: [], managerId:"CREAR"}, {nombre: "Centinelas", jugadores: [], managerId:"CREAR"},
          {nombre: "Ticodel", jugadores: [], managerId:"CREAR"}, {nombre: "Los Camellos de Falcón", jugadores: [], managerId:"CREAR"},
          {nombre: "Estosellamabeisbol", jugadores: [], managerId:"CREAR"}, {nombre: "Aguizuela BBC", jugadores: [], managerId:"CREAR"},
          {nombre: "Gringo23", jugadores: [], managerId:"CREAR"}, {nombre: "Team G. R. A.", jugadores: [], managerId:"CREAR"}]},
    {
      nombre: "VDEste",
      esPaga: "false",
      logo: "",
      equipos: [{nombre: "Los Monstrones",  jugadores: [], managerId:"CREAR"}, {nombre: "Panteras BBC",  jugadores: [], managerId:"CREAR"},
          {nombre:"Indios de Barcelona",  jugadores: [], managerId:"CREAR"}, {nombre: "Monster",  jugadores: [], managerId:"CREAR"},
          {nombre:"Brohter' Patriots",  jugadores: [], managerId:"CREAR"}, {nombre: "Vengadores MLB",  jugadores: [], managerId:"CREAR"},
          {nombre:"Los Gigantes",  jugadores: [], managerId:"CREAR"}, {nombre: "Los Chiclosos",  jugadores: [], managerId:"CREAR"},
          {nombre:"Noctambulos",  jugadores: [], managerId:"CREAR"}, {nombre: "Los Dragones",  jugadores: [], managerId:"CREAR"}]},
    {
      nombre: "VDOeste",
      esPaga: "false",
      logo: "",
      equipos: [{nombre: "Niño Team", jugadores: [], managerId:"CREAR"}, {nombre: "Los Roba Señas de Cooperstpwn", jugadores: [], managerId:"CREAR"},
          {nombre:"Hardwell Team", jugadores: [], managerId:"CREAR"}, {nombre: "Chapi Team", jugadores: [], managerId:"CREAR"},
          {nombre:"Moneyball Inc.", jugadores: [], managerId:"CREAR"}, {nombre: "Perfume de Feyalegria", jugadores: [], managerId:"CREAR"},
          {nombre:"The Walkers", jugadores: [], managerId:"CREAR"}, {nombre: "Navegantes del Este", jugadores: [], managerId:"CREAR"},
          {nombre:"Los Bad Boys", jugadores: [], managerId:"CREAR"}, {nombre: "Los Macrofagos", jugadores: [], managerId:"CREAR"}]},
    {
      nombre: "VDNorte",
      esPaga: "false",
      logo: "",
      equipos: [{nombre: "Alberto Monsalve Team", jugadores: [], managerId:"CREAR"}, {nombre: "Tucacas BBC", jugadores: [], managerId:"CREAR"},
          {nombre:"Broncos", jugadores: [], managerId:"CREAR"}, {nombre: "Los Chonchis", jugadores: [], managerId:"CREAR"},
          {nombre: "Leones del Valle", jugadores: [], managerId:"CREAR"}, {nombre: "Machique's Power" , jugadores: [], managerId:"CREAR"},
          {nombre: "OscarTeams", jugadores: [], managerId:"CREAR"}, {nombre: "Paredes Team", jugadores: [], managerId:"CREAR"},
          {nombre: "Isotopos Team", jugadores: [], managerId:"CREAR"}]},
    {
      nombre: " VDSur",
      esPaga: "false",
      logo: "",
      equipos: [{nombre:"El Cojedeño",jugadores: [], managerId:"CREAR"}, {nombre: "Delgados BBC",jugadores: [], managerId:"CREAR"},
          {nombre: "Blue Sox",jugadores: [], managerId:"CREAR"}, {nombre: "D.Prada",jugadores: [], managerId:"CREAR"},
          {nombre: "MLB en Santiago",jugadores: [], managerId:"CREAR"}, {nombre: "Pumas Vzla",jugadores: [], managerId:"CREAR"},
          {nombre: "Delfines de Margarita",jugadores: [], managerId:"CREAR"}, {nombre: "Los Osos de Carabobo",jugadores: [], managerId:"CREAR"},
          {nombre: "El Tarron Sport", jugadores: [], managerId:"CREAR"}, {nombre: "The Nuñez Team", jugadores: [], managerId:"CREAR"}]},
    {
      nombre: "VDCentro",
      esPaga: "false",
      logo: "",
      equipos: [{nombre:"Bravos de Araure", jugadores: [], managerId:"CREAR"},  {nombre:"Anthony BBC", jugadores: [], managerId:"CREAR"},
          {nombre:"Gatos de Maracaibo", jugadores: [], managerId:"CREAR"},  {nombre:"La Elegancia", jugadores: [], managerId:"CREAR"},
          {nombre:"The Power Family", jugadores: [], managerId:"CREAR"},  {nombre:"Team Peque", jugadores: [], managerId:"CREAR"},
          {nombre:"Los Gutiz Baseball", jugadores: [], managerId:"CREAR"},  {nombre:"Chacalaca BBC", jugadores: [], managerId:"CREAR"},
          {nombre:"Latinpower Team", jugadores: [], managerId:"CREAR"},  {nombre:"Los Gloriosos de Trujillo", jugadores: [], managerId:"CREAR"}] }
    ];
        // Para usar en el area de PLAYERS

        this.isLoading = true;
        this.getPlayersMap();

        // Para usar en el area de PLAYERS


        // Para utilizar Exportar en formato Excel

        // Para utilizar Exportar en formato Excel

      }
  exportToExcel() {
    const ws: xlsx.WorkSheet =
    xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'epltable.xlsx');
    }
  filtrarLigasPorTipo(tipoDeCampeonatoSeleccionado) {
    this.laLiga = false;
    this.ligasFiltradas = [];
    this.ligasFiltradas = this.ligas.filter(liga => tipoDeCampeonatoSeleccionado == liga.esPaga)
      .sort(({ nombre: a }, { nombre: b }) => {
        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        } else if (a === b) {
          return 0;
        }
      });

  }

  filtrarEquipos(event) {
    this.elEquipo = false;
    this.equiposFiltrados = [];
    this.pager.all
    this.allItems = this.ligaSeleccionada.jugadores.filter(({equipo}) => !equipo);
    this.equipoSeleccionado = null;
    this.mostrarJugadores = false;
  }

  seleccionarEquipo(event) {
    this.mostrarJugadores = true;
  }



    // Para usar en el area de PLAYERS

  // Convertir   el Array de Observables a un Array de Objetos.
  // Seleccionar los items necesarios del nuevo Array (con todo el contenido del Json) y colocarlos en un nuevo Array
  getPlayersMap() {
    let InfoObsPlayer = this.playerService.getAllPlayersActives19();
    let index = 0;
    for (let obs of InfoObsPlayer) {
      obs.pipe(take(1)).subscribe(res => {
        this.players.push(res);
        if ((InfoObsPlayer.length - 1) === index) {
          this.players = this.players.map(player => {
            const newPlayer: Players = {};
            Object.assign(newPlayer, player.people[0]);
            console.log("Players", this.players);

            return newPlayer;
          });

          // Se filtran los jugadores que no esten activos (no tienen stats ni splits)

          this.players = this.players.filter(player =>
            player.stats && player.stats.length !== 0  && player.stats[0].splits && player.stats[0].splits.length !== 0)

            // se ordenan por nombre
            .sort(({ lastName: a }, { lastName: b }) => {
              if (a > b) {
                return 1;
              } else if (a < b) {
                return -1;
              } else if (a === b) {
                return 0;
              }
            });
          this.allItems = [...this.players];
          const jugadores = this.players.map(jugador => ({
            jugador,
            equipo: null
          }))
          this.ligas = this.ligas.map(liga => ({...liga, jugadores}))

          this.setPage(1);
          this.isLoading = false;
        }
        index++;
      });
    }

    const playerstxt1 = this.players

  }


  onSearchChange() {

    if (this.searchText) {
      this.allItems = this.allItems.filter(({jugador, equipo}) =>
        !equipo &&
        (jugador.stats[0].splits[0].team.name.toLowerCase().includes(this.searchText) ||
        (jugador.fullName && jugador.fullName.toLowerCase().includes(this.searchText)) ||
        (jugador.primaryPosition.abbreviation && jugador.primaryPosition.abbreviation.toLowerCase().includes(this.searchText)) ||
        (jugador.primaryPosition.name && jugador.primaryPosition.name.toLowerCase().includes(this.searchText)) ||
        (jugador.nickName && jugador.nickName.toLowerCase().includes(this.searchText))));
      this.setPage(this.pager.currentPage);
    } else {
      this.allItems = this.ligaSeleccionada.jugadores.filter((({equipo} )=> !equipo));
      this.setPage(this.pager.currentPage);
    }
    return this.allItems;
  }
  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager3(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }


  setPage2(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager4(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  // Para usar en el area de PLAYERS

  addPlayer(id) {
    // Agrego a equipo
    const {jugador} = this.allItems.find(({jugador} )=> jugador.id == id);
    this.equipoSeleccionado.jugadores.push(jugador);
    // Reflejo los cambios en la liga
    this.ligaSeleccionada.jugadores = this.ligaSeleccionada.jugadores.map(({jugador}) => {
      return {
        jugador,
        equipo: jugador.id == id ? this.equipoSeleccionado.nombre : null
      }
    });
    this.allItems = this.ligaSeleccionada.jugadores.filter(({equipo}) => !equipo);
  }

  removePlayer(id) {
    // Lo saco del equipo
    this.equipoSeleccionado.jugadores = this.equipoSeleccionado.jugadores.filter(jugador => jugador.id != id);
    // Reflejo los cambios en la liga
    this.ligaSeleccionada.jugadores = this.ligaSeleccionada.jugadores.map(({jugador,equipo}) => {
      return {
        jugador,
        equipo: jugador.id == id ? null : equipo
      }
    });
    this.allItems = this.ligaSeleccionada.jugadores.filter(({equipo}) => !equipo);
  }



}
