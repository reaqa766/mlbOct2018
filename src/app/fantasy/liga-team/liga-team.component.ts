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

    console.log("Equipos", this.ligas[0].equipos);
    console.log("Dato(0)", this.ligas[0].equipos[0].nombre);
    console.log("Dato(0)", this.ligas[0].equipos[0].managerId);


    this.isLoading = true;
  }
  }
