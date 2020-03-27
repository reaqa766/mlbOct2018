import { Component, OnInit } from '@angular/core';
import { Campeonato } from '../Interfaces/Campeonato';
import { Liga } from '../Interfaces/Liga';
import { Equipo } from '../Interfaces/Equipo';
import { Jugador } from '../Interfaces/Jugador';



// Para usar en el area de PLAYERS
import { PlayersFantasyService } from '../../services/players-fantasy.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../interfaces/players';

import { PagerService } from '../../../services/index'


// Para usar en el area de PLAYERS


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
      equipos: ["Los Estrada", "Paseo City", "Mi Familia SBC", "Los Pájaros Rojos", "Halp9779", "Pesqueros de Sucre", "Los Triunfadores", "The Black Bull"]
    },
    {
      nombre: "Venedompro Este",
      esPaga: "true",
      logo: "",
      equipos: ["Los Mutantes", "Ronceros de Maracay", "Los Monstrones", "Padres", "Diablos Rojos", "Atléticos Del Jarillo", "The Golden", "Niño Team", "The Nuñez Team", "Bombarderos del Tuy", "Tiburones de Miami"]
    },
    {
      nombre: " Venedompro Sur",
      esPaga: "true",
      logo: "",
      equipos: ["Team Reales Primos", "Isafit Team", "Team Madrid", "Perros Locos", "Sin Nombre", "San Mateo MLB", "PanaBrothers", "Los Orientales del Pilar"]
    },
    {
      nombre: "VDVzla",
      esPaga: "false",
      logo: "",
      equipos: ["Los Triunfadores", "Marineros de la Sabana", "Cats Miranda", "Azulejos", "Pikacho Bol", "The Block", "Los Juanchos", "Vikings of the Guaira", "Chapines"]
    },
    {
      nombre: " VD",
      esPaga: "false",
      logo: "",
      equipos: ["Guerreros del Centro B.B.C.", "The Chuchos", "Arepa Power", "Centinelas", "Ticodel", "Los Camellos de Falcón", "Estosellamabeisbol", "Aguizuela BBC", "Gringo23", "Team G. R. A."]
    },
    {
      nombre: "VDEste",
      esPaga: "false",
      logo: "",
      equipos: ["Los Monstrones", "Panteras BBC", "Indios de Barcelona", "Monster", "Brohter' Patriots", "Vengadores MLB", "Los Gigantes", "Los Chiclosos", "Noctambulos", "Los Dragones"]
    },
    {
      nombre: "VDOeste",
      esPaga: "false",
      logo: "",
      equipos: ["Niño Team", "Los Roba Señas de Cooperstpwn", "Hardwell Team", "Chapi Team", "Moneyball Inc.", "Perfume de Feyalegria", "The Walkers", "Navegantes del Este", "Los Bad Boys", "Los Macrofagos"]
    },
    {
      nombre: "VDNorte",
      esPaga: "false",
      logo: "",
      equipos: ["Alberto Monsalve Team", "Tucacas BBC", "Broncos", "Los Chonchis", "Leones del Valle", "Machique's Power", "OscarTeams", "Paredes Team", "Isotopos Team"]
    },
    {
      nombre: " VDSur",
      esPaga: "false",
      logo: "",
      equipos: ["El Cojedeño", "Delgados BBC", "Blue Sox", "D.Prada", "MLB en Santiago", "Pumas Vzla", "Delfines de Margarita", "Los Osos de Carabobo", "El Tarron Sport", "The Nuñez Team"]
    },
    {
      nombre: "VDCentro",
      esPaga: "false",
      logo: "",
      equipos: ["Bravos de Araure", "Anthony BBC", "Gatos de Maracaibo", "La Elegancia", "The Power Family", "Team Peque", "Los Gutiz Baseball", "Chacalaca BBC", "Latinpower Team", "Los Gloriosos de Trujillo"]
    }];

    // Para usar en el area de PLAYERS

    this.isLoading = true;
    this.getPlayersMap();
    console.log('Players', this.players);

    // Para usar en el area de PLAYERS

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
    this.equiposFiltrados = this.ligaSeleccionada.equipos;

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
        // console.log('players', this.players);
        if ((InfoObsPlayer.length - 1) === index) {
          this.players = this.players.map(player => {
            const newPlayer: Players = {};
            Object.assign(newPlayer, player.people[0]);
            return newPlayer;
          });

          // Se filtran los jugadores que no esten activos (no tienen stats ni splits)

          this.players = this.players.filter(player =>
            player.stats && player.stats.length !== 0 && player.primaryPosition.name !== 'Pitcher' && player.stats[0].splits && player.stats[0].splits.length !== 0)

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
          this.setPage(1);
          this.isLoading = false;
        }
        index++;
      });
    }
    // set items to json response
    // this.allItems = InfoObsPlayer;

    // initialize to page 1
    // this.setPage(1);

    // console.log('players', this.players);
    const playerstxt1 = this.players

  }


  onSearchChange() {
    // console.log('search', this.searchText);

    if (this.searchText) {
      this.allItems = this.players.filter(player =>
        player.stats[0].splits[0].team.name.toLowerCase().includes(this.searchText) ||
        (player.fullName && player.fullName.toLowerCase().includes(this.searchText)) ||
        (player.nickName && player.nickName.toLowerCase().includes(this.searchText)));
      this.setPage(this.pager.currentPage);
    } else {
      this.allItems = this.players;
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
    console.log( this.allItems);

    const foundPlayer = this.allItems.find(player => player.id == id);
    this.selectedPlayers.push(foundPlayer);
    // console.log("Jugador seleccionado", this.selectedPlayers);
    // console.log("ID", id);
  }

}

