import { Component, OnInit } from '@angular/core';

import { DataPlayersService } from '../../../services/data-players.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../interfaces/players';
import { PlayersFantasyService } from '../../services/players-fantasy.service';

import { Campeonato } from '../Interfaces/Campeonato';
import { Liga } from '../Interfaces/Liga';
import { Equipo } from '../Interfaces/Equipo';
import { Jugador } from '../Interfaces/Jugador';


import { PagerService } from '../../../services/index'


@Component({
  selector: 'app-liga-team',
  templateUrl: './liga-team.component.html',
  styleUrls: ['./liga-team.component.css']
})
export class LigaTeamComponent implements OnInit {
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
    this.ligas = [
    {
      nombre: "Venedompro Oeste",
      esPaga: "true",
      logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Broncos FVD NORTE.png",
      equipos: [{ logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Broncos FVD NORTE.png", nombre: "Los Estrada", jugadores: [], managerId:"", managerName:"Daniel Estrada" },  { logo:"", nombre: "Paseo City", jugadores: [], managerId:"CREAR", managerName:""  },
          { logo:"", nombre: "Mi Familia SBC",jugadores: [], managerId:"CREAR", managerName:"" }, { logo:"", nombre: "Los Pájaros Rojos",jugadores: [], managerId:"CREAR", managerName:"" },
          { logo:"", nombre: "Halp9779",jugadores: [], managerId:"CREAR", managerName:"" }, { logo:"", nombre: "Pesqueros de Sucre",jugadores: [], managerId:"CREAR", managerName:"" },
          { logo:"", nombre: "Los Triunfadores",jugadores: [], managerId:"CREAR", managerName:"" }, { logo:"", nombre: "The Black Bull",jugadores: [], managerId:"CREAR", managerName:"" }]},
    {
      nombre: "Venedompro Este",
      esPaga: "true",
      logo: "",
      equipos: [{nombre: "Los Mutantes", jugadores: [], managerId:"CREAR", managerName:"" }, {nombre:  "Ronceros de Maracay", jugadores: [], managerId:"CREAR", managerName:"" },
        {nombre:  "Los Monstrones", jugadores: [], managerId:"CREAR", managerName:"" }, {nombre:  "Padres", jugadores: [], managerId:"CREAR", managerName:"" },
        {nombre: "Diablos Rojos", jugadores: [], managerId:"CREAR", managerName:"" },  {nombre: "Atléticos Del Jarillo", jugadores: [], managerId:"CREAR", managerName:"" },
        {nombre: "The Golden", jugadores: [], managerId:"CREAR", managerName:"" },  {nombre: "Niño Team", jugadores: [], managerId:"CREAR", managerName:"" },
        {nombre: "The Nuñez Team", jugadores: [], managerId:"CREAR", managerName:"" },  {nombre: "Bombarderos del Tuy", jugadores: [], managerId:"CREAR", managerName:"" },
        {nombre: "Tiburones de Miami", jugadores: [], managerId:"CREAR", managerName:"" }]},
    {
      nombre: " Venedompro Sur",
      esPaga: "true",
      logo: "",
      equipos: [{nombre: "Team Reales Primos",jugadores: [], managerId:"CREAR", managerName:""}, {nombre:  "Isafit Team",  jugadores: [], managerId:"CREAR", managerName:""},
        {nombre:  "Team Madrid", jugadores: [], managerId:"CREAR", managerName:""},  {nombre:  "Perros Locos", jugadores: [], managerId:"CREAR", managerName:""},
        {nombre:  "Sin Nombre", jugadores: [], managerId:"CREAR", managerName:""},  {nombre:  "San Mateo MLB", jugadores: [], managerId:"CREAR", managerName:""},
        {nombre:  "PanaBrothers", jugadores: [], managerId:"CREAR", managerName:""},  {nombre:  "Los Orientales del Pilar",  jugadores: [], managerId:"CREAR", managerName:""}]},
    {
      nombre: "VDVzla",
      esPaga: "false",
      logo: "",
      equipos: [ {nombre: "Los Triunfadores", jugadores: [], managerId:"CREAR", managerName:""},   {nombre: "Marineros de la Sabana", jugadores: [], managerId:"CREAR", managerName:""},
          {nombre: "Cats Miranda", jugadores: [], managerId:"CREAR", managerName:""},   {nombre: "Azulejos", jugadores: [], managerId:"CREAR", managerName:""},
          {nombre: "Pikacho Bol", jugadores: [], managerId:"CREAR", managerName:""},   {nombre: "The Block", jugadores: [], managerId:"CREAR", managerName:""} ,
          {nombre: "Los Juanchos", jugadores: [], managerId:"CREAR", managerName:""},   {nombre: "Vikings of the Guaira", jugadores: [], managerId:"CREAR", managerName:""},
          {nombre: "Chapines", jugadores: [], managerId:"CREAR", managerName:""}]},
    {
      nombre: " VD",
      esPaga: "false",
      logo: "",
      equipos: [ {nombre: "Guerreros del Centro B.B.C.", jugadores: [], managerId:"CREAR", managerName:""}, {nombre: "The Chuchos", jugadores: [], managerId:"CREAR", managerName:""},
          {nombre: "Arepa Power", jugadores: [], managerId:"CREAR", managerName:""}, {nombre: "Centinelas", jugadores: [], managerId:"CREAR", managerName:""},
          {nombre: "Ticodel", jugadores: [], managerId:"CREAR", managerName:""}, {nombre: "Los Camellos de Falcón", jugadores: [], managerId:"CREAR", managerName:""},
          {nombre: "Estosellamabeisbol", jugadores: [], managerId:"CREAR", managerName:""}, {nombre: "Aguizuela BBC", jugadores: [], managerId:"CREAR", managerName:""},
          {nombre: "Gringo23", jugadores: [], managerId:"CREAR", managerName:""}, {nombre: "Team G. R. A.", jugadores: [], managerId:"CREAR", managerName:""}]},
    {
      nombre: "VDEste",
      esPaga: "false",
      logo: "",
      equipos: [{nombre: "Los Monstrones",  jugadores: [], managerId:"CREAR", managerName:""}, {nombre: "Panteras BBC",  jugadores: [], managerId:"CREAR", managerName:""},
          {nombre:"Indios de Barcelona",  jugadores: [], managerId:"CREAR", managerName:""}, {nombre: "Monster",  jugadores: [], managerId:"CREAR", managerName:""},
          {nombre:"Brohter' Patriots",  jugadores: [], managerId:"CREAR", managerName:""}, {nombre: "Vengadores MLB",  jugadores: [], managerId:"CREAR", managerName:""},
          {nombre:"Los Gigantes",  jugadores: [], managerId:"CREAR", managerName:""}, {nombre: "Los Chiclosos",  jugadores: [], managerId:"CREAR", managerName:""},
          {nombre:"Noctambulos",  jugadores: [], managerId:"CREAR", managerName:""}, {nombre: "Los Dragones",  jugadores: [], managerId:"CREAR", managerName:""}]},
    {
      nombre: "VDOeste",
      esPaga: "false",
      logo: "",
      equipos: [{nombre: "Niño Team", jugadores: [], managerId:"CREAR", managerName:""}, {nombre: "Los Roba Señas de Cooperstpwn", jugadores: [], managerId:"CREAR", managerName:""},
          {nombre:"Hardwell Team", jugadores: [], managerId:"CREAR", managerName:""}, {nombre: "Chapi Team", jugadores: [], managerId:"CREAR", managerName:""},
          {nombre:"Moneyball Inc.", jugadores: [], managerId:"CREAR", managerName:""}, {nombre: "Perfume de Feyalegria", jugadores: [], managerId:"CREAR", managerName:""},
          {nombre:"The Walkers", jugadores: [], managerId:"CREAR", managerName:""}, {nombre: "Navegantes del Este", jugadores: [], managerId:"CREAR", managerName:""},
          {nombre:"Los Bad Boys", jugadores: [], managerId:"CREAR", managerName:""}, {nombre: "Los Macrofagos", jugadores: [], managerId:"CREAR", managerName:""}]},
    {
      nombre: "VDNorte",
      esPaga: "false",
      logo: "",
      equipos: [{nombre: "Alberto Monsalve Team", jugadores: [], managerId:"CREAR", managerName:""}, {nombre: "Tucacas BBC", jugadores: [], managerId:"CREAR", managerName:""},
          {nombre:"Broncos", jugadores: [], managerId:"CREAR", managerName:""}, {nombre: "Los Chonchis", jugadores: [], managerId:"CREAR", managerName:""},
          {nombre: "Leones del Valle", jugadores: [], managerId:"CREAR", managerName:""}, {nombre: "Machique's Power" , jugadores: [], managerId:"CREAR", managerName:""},
          {nombre: "OscarTeams", jugadores: [], managerId:"CREAR", managerName:""}, {nombre: "Paredes Team", jugadores: [], managerId:"CREAR", managerName:""},
          {nombre: "Isotopos Team", jugadores: [], managerId:"CREAR", managerName:""}]},
    {
      nombre: " VDSur",
      esPaga: "false",
      logo: "",
      equipos: [{nombre:"El Cojedeño",jugadores: [], managerId:"CREAR", managerName:""}, {nombre: "Delgados BBC",jugadores: [], managerId:"CREAR", managerName:""},
          {nombre: "Blue Sox",jugadores: [], managerId:"CREAR", managerName:""}, {nombre: "D.Prada",jugadores: [], managerId:"CREAR", managerName:""},
          {nombre: "MLB en Santiago",jugadores: [], managerId:"CREAR", managerName:""}, {nombre: "Pumas Vzla",jugadores: [], managerId:"CREAR", managerName:""},
          {nombre: "Delfines de Margarita",jugadores: [], managerId:"CREAR", managerName:""}, {nombre: "Los Osos de Carabobo",jugadores: [], managerId:"CREAR", managerName:""},
          {nombre: "El Tarron Sport", jugadores: [], managerId:"CREAR", managerName:""}, {nombre: "The Nuñez Team", jugadores: [], managerId:"CREAR", managerName:""}]},
    {
      nombre: "VDCentro",
      esPaga: "false",
      logo: "",
      equipos: [{nombre:"Bravos de Araure", jugadores: [], managerId:"CREAR", managerName:""},  {nombre:"Anthony BBC", jugadores: [], managerId:"CREAR", managerName:""},
          {nombre:"Gatos de Maracaibo", jugadores: [], managerId:"CREAR", managerName:""},  {nombre:"La Elegancia", jugadores: [], managerId:"CREAR", managerName:""},
          {nombre:"The Power Family", jugadores: [], managerId:"CREAR", managerName:""},  {nombre:"Team Peque", jugadores: [], managerId:"CREAR", managerName:""},
          {nombre:"Los Gutiz Baseball", jugadores: [], managerId:"CREAR", managerName:""},  {nombre:"Chacalaca BBC", jugadores: [], managerId:"CREAR", managerName:""},
          {nombre:"Latinpower Team", jugadores: [], managerId:"CREAR", managerName:""},  {nombre:"Los Gloriosos de Trujillo", jugadores: [], managerId:"CREAR", managerName:""}] }
    ];

    console.log("Ligas", this.ligas);
    console.log("Dato(0)", this.ligas[0].equipos);
    console.log("Dato(0)", this.ligas[0].equipos[1].nombre);
    console.log("Dato(0)", this.ligas[4].equipos[0].managerId);


    this.isLoading = true;
  }
  }
