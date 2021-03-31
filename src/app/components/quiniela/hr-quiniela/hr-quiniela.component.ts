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
      660670,518692,592885,608336,669456,514917,669257,592178,593428,622491,
      425844,605397,665489,666971,445276,664238,669242,593871,594777,622666,] },
    { code: 2, totalDiario:0, name: 'San Cristobal Rockies', liga: 'Norte', jugadores:[
      605141,596115,623352,660271,571448,453568,621566,506433,593160,592626,543272,596142,
      608566,571578,641313,518595,602074,517008,656941,519293,] },
    { code: 3, totalDiario:0, name: 'lLa Familia', liga: 'Norte', jugadores:[
      545361,594798,596019,641355,608070,453286,543685,621111,607208,477132,
      605400,553993,646240,645277,502110,656305,624424,521230,621242,641598,] },
    { code: 4, totalDiario:0, name: 'Los Quintereños', liga: 'Norte', jugadores:[
      665742,592518,624413,521692,514888,408234,650402,623993,666200,542303,
      641154,547943,673357,622694,665926,570482,543135,573262,516782,503556,] },
    { code: 5, totalDiario:0, name: 'Perfume Fe y Alegria', liga: 'Norte', jugadores:[
      665487,592663,518934,592450,457759,668227,605483,502671,443558,519317,
      607043,608337,571771,446372,457708,553902,425794,518626,650333,621043,] },
    { code: 6, totalDiario:0, name: 'The Lyons', liga: 'Norte', jugadores:[
      6543037,545333,547180,608369,547989,608324,575929,630105,543807,595879,
      624585,608331,544931,592206,541645,518735,519203,624415,547973,664023, ] },
    { code: 7, totalDiario:0, name: 'Team Alcala', liga: 'Sur', jugadores:[
      609275,605400,669203,622694,656427,592626,628317,669374,663656,458681,
      656305,621566,592206,646240,668227,544931,593428,425877,670541,  ] },
    { code: 8, totalDiario:0, name: 'Super Leones', liga: 'Sur', jugadores:[
      665926,547180,519242,596019,608566,547989,514888,608070,623352,665742,
      489446,650333,673357,545361,669456,660271,543243,621111,575929,518735, ] },
    { code: 9, totalDiario:0, name: 'Michis Club', liga: 'Sur', jugadores:[
      608324,543685,547973,621043,448801,477132,553993,665487,519317,650402,
      543510,502110,456501,408234,605141,516782,669242,665489,425844, ] },
    { code: 10, totalDiario:0, name: 'Las Vegas', liga: 'Sur', jugadores:[
      605400,608369,592885,543807,543037,592663,608336,445276,521230,608337,
      592518,543760,453286,645277,502671,624413,660670,607208,545333,596115,] },
    { code: 11, totalDiario:0, name: 'YankeesVzla', liga: 'Sur', jugadores:[
      605137,624415,514917,572816,446372,444482,544369,593423,518792,542583,
      605137,592178,518516,608331,596146,641154,607192,                     ] },
    { code: 12, totalDiario:0, name: 'Zamuros', liga: 'Sur', jugadores:[
      592450,657077,519203,605483,664040,453568,641355,659275,518934,518692,
      594798,595879,542303,571970,443558,571448,521692,571976,669257,506433, ] },
    { code: 13, totalDiario:0, name: 'Los Frailes', liga: 'Este', jugadores:[
      543685,664040,547180,624415,592885,543333,665487,543037,547943,630105,
      608336,547989,592178,608337,443558,571976,527038,518735,               ] },
    { code: 14, totalDiario:0, name: 'The Bay', liga: 'Este', jugadores:[
      543305,592450,608324,605483,595879,502110,621244,592663,457759,445276,
      622491,542303,453286,488726,545361,646240,656555,596115,467092,660162, ] },
    { code: 15, totalDiario:0, name: 'Robaseñas', liga: 'Este', jugadores:[
      547973,666182,621043,572971,553993,596142,519317,650402,594798,514888,
      621566,408234,592789,571448,502671,624413,668227,660670,516782,493329, ] },
    { code: 16, totalDiario:0, name: 'Toros de Pedregal', liga: 'Este', jugadores:[
      541645,514917,477132,596019,665742,628317,669374,606466,592518,573186,
      592206,546318,657656,660271,545333,645302,665489,575929,506433,425844, ] },
    { code: 17, totalDiario:0, name: 'KenGriffeyJr', liga: 'Este', jugadores:[
      605540,518692,656427,624585,608070,605137,623352,663656,673357,624424,
      605141,645277,669456,543243,641313,607208,621111,593160,669257,593428, ] },
    { code: 18, totalDiario:0, name: 'Diablos Rojos', liga: 'Este', jugadores:[
      605400,572041,657077,543272,641355,446372,608369,518934,543807,570482,
      666200,571771,458681,521230,503556,571970,647336,663611,521692,670541, ] }
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
      const total = (player.stats[0].splits[player.indexStatDate].stat.hits * 1) +
      (player.stats[0].splits[player.indexStatDate].stat.doubles * 2 ) +
      (player.stats[0].splits[player.indexStatDate].stat.triples * 3) + 
      (player.stats[0].splits[player.indexStatDate].stat.homeRuns * 4 ) +
      (player.stats[0].splits[player.indexStatDate].stat.runs * 1)+
      (player.stats[0].splits[player.indexStatDate].stat.rbi * 2) +
      (player.stats[0].splits[player.indexStatDate].stat.baseOnBalls * 1 )+
      (player.stats[0].splits[player.indexStatDate].stat.stolenBases * 1) +
      (player.stats[0].splits[player.indexStatDate].stat.stolenBases * -1);
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
