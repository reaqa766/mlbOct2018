import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
import { DataPlayersService } from '../../../../services/data-players.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../../interfaces/players';

// tslint:disable-next-line:semicolon
import { PagerService } from '../../../../services/index'

@Component({
  selector: 'app-hr-quiniela',
  templateUrl: './hr-quiniela.component.html',
  styleUrls: ['./hr-quiniela.component.css']
})
export class HrQuinielaComponent implements OnInit {

  public players = [];
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
  dia = moment().format('YYYY-MM-DD');
  public allItems: any[];
  gamePlays: string;

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  fechaHoy: Date;


  isLoading: boolean;

  EQUIPOS = [
    { code: 1, totalDiario:0, name: 'Toros de Carabobo', liga: 'Norte', jugadores:[
      660670,518692,571976,608336,669456,641857,669257,592178,593428,621121,
      425844,605397,665489,666971,] },
    { code: 2, totalDiario:0, name: 'San Cristobal Rockies', liga: 'Norte', jugadores:[
      605141,596115,660271,571448,641313,623352,593160,
      519293,621566,606213,668731,506433,621244,621439, ] },
    { code: 3, totalDiario:0, name: 'La Familia', liga: 'Norte', jugadores:[
      545361,594798,608070,624424,596019,614177,571466,
      477132,453343,502110,656305,645277,646240,453286,] },
      // 545361,594798,596019,670541,608070,595943,607208,553993,
      // 502110,624424,521230,621242,641598,621111, ] },
    { code: 4, totalDiario:0, name: 'Los Quintereños', liga: 'Norte', jugadores:[
      665742,624413,521692,503556,408234,650402,623993,666200,542303,
      641154,547943,543135,665926,592518,] },
    { code: 5, totalDiario:0, name: 'Perfume Fe y Alegria', liga: 'Norte', jugadores:[
      443558,592663,519317,665487,571980,605483,518626,
      608337,446372,607043,425794,457759,621043,571970,] },
    { code: 6, totalDiario:0, name: 'The Lyons', liga: 'Norte', jugadores:[
      543037,545333,547180,608369,666182,608324,547989,
      488726,608331,575929,592206,547973,519203,595879, ] },
    { code: 7, totalDiario:0, name: 'Team Alcala', liga: 'Sur', jugadores:[
      656305,605400,656427,592206,669203,669374,663656,
      621566,593934,646240,668227,544931,593428,425877,  ] },
    { code: 8, totalDiario:0, name: 'Super Leones', liga: 'Sur', jugadores:[
      547180,596019,518735,547989,608566,608070,623352,
      650333,545361,669456,660271,621111,575929,673357, ] },
    { code: 9, totalDiario:0, name: 'Michis Club', liga: 'Sur', jugadores:[
      547973,477132,608324,665487,621043,650402,425844,
      543510,502110,456501,408234,605141,516782,665489, ] },
    { code: 10, totalDiario:0, name: 'Las Vegas', liga: 'Sur', jugadores:[
      608369,543037,592663,608336,445276,543760,502671, 
      592518,453286,645277,660670,453286,596115,608337,] },
    { code: 11, totalDiario:0, name: 'YankeesVzla', liga: 'Sur', jugadores:[
      605137,514917,446372,444482,544369,518792,542583,
      605137,592178,518516,596146,607192,467092,572020,                    ] },
    { code: 12, totalDiario:0, name: 'Zamuros', liga: 'Sur', jugadores:[
      592450,443558,605483,606213,657077,641540,518934,
      594798,595879,571448,521692,506433,518692,571970, ] },
    { code: 13, totalDiario:0, name: 'Los Frailes', liga: 'Este', jugadores:[
      543333,624428,547180,543037,547943,665487,571976, 
      547989,607043,608337,650644,630105,518735,443558,              ] },
    { code: 14, totalDiario:0, name: 'The Bay', liga: 'Este', jugadores:[
      592450,608324,605483,595879,621244,592663,457759,
      502110,453286,488726,545361,656555,596115,445276, ] },
    { code: 15, totalDiario:0, name: 'Robaseñas', liga: 'Este', jugadores:[
      547973,621043,547942,425877,668227,594798,476704,
      621566,571448,493329,660670,605540,519317,502671, ] },
    { code: 16, totalDiario:0, name: 'Toros de Pedregal', liga: 'Este', jugadores:[
      514917,477132,596019,608385,669203,592518,606213,
      592206,657656,660271,545333,665489,575929,605397, ] },
    { code: 17, totalDiario:0, name: 'KenGriffeyJr', liga: 'Este', jugadores:[
      607208,543243,608070,518626,666182,518692,621439,
      605141,669456,593428,621111,645277,457763,623352,  ] },
    { code: 18, totalDiario:0, name: 'Diablos Rojos', liga: 'Este', jugadores:[
      605400,628711,458681,657077,608369,518934,571976,
      571771,503556,571970,607192,571745,521692,570482, ] }
  ];
  equipo_actual: any;
  players_definidos: any[];
  BBplayers: any[];
  buscando: boolean;
  playersP: any[];
  allItemsP: any[];


  constructor(private playerService: DataPlayersService, private pagerService: PagerService) { }

  ngOnInit() {
    // console.log('Jugadores', this.players);
    // console.log('dia', this.dia);


    this.isLoading = true;
    this.getPlayersMap();
  }


// Convertir el Array de Observables a un Array de Objetos.
// Seleccionar los items necesarios del nuevo Array (con todo el contenido del Json)
// y colocarlos en un nuevo Array
async getPlayersMap() {
  this.players = [];
  this.allItems = [];
  this.setPage(1);
  const InfoObsPlayer = this.playerService.getAllPlayersDailyQuinPitchers(this.equipo_actual ? this.equipo_actual.jugadores : []);
  let index = 0;
  await new Promise((resolve, reject) => {
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
          this.players = this.players.filter(player =>{
  
            // if(player.stats && player.stats.length !== 0 && player.stats[0].splits && player.stats[0].splits.length !== 0){
            if(player.stats && player.stats.length !== 0 && player.stats[0].splits && player.stats[0].splits.length !== 0 ){
              for(let i = 0; i < player.stats[0].splits.length; i++){
                if(player.stats[0].splits[i].date === this.dia){
                  player.indexStatDate = i;
                  return true;
                }
              }
              return false;
            }
          })
          // se ordenan por nombre
          .sort(({lastName: a}, {lastName: b}) => {
            if (a > b) {
              return 1;
            } else if (a < b) {
              return -1;
            } else if (a === b) {
              return 0;
            }
  
          });
          // console.log('This players final: ', this.players);
  
  
          this.allItems = this.players;
          this.BBplayers = this.players;
          this.setPage(1);
          resolve(true);
          // console.log('allItems', this.allItems);
  
          // this.BBplayers = this.BBplayers.filter(bbplayer =>{
  
          //   // if(player.stats && player.stats.length !== 0 && player.stats[0].splits && player.stats[0].splits.length !== 0){
          //   if(bbplayer.stats && bbplayer.stats.length !== 0 && bbplayer.stats[0].splits && bbplayer.stats[0].splits.length !== 0 ){
          //     for(let i = 0; i < bbplayer.stats[0].splits.length; i++){
          //       if(bbplayer.id === this.EQUIPOS) {
          //         bbplayer.indexStatCode = bbplayer.id;
          //         return true;
          //       }
          //     }
          //     return false;
          //   }
          // })
  
  
          }
          index++;
  
      });
    }

  });

  
  
  if (this.equipo_actual) {
    
    this.allItems = this.players.filter((player: Players) =>
    (this.equipo_actual.jugadores as Array<number>).includes(player.id)
    );

    this.equipo_actual.totalDiario = 0;
    for(let player of this.allItems) {
      const total = (player.stats[0].splits[player.indexStatDate].stat.wins * 3) +
      (player.stats[0].splits[player.indexStatDate].stat.losses * -2 ) +
      (player.stats[0].splits[player.indexStatDate].stat.saves * 2) + 
      (player.stats[0].splits[player.indexStatDate].stat.holds * 1 ) +
      (player.stats[0].splits[player.indexStatDate].stat.strikeOuts * 1)+
      (player.stats[0].splits[player.indexStatDate].stat.caughtStealing * 1) +
      (player.stats[0].splits[player.indexStatDate].stat.homeRuns * -1 )+
      (player.stats[0].splits[player.indexStatDate].stat.stolenBases * -1) +
      (player.stats[0].splits[player.indexStatDate].stat.baseOnBalls * -1);
      console.log(total);
      console.log('Jugadores', this.allItems);

      
      player.totalDiario = total;
      this.equipo_actual.totalDiario += player.totalDiario;
      
    }
      // this.setPage(this.pager.currentPage);

  } else {
    this.allItems = this.players;
    // this.setPage(this.pager.currentPage);
  }
  
  this.isLoading = false;
  this.buscando = false;
}
  

  onSearchDate(fecha: { srcElement: { value: string; }; }) {
    // console.log("FECHA", fecha.srcElement.value);
    this.dia = fecha.srcElement.value;
    this.getPlayersMap();
}

onSearchChange(team: any) {
  this.buscando = true;
  this.equipo_actual = team;
  this.getPlayersMap();


}


  setPage(page: number) {

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }



}











  // VIEJO TS 30 marzo 2021

//   public players = [];
//   public players2 = [];
//   public playersSort = [];
//   groups: any;
//   selectedGroup: any;
//   elarray: any;
//   datesN = 10;
//   searchText: string;
//   playerAuxList = [];
//   counter: number;
//   n: number;
//   m: number;
//   n1 = 12;
//   n10 = 5;
//   dia = new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate() - 1);
//   public allItems: any[];
//   public allItems2: any[];
//   gamePlays: string;

//   pager: any = {};

//   pagedItems: any[];
//   fechaHoy: Date;


//   isLoading: boolean;

//   constructor(private playerService: DataPlayersService,  private pagerService: PagerService) { }

//   ngOnInit() {
//     this.isLoading = true;
//     this.getPlayersMap();
//   }

// getPlayersMap() {
//   this.players = [];
//   this.allItems = [];
//   this.setPage(1);
//   const InfoObsPlayer = this.playerService.getAllPlayersDailyQExtra();
//   let index = 0;
//   for (let obs of InfoObsPlayer) {
//     obs.pipe(take(1)).subscribe(res => {
//       this.players.push(res);

//       if ((InfoObsPlayer.length - 1) === index) {

//         this.players = this.players.map(player => {
//           const newPlayer: Players = {};
//           Object.assign(newPlayer, player.people[0]);
//           return newPlayer;
//         });
//         this.players = this.players.filter(player =>{
//           if(player.stats && player.stats.length !== 0 && player.stats[0].splits && player.stats[0].splits.length !== 0){
//             for(let i = 0; i < player.stats[0].splits.length; i++){
//               if( player.stats[0].splits[i].stat!== 0 && player.stats[0].splits[i].date === this.dia){
//                 player.indexStatDate = i;
//                 return true;
//               }
//             }
//             return false;
//           }
//         })
//         .sort(({fullName: a}, {fullName: b}) => {
//           if (a > b) {
//             return 1;
//           } else if (a < b) {
//             return -1;
//           } else if (a === b) {
//             return 0;
//           }

//         });



//         this.allItems = this.players;
//         this.setPage(1);
//         this.isLoading = false;
//         }
//         index++;

//     });
//   }

//   }

//   onSearchDate(fecha) {
//     this.dia= fecha.srcElement.value;
//     this.getPlayersMap();
// }

//   onSearchChange() {
//     if (this.searchText) {
//       this.allItems = this.players.filter(player =>
//         player.stats[0].splits[0].team.name.toLowerCase().includes(this.searchText) ||
//         (player.fullName && player.fullName.toLowerCase().includes(this.searchText)) ||
//         (player.nickName && player.nickName.toLowerCase().includes(this.searchText)));
//         this.setPage(this.pager.currentPage);
//       } else {
//           this.allItems = this.players;
//           this.setPage(this.pager.currentPage);

//         }
//         return this.allItems;

//       }
//   setPage(page: number) {

//     this.pager = this.pagerService.getPager(this.allItems.length, page);

//     this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
//   }

// }
