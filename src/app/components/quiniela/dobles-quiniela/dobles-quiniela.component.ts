import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
import { DataPlayersService } from '../../../../services/data-players.service';

import { take } from 'rxjs/operators';
import { Players } from '../../../../interfaces/players';

import { PagerService } from '../../../../services/index'
@Component({
  selector: 'app-dobles-quiniela',
  templateUrl: './dobles-quiniela.component.html',
  styleUrls: ['./dobles-quiniela.component.css']
})
export class DoblesQuinielaComponent implements OnInit {
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
      605141,457763,660271,571448,641313,608566,593160,
      656941,621566,596115,642547,641820,669203,571745, ] },
    { code: 3, totalDiario:0, name: 'La Familia', liga: 'Norte', jugadores:[
      657077,594798,608070,545341,607208,628711,570731,
      477132,596019,605400,646240,645277,571466,502110,] },
      // 545361,594798,596019,670541,608070,595943,607208,553993,
      // 502110,624424,521230,621242,641598,621111, ] },
    { code: 4, totalDiario:0, name: 'Los Quintereños', liga: 'Norte', jugadores:[
      665742,503556,521692,514888,408234,656669,543768,666200,640457,
      641154,547943,543135,570482,592518,] },
    { code: 5, totalDiario:0, name: 'Perfume Fe y Alegria', liga: 'Norte', jugadores:[
      425794,592663,519317,665487,571980,605483,592450,
      608337,443558,621043,621052,518934,571970,457759,] },
    { code: 6, totalDiario:0, name: 'The Lyons', liga: 'Norte', jugadores:[
      543037,545333,543807,624428,666182,621550,547989,
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
      608369,521230,592663,608336,605400,543760,502671, 
      592518,453286,645277,660670,596115,545333,607208,] },
    { code: 11, totalDiario:0, name: 'YankeesVzla', liga: 'Sur', jugadores:[
      605137,514917,446372,444482,544369,518792,542583,
      641658,592178,518516,596146,607192,467092,572020,                    ] },
    { code: 12, totalDiario:0, name: 'Zamuros', liga: 'Sur', jugadores:[
      592450,518692,594798,606213,657077,659275,640457,
      656302,595879,571448,521692,506433,641857,663757, ] },
    { code: 13, totalDiario:0, name: 'Los Frailes', liga: 'Este', jugadores:[
      624428,592332,543037,547943,641820, 
      547989,592178,608337,547180,543685,572287,443558,665487,592885,              ] },
    { code: 14, totalDiario:0, name: 'The Bay', liga: 'Este', jugadores:[
      592450,608324,605483,595879,621244,592663,457759,
      502110,453286,646240,545361,656555,596115,607644, ] },
    { code: 15, totalDiario:0, name: 'Robaseñas', liga: 'Este', jugadores:[
      605540,621043,592662,425877,621566,594798,514888,
      493329,571448,542583,660670,665120,606192,450203, ] },
    { code: 16, totalDiario:0, name: 'Toros de Pedregal', liga: 'Este', jugadores:[
      514917,477132,596019,608385,669203,592518,665742,
      592206,668804,660271,545333,665489,575929,506433, ] },
    { code: 17, totalDiario:0, name: 'KenGriffeyJr', liga: 'Este', jugadores:[
      543294,607208,642547,518735,641933,669432,554430,
      605141,656941,608070,593428,518692,641857,645277,  ] },
    { code: 18, totalDiario:0, name: 'Diablos Rojos', liga: 'Este', jugadores:[
      605400,628711,458681,657077,503556,518934,571976,
      670541,641355,571970,607192,571745,521692,570482, ] }
  ];
  // EQUIPOS CON TODOS LOS CODIGOS
  // EQUIPOS = [
  //   { code: 1, totalDiario:0, name: 'Toros de Carabobo', liga: 'Norte', jugadores:[
  //     660670,518692,592885,608336,669456,514917,669257,592178,593428,622491,
  //     425844,605397,665489,666971,445276,664238,669242,593871,594777,622666,] },
  //   { code: 2, totalDiario:0, name: 'San Cristobal Rockies', liga: 'Norte', jugadores:[
  //     605141,596115,623352,660271,571448,453568,621566,506433,593160,592626,543272,596142,
  //     608566,571578,641313,518595,602074,517008,656941,519293,] },
  //   { code: 3, totalDiario:0, name: 'lLa Familia', liga: 'Norte', jugadores:[
  //     545361,594798,596019,641355,608070,453286,543685,621111,607208,477132,
  //     605400,553993,646240,645277,502110,656305,624424,521230,621242,641598,] },
  //   { code: 4, totalDiario:0, name: 'Los Quintereños', liga: 'Norte', jugadores:[
  //     665742,592518,624413,521692,514888,408234,650402,623993,666200,542303,
  //     641154,547943,673357,622694,665926,570482,543135,573262,516782,503556,] },
  //   { code: 5, totalDiario:0, name: 'Perfume Fe y Alegria', liga: 'Norte', jugadores:[
  //     665487,592663,518934,592450,457759,668227,605483,502671,443558,519317,
  //     607043,608337,571771,446372,457708,553902,425794,518626,650333,621043,] },
  //   { code: 6, totalDiario:0, name: 'The Lyons', liga: 'Norte', jugadores:[
  //     6543037,545333,547180,608369,547989,608324,575929,630105,543807,595879,
  //     624585,608331,544931,592206,541645,518735,519203,624415,547973,664023, ] },
  //   { code: 7, totalDiario:0, name: 'Team Alcala', liga: 'Sur', jugadores:[
  //     609275,605400,669203,622694,656427,592626,628317,669374,663656,458681,
  //     656305,621566,592206,646240,668227,544931,593428,425877,670541,  ] },
  //   { code: 8, totalDiario:0, name: 'Super Leones', liga: 'Sur', jugadores:[
  //     665926,547180,519242,596019,608566,547989,514888,608070,623352,665742,
  //     489446,650333,673357,545361,669456,660271,543243,621111,575929,518735, ] },
  //   { code: 9, totalDiario:0, name: 'Michis Club', liga: 'Sur', jugadores:[
  //     608324,543685,547973,621043,448801,477132,553993,665487,519317,650402,
  //     543510,502110,456501,408234,605141,516782,669242,665489,425844, ] },
  //   { code: 10, totalDiario:0, name: 'Las Vegas', liga: 'Sur', jugadores:[
  //     605400,608369,592885,543807,543037,592663,608336,445276,521230,608337,
  //     592518,543760,453286,645277,502671,624413,660670,607208,545333,596115,] },
  //   { code: 11, totalDiario:0, name: 'YankeesVzla', liga: 'Sur', jugadores:[
  //     605137,624415,514917,572816,446372,444482,544369,593423,518792,542583,
  //     605137,592178,518516,608331,596146,641154,607192,                     ] },
  //   { code: 12, totalDiario:0, name: 'Zamuros', liga: 'Sur', jugadores:[
  //     592450,657077,519203,605483,664040,453568,641355,659275,518934,518692,
  //     594798,595879,542303,571970,443558,571448,521692,571976,669257,506433, ] },
  //   { code: 13, totalDiario:0, name: 'Los Frailes', liga: 'Este', jugadores:[
  //     543685,664040,547180,624415,592885,543333,665487,543037,547943,630105,
  //     608336,547989,592178,608337,443558,571976,527038,518735,               ] },
  //   { code: 14, totalDiario:0, name: 'The Bay', liga: 'Este', jugadores:[
  //     543305,592450,608324,605483,595879,502110,621244,592663,457759,445276,
  //     622491,542303,453286,488726,545361,646240,656555,596115,467092,660162, ] },
  //   { code: 15, totalDiario:0, name: 'Robaseñas', liga: 'Este', jugadores:[
  //     547973,666182,621043,572971,553993,596142,519317,650402,594798,514888,
  //     621566,408234,592789,571448,502671,624413,668227,660670,516782,493329, ] },
  //   { code: 16, totalDiario:0, name: 'Toros de Pedregal', liga: 'Este', jugadores:[
  //     541645,514917,477132,596019,665742,628317,669374,606466,592518,573186,
  //     592206,546318,657656,660271,545333,645302,665489,575929,506433,425844, ] },
  //   { code: 17, totalDiario:0, name: 'KenGriffeyJr', liga: 'Este', jugadores:[
  //     605540,518692,656427,624585,608070,605137,623352,663656,673357,624424,
  //     605141,645277,669456,543243,641313,607208,621111,593160,669257,593428, ] },
  //   { code: 18, totalDiario:0, name: 'Diablos Rojos', liga: 'Este', jugadores:[
  //     605400,572041,657077,543272,641355,446372,608369,518934,543807,570482,
  //     666200,571771,458681,521230,503556,571970,647336,663611,521692,670541, ] }
  // ];
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
  const InfoObsPlayer = this.playerService.getAllPlayersDailyQuin(this.equipo_actual ? this.equipo_actual.jugadores : []);
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
      (player.stats[0].splits[player.indexStatDate].stat.caughtStealing * -1)+
      (player.stats[0].splits[player.indexStatDate].stat.strikeOuts * -1);
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