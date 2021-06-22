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
      660670,592885,666969,668804,650644,641857,669257,605397,593428,493329,
      669432,518692,665489,607074,] },
    { code: 2, totalDiario:0, name: 'San Cristobal Rockies', liga: 'Norte', jugadores:[
      605141,457763,660271,571448,641313,554430,593160,
      656941,621566,641933,642547,641820,506433,571745, ] },
    { code: 3, totalDiario:0, name: 'La Familia', liga: 'Norte', jugadores:[
      657077,594798,608070,545341,607208,628711,570731,
      477132,543685,605400,646240,645277,571466,502110,] },
      // 545361,594798,596019,670541,608070,595943,607208,553993,
      // 502110,624424,521230,621242,641598,621111, ] },
    { code: 4, totalDiario:0, name: 'Los Quintereños', liga: 'Norte', jugadores:[
      665742,503556,521692,514888,408234,656669,543768,666200,640457,
      641154,547943,543135,570482,592518,] },
    { code: 5, totalDiario:0, name: 'Perfume Fe y Alegria', liga: 'Norte', jugadores:[
      425794,592663,519317,665487,571980,605483,502671,
      608337,665120,621043,621052,518934,457708,457759,] },
    { code: 6, totalDiario:0, name: 'The Lyons', liga: 'Norte', jugadores:[
      543037,545333,656775,624428,666182,621550,547989,
      488726,547973,575929,592206,592332,547180,595879, ] },
    { code: 7, totalDiario:0, name: 'Team Alcala', liga: 'Sur', jugadores:[
      500871,605400,656427,592206,669203,669374,663656,
      656775,670541,646240,668227,628317,593428,425877,  ] },
    { code: 8, totalDiario:0, name: 'Super Leones', liga: 'Sur', jugadores:[
      547180,596019,514888,547989,665742,608070,623352,
      650333,608385,669456,660271,621111,575929,554430, ] },
    { code: 9, totalDiario:0, name: 'Michis Club', liga: 'Sur', jugadores:[
      547973,477132,608324,665487,621043,650402,425844,
      543510,502110,456501,543685,605141,669242,665489, ] },
    { code: 10, totalDiario:0, name: 'Las Vegas', liga: 'Sur', jugadores:[
      608369,543037,592663,608336,445276,543760,502671, 
      592518,453286,645277,660670,596115,608337,607208,] },
    { code: 11, totalDiario:0, name: 'YankeesVzla', liga: 'Sur', jugadores:[
      605137,514917,446372,444482,544369,518792,542583,
      641658,592178,518516,596146,607192,467092,572020,                    ] },
    { code: 12, totalDiario:0, name: 'Zamuros', liga: 'Sur', jugadores:[
      592450,518692,594798,606213,657077,659275,640457,
      656302,595879,571448,521692,506433,641857,571970, ] },
    { code: 13, totalDiario:0, name: 'Los Frailes', liga: 'Este', jugadores:[
      624428,592332,543037,547943,641820, 
      547989,592178,608337,547180,543685,572287,443558,665487,592885,              ] },
    { code: 14, totalDiario:0, name: 'The Bay', liga: 'Este', jugadores:[
      592450,608324,605483,595879,621244,592663,457759,
      502110,453286,646240,545361,656555,596115,607644, ] },
    { code: 15, totalDiario:0, name: 'Robaseñas', liga: 'Este', jugadores:[
      592836,621043,519317,425877,621566,594798,514888,
      493329,571448,624413,660670,607074,606192,605540, ] },
    { code: 16, totalDiario:0, name: 'Toros de Pedregal', liga: 'Este', jugadores:[
      514917,477132,596019,608385,669203,592518,665742,
      592206,541645,660271,545333,665489,575929,506433, ] },
    { code: 17, totalDiario:0, name: 'KenGriffeyJr', liga: 'Este', jugadores:[
      677551,607208,642547,518735,641933,669432,554430,
      605141,656941,608070,621111,518692,666182,645277,  ] },
    { code: 18, totalDiario:0, name: 'Diablos Rojos', liga: 'Este', jugadores:[
      605400,628711,458681,657077,503556,518934,571976,
      670541,641355,571970,607192,571745,521692,570482, ] }
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
