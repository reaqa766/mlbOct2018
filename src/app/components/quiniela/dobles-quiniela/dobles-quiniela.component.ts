import { Component, OnInit } from '@angular/core';

// import { PlayersService } from '../../../../services/players.service';
import { HttpClient } from '@angular/common/http';

import * as moment from 'moment';
import { DataPlayersService } from '../../../../services/data-players.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../../interfaces/players';

// tslint:disable-next-line:semicolon
import { PagerService } from '../../../../services/index'
@Component({
  selector: 'app-dobles-quiniela',
  templateUrl: './dobles-quiniela.component.html',
  styleUrls: ['./dobles-quiniela.component.css']
})
export class DoblesQuinielaComponent implements OnInit {
  data: any;
  lider_avg: any;
  row: any;
  estadistica = [true, false, false, false, false, false, false, false];
  

  public players = [];
  public players2 = [];
  public playersSort = [];
  groups: any;
  selectedGroup: any;
  elarray: any;
  datesN = 10;
  searchText: string;
  playerAuxList = [];
  counter: number;
  n: number;
  m: number;
  n1 = 12;
  n10 = 5;
  dia = new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate() - 1);
  public allItems: any[];
  public allItems2: any[];
  gamePlays: string;

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  fechaHoy: Date;


  isLoading: boolean;

  jugadores: any;
  avg: any = [];
  filtrado: any;
  venezolanosActivos: any;
  CALEND2: any;
  CALEND3: any;
  teamPlays: any;

  _url = 'https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&season=2020&standingsTypes=regularSeason';
  _url1 = 'https://statsapi.mlb.com/api/v1/schedule?sportId=1,51&date=2020-04-14&gameTypes=E,S,R,A,F,D,L,W&hydrate=team(linescore(matchup,runners))&useLatestGames=false&language=en&leagueId=103,104,420';
  players1: any[];
  allItems1: any[];
  jugadores1: any[];

 teams:any=['Yankeesvnzl', 'MichisClub','Robaseñas','The Lyons ' ]



  // constructor(private playerService: PlayersService,  private pagerService: PagerService,  private http: HttpClient) { }

  constructor(private playerService: DataPlayersService,  private pagerService: PagerService) { }

  ngOnInit() {
    this.isLoading = true;
    this.getPlayersMap();
    console.log('JUGADORES',  this.players);

  }

// Convertir el Array de Observables a un Array de Objetos.
// Seleccionar los items necesarios del nuevo Array (con todo el contenido del Json)
// y colocarlos en un nuevo Array
getPlayersMap() {
  this.players = [];
  this.allItems = [];
  this.setPage(1);
  let InfoObsPlayer = this.playerService.getAllPlayersDailyQExtra();
  let index = 0;
  for (let obs of InfoObsPlayer) {
    obs.pipe(take(1)).subscribe(res => {
      this.players.push(res);

      if ((InfoObsPlayer.length - 1) === index) {

        this.players = this.players.map(player => {
          const newPlayer: Players = {};
          Object.assign(newPlayer, player.people[0]);
          return newPlayer;
        });
        // console.log('Original players: ', this.players);
        // Se filtran los jugadores que no esten activos (no tienen stats ni splits)
        
        this.players = this.players.filter(player =>
          player.stats && player.stats.length !== 0 && player.stats[0].splits && player.stats[0].splits.length !== 0)

        
        
        
        
        // this.players = this.players.filter(player =>{
        //   if(player.stats && player.stats.length !== 0 && player.stats[0].splits && player.stats[0].splits.length !== 0){
        //     for(let i = 0; i < player.stats[0].splits.length; i++){
        //       if( player.stats[0].splits[i].stat.hits!== 0 && player.stats[0].splits[i].date === this.dia){
        //         player.indexStatDate = i;
        //         return true;
        //       }
        //     }
        //     return false;
        //   }
        // })
        // se ordenan por nombre
        .sort(({fullName: a}, {fullName: b}) => {
          if (a > b) {
            return 1;
          } else if (a < b) {
            return -1;
          } else if (a === b) {
            return 0;
          }
          // console.log('This players final: ', this.players);

        });



        this.allItems = this.players;

        this.jugadores = this.players;


        this.setPage(1);
        this.isLoading = false;
        console.log('players', this.players);
        }
        index++;

    });
  }

  }


  onSearchDate(fecha) {
    // console.log("FECHA", fecha.srcElement.value);
    this.dia= fecha.srcElement.value;
    // this.dia= fecha.srcElement.value;
    this.getPlayersMap()}

  onSearchChange() {
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
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }



  filtroTopCinco(estadistica: string) {
    let filtrado = [];

    filtrado = this.jugadores.filter(
      jugador => jugador.stats && jugador.stats[0].splits
    ).
    sort((jugadorA, jugadorB) => {

      const a = Number(jugadorA.stats[0].splits[0].stat[estadistica]);
      const b = Number(jugadorB.stats[0].splits[0].stat[estadistica]);
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else if (a === b) {
        return 0;
      }
    })
    // Se acaba el sort por la estadistica deseada => se retorna un array
    .slice(0, 20);
    // console.log('filtrado', filtrado);

    return filtrado;

  }

  filtroTopCincoAvg(estadistica: string) {
    let filtrado = [];

    filtrado = this.jugadores.filter(
      jugador => jugador.stats && jugador.stats[0].splits &&  jugador.stats[0].splits[0].stat.atBats >= (1)
      // jugador => jugador.stats && jugador.stats[0].splits &&  jugador.stats[0].splits[0].stat.atBats >= (162*3.1)
      // jugador => jugador.stats && jugador.stats[0].splits &&  jugador.stats[0].splits[0].stat.atBats >= (this.teamPlays.record * 3.1)
    ).
    sort((jugadorA, jugadorB) => {

      const a = Number(jugadorA.stats[0].splits[0].stat[estadistica]);
      const b = Number(jugadorB.stats[0].splits[0].stat[estadistica]);
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else if (a === b) {
        return 0;
      }
    })
    // Se acaba el sort por la estadistica deseada => se retorna un array
    .slice(0, 20);
    // console.log('filtrado', filtrado);

    return filtrado;

  }


  // setPage(page: number) {
  //   // get pager object from service
  //   this.pager = this.pagerService.getPager(this.allItems.length, page);

  //   // get current page of items
  //   this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  // }

  avgClick(x) {

    for (let i=0; i<this.estadistica.length; i++) {
      if (x === i) {
        this.estadistica[i] = true;
  
      } else {
        this.estadistica[i] = false;
  
  
      }
  
    }
  }
  


}
