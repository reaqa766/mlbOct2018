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
            nombre: "VDVzla",
      esPaga: "false",
      logo: "",
      equipos: [ { logo:"../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/Los Calienta Banca FVDVZLA.png", nombre: "Los Calienta Bancas",
      jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"Venezuela", managerName:"Julio Revetti"},
         { logo:"../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/Marineros de la Sabana FVDVZLA.png", nombre: "Marineros de la Sabana",
         jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"Venezuela", managerName:"Alberto Aponte"},
          { logo:"../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/Miranda Cats FVDVZLA.png", nombre: "Cats Miranda",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"Venezuela", managerName:"Alberto Bonfanti"},
             { logo:"../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/Azulejos FVDVZLA.png", nombre: "Azulejos",
             jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"Venezuela", managerName:"Oscar Calles"},
          { logo:"../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/Pikachu Bol FVDVZLA.png", nombre: "Pikacho Bol",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"Venezuela", managerName:"Carlos Rodriguez"},
             { logo:"../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/The Block FVDVZLA.png", nombre: "The Block",
             jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"Venezuela", managerName:"Christian Chiacchio"},
          { logo:"../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/Los Juanchos FVDVZLA.png", nombre: "Los Juanchos",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"Venezuela", managerName:"Franklin Ojeda"},
          { logo:"../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/Los Vikingos de La Guaira FVDVZLA.png", nombre: "Vikings of the Guaira",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"Venezuela", managerName:"Joaquin Figueredo"},
          { logo:"../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/La Pedrera FVDVZLA.png", nombre: "La Pedrera",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"Venezuela", managerName:"Andrew Montilla"},
          { logo:"../../../assets/LOGOS FANTASY EQUIPOS/Liga Fantasy VD VZLA/Los Chapines FVDVZLA.png", nombre: "Chapines",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"Guatemala", managerName:"Mark Colina"}]},
    {
      nombre: " VD",
      esPaga: "false",
      logo: "",
      equipos: [ {logo:"../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Guerreros del Centro FVD.png", nombre: "Guerreros del Centro B.B.C.",
      jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"Antonio Hernandez"},
       {logo:"../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/The Chuchos FVD.png", nombre: "The Chuchos",
       jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"Alex Arias"},
          {logo:"../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Arepa Power FVD.png", nombre: "Arepa Power",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"Anthony Cedeño"},
           {logo:"../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Centinelas FVD.png", nombre: "Centinelas",
           jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"Cesar Medina"},
          {logo:"../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Ticodel FVD.png", nombre: "Ticodel",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"Victor Delgado"},
           {logo:"../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Los Camellos de Falcon FVD.png", nombre: "Los Camellos de Falcón",
           jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"Efrain Leon"},
          {logo:"../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Esto se llama Beisbol FVD.png", nombre: "Estosellamabeisbol",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"Leandro Cisneros"},
           {logo:"../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Aguizuela FVD.png", nombre: "Aguizuela BBC",
           jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"Eduardo Villarroel"},
          {logo:"../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Gringo23 FVD.png", nombre: "Gringo23",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"Jorge Corona"},
           {logo:"../../../assets/LOGOS FANTASY EQUIPOS/Liga FANTASY VD/Team GRA FVD.png", nombre: "Team G. R. A.",
           jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"Carlos Torrealba"}]},
    {
      nombre: "VDEste",
      esPaga: "false",
      logo: "",
      equipos: [{logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Los Monstrones FVD ESTE.png", nombre: "Los Monstrones",
      jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
       {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Panteras BBC FVD ESTE.png", nombre: "Panteras BBC",
       jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
          {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Indios de Barcelona FVD ESTE.png", nombre:"Indios de Barcelona",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
           {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Monster FVD ESTE.png", nombre: "Monster",
           jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
          {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Brothers Patriots FVD ESTE.png", nombre:"Brohter' Patriots",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
           {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Vengadores FVD ESTE.png", nombre: "Vengadores MLB",
           jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
          {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Los Gigantes FVD ESTE.png", nombre:"Los Gigantes",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
           {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Los Chiclosos FVD ESTE.png", nombre: "Los Chiclosos",
           jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
          {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Noctambulos FVD ESTE.png", nombre:"Noctambulos",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
           {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD ESTE/Los Dragones FVD ESTE.png", nombre: "Los Dragones",
           jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""}]},
    {
      nombre: "VDOeste",
      esPaga: "false",
      logo: "",
      equipos: [{logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/Niño Team  FVDOESTE.png", nombre: "Niño Team",
      jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
       {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/Los Roba Señas  FVDOESTE.png", nombre: "Los Roba Señas de Cooperstpwn",
       jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
          {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/HardeWell Team  FVDOESTE.png", nombre:"Hardwell Team",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
           {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/Chapi Team  FVDOESTE.png", nombre: "Chapi Team",
           jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
          {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/Money Ball  FVDOESTE.png", nombre:"Moneyball Inc.",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
           {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/Perfume FeyAlegria  FVDOESTE.png", nombre: "Perfume de Feyalegria",
           jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
          {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/The Walkers  FVDOESTE.png", nombre:"The Walkers",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
           {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/Navegantes del Este  FVDOESTE.png", nombre: "Navegantes del Este",
           jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
          {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/Los Bad Boys  FVDOESTE.png", nombre:"Los Bad Boys",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
           {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD OESTE/Los Macrofagos  FVDOESTE .png", nombre: "Los Macrofagos",
           jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""}]},
    {
      nombre: "VDNorte",
      esPaga: "false",
      logo: "",
      equipos: [{logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Alberto Mosalve Team  FVD NORTE.png", nombre: "Alberto Monsalve Team",
      jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
       {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Tucacas BBC  FVD NORTE.png", nombre: "Tucacas BBC",
       jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
          {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Broncos FVD NORTE.png", nombre:"Broncos",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
           {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Los Chonchis  FVD NORTE.png", nombre: "Los Chonchis",
           jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
          {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Leones del Valle  FVD NORTE.png", nombre: "Leones del Valle",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
           {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Machiques Power  FVD NORTE.png", nombre: "Machique's Power" ,
           jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
          {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Oscar Team  FVD NORTE .png", nombre: "OscarTeam",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
           {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Paredes Team  FVD NORTE.png", nombre: "Paredes Team",
           jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
          {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Isotops Team  FVD NORTE.png", nombre: "Isotopos Team",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
          {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD NORTE/Cangrejeros de Vzla   FVD NORTER.png", nombre: "Cangrejeros de Vzla",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""}]},
    {
      nombre: " VDSur",
      esPaga: "false",
      logo: "",
      equipos: [{logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/El Cojedeño FVD SUR.png", nombre:"El Cojedeño",
      jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
       { logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/Delgados BBC  FVD SUR.png", nombre: "Delgados BBC",
       jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
          { logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/Blue Sox  FVD SUR.png", nombre: "Blue Sox",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
           { logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/D Prada  FVD SUR.png", nombre: "D.Prada",
           jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
          { logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/MLB en Santiago  FVD SUR.png", nombre: "MLB en Santiago",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
           { logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/Pumas VZLA  FVD SUR.png", nombre: "Pumas Vzla",
           jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
          { logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/Delfines de Margarita  FVD SUR .png", nombre: "Delfines de Margarita",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
           { logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/Osos de Carabobo  FVD SUR.png", nombre: "Los Osos de Carabobo",
           jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
          { logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD SUR/El Tarron Sport  FVD SUR.png", nombre: "El Tarron Sport",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
           { logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/The Nuñez team FVENEDOMPRO ESTE.png", nombre: "The Nuñez Team",
           jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""}]},
    {
      nombre: "VDCentro",
      esPaga: "false",
      logo: "",
      equipos: [{logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/Bravos de Ararure FVD CENTRO.png", nombre:"Bravos de Araure",
      jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
        {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/Anthony BBC FVD CENTRO .png", nombre:"Anthony BBC",
        jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
          {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/Gatos de Maracaibo FVD CENTRO.png", nombre:"Gatos de Maracaibo",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
            {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/La Elegancia FVD CENTRO.png", nombre:"La Elegancia",
            jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
          {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/The Power Family FVD CENTRO .png", nombre:"The Power Family",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
            {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/Team Peque FVD CENTRO .png", nombre:"Team Peque",
            jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
          {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/Los Guti Baseball FVD CENTRO .png", nombre:"Los Gutiz Baseball",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
            {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/Chacalaca BBC FVD CENTRO .png", nombre:"Chacalaca BBC",
            jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
          {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/Latin Power Team FVD CENTRO .png", nombre:"Latinpower Team",
          jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
            {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VD  CENTRO/Gloriosos de Trujillo FVD CENTRO.png", nombre:"Los Gloriosos de Trujillo",
            jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""}] },
            {
              nombre: "Venedompro Oeste",
              esPaga: "true",
              logo: "../../../assets/LOGOS FANTASY EQUIPOS/LIGAS/LIGA FANTASY VENEDOMPRO OESTE.png",
              equipos: [{logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO OESTE/Los Estrada FVENEDOMPRO OESTE.png", nombre: "Los Estrada",
              jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"",paisDeResidencia:"", managerName:"Daniel Estrada" },
              { logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO OESTE/Paseo City FVENEDOMPRO OESTE.png", nombre: "Paseo City",
              jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""  },
                  { logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO OESTE/Mi Familia SBC  FVENEDOMPRO OESTE.png", nombre: "Mi Familia SBC",
                  jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"" },
                  { logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO OESTE/Los Pajaros Rojos FVENEDOMPRO OESTE.png", nombre: "Los Pájaros Rojos",
                  jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"" },
                  { logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO OESTE/Halp9779 FVENEDOMPRO OESTE.png", nombre: "Halp9779",
                  jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"" },
                  { logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO OESTE/Pesqueros de Sucre FVENEDOMPRO OESTE.png", nombre: "Pesqueros de Sucre",
                  jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"" },
                  { logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO OESTE/Los Triunfadores FVENEDOMPRO OESTE.png", nombre: "Los Triunfadores",
                  jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"" },
                  { logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO OESTE/The Black Bull FVENEDOMPRO OESTE.png", nombre: "The Black Bull",
                  jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"" }]},
            {
              nombre: "Venedompro Este",
              esPaga: "true",
              logo: "",
              equipos: [{logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Los Nuevos Mutantes FVENEDOMPRO ESTE.png", nombre: "Los Mutantes",
              jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"" },
               {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Roceros de Maracay FVENEDOMPRO ESTE.png", nombre:  "Ronceros de Maracay",
               jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"" },
                {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Los Monstrones FVENEDOMPRO ESTE.png", nombre:  "Los Monstrones",
                jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"" },
                 {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Padres FVENEDOMPRO ESTE.png", nombre:  "Padres",
                 jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"" },
                {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Diablos Rojos FVENEDOMPRO ESTE.png", nombre: "Diablos Rojos",
                jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"" },
                  {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Atelticos del Jarillo FVENEDOMPRO ESTE.png", nombre: "Atléticos Del Jarillo",
                  jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"" },
                {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/The Golden FVENEDOMPRO ESTE.png", nombre: "The Golden",
                jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"" },
                  {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Niño Team FVENEDOMPRO ESTE.png", nombre: "Niño Team",
                  jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"" },
                {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/The Nuñez team FVENEDOMPRO ESTE.png", nombre: "The Nuñez Team",
                jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"" },
                  {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Bombarderos del Tuy FVENEDOMPRO ESTE.png", nombre: "Bombarderos del Tuy",
                  jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"" },
                {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO ESTE/Tiburones de Miamai FVENEDOMPRO ESTE.png", nombre: "Tiburones de Miami",
                jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:"" }]},
            {
              nombre: " Venedompro Sur",
              esPaga: "true",
              logo: "",
              equipos: [{logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO SUR/Team Reales Primos FVENEDOMPRO SUR.png", nombre: "Team Reales Primos",
              jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
               {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO SUR/Isafit Team FVENEDOMPRO SUR.png", nombre:  "Isafit Team",
               jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
                {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO SUR/Team Madrid FVENEDOMPRO SUR.png", nombre:  "Team Madrid",
                jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
                  {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO SUR/Perros Locos FVENEDOMPRO SUR.png", nombre:  "Perros Locos",
                  jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
                {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO SUR/Miller Baseball Club FVENEDOMPRO SUR.png", nombre:  "Miller Baseball",
                jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
                  {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO SUR/San Mateo  MLB FVENEDOMPRO SUR.png", nombre:  "San Mateo MLB",
                  jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
                {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO SUR/Colorado Soy FVENEDOMPRO SUR.png", nombre:  "PanaBrothers",
                jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""},
                  {logo:"../../../assets/LOGOS FANTASY EQUIPOS/LIGA FANTASY VENEDOMPRO SUR/Los Orientales del Pilar FVENEDOMPRO SUR.png", nombre:  "Los Orientales del Pilar",
                  jugadores:[{id: "", nombre: "", posicion: "",  equipoFtsy: "", equipoMLB: "",  onActive:true, cantidad:20}], managerId:"CREAR",paisDeResidencia:"", managerName:""}]}

          ];

    console.log("Ligas", this.ligas);
    console.log("Dato(0)", this.ligas[0].equipos);
    console.log("Dato(0)", this.ligas[0].equipos[1].nombre);
    console.log("Dato(0)", this.ligas[4].equipos[0].managerId);


    this.isLoading = true;
  }
  }
