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
    { code: 1, name: 'Leones de Boston', liga: 'Norte', jugadores:[
      521692, 572228, 664040, 608070, 665487, 594807, 545361, 605141,  ] },
    { code: 2, name: 'Toros de Pedregal', liga: 'Norte', jugadores:[
      592663, 547989, 669374, 592518, 608369, 572041, 660670, 594777,     ] },
    { code: 3, name: 'las Vegas BBC', liga: 'Norte', jugadores:[
      596142,624413, 518934, 553993, 607208, 650391, 543807, 606192,    ] },
    { code: 4, name: 'La Familia', liga: 'Norte', jugadores:[
      518595,621566, 596059, 605119, 593428, 592696, 621439, 571976,     ] },
    { code: 5, name: 'Super Leones', liga: 'Norte', jugadores:[
      518735,518692, ] },
    { code: 6, name: 'Los Frailes', liga: 'Norte', jugadores:[
      669257, ] },
    { code: 7, name: 'The Bay', liga: 'Sur', jugadores:[
      575929, ] },
    { code: 8, name: 'The Lyons', liga: 'Sur', jugadores:[
      543510, ] },
    { code: 9, name: 'Robaseñas', liga: 'Sur', jugadores:[
      669221, ] },
    { code: 10, name: 'San Cristobal Rockies', liga: 'Sur', jugadores:[
      543592, ] },
    { code: 11, name: 'CPB Hercules', liga: 'Sur', jugadores:[
      543877, ] },
    { code: 12, name: 'Michis Club', liga: 'Sur', jugadores:[
      592200, ] },
    { code: 13, name: 'Yankeesvnzl', liga: 'Este', jugadores:[
      643376,] },
    { code: 14, name: 'Starxx', liga: 'Este', jugadores:[
      455117, ] },
    { code: 15, name: 'Los Estrada', liga: 'Este', jugadores:[
      521692,
    ] },
    { code: 16, name: 'Guatire soy', liga: 'Este', jugadores:[
      571466,] },
    { code: 17, name: 'Perfume de Feyalegria', liga: 'Este', jugadores:[
      608348, ] },
    { code: 18, name: 'Zamuros', liga: 'Este', jugadores:[
      467092, ] },
    { code: 19, name: 'The Black Cubs', liga: 'Oeste', jugadores:[
      467092, ] },
    { code: 20, name: 'Diablos Rojos', liga: 'Oeste', jugadores:[
      608348, ] },
    { code: 21, name: 'Bombarderos del Bronx', liga: 'Oeste', jugadores:[
      521692, ] },
    { code: 22, name: 'Tiburon121', liga: 'Oeste', jugadores:[
      543877, ] },
    { code: 23, name: 'Astros de Carabobo', liga: 'Oeste', jugadores:[
      669221, ] },
    { code: 24, name: 'Garate158', liga: 'Oeste', jugadores:[
      518595, ] }
  ];
  equipo_actual: any;
  players_definidos: any[];
  BBplayers: any[];
  buscando: boolean;


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
getPlayersMap() {
  this.players = [];
  this.allItems = [];
  this.setPage(1);
  const InfoObsPlayer = this.playerService.getAllPlayersDailyQuin();
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
        this.isLoading = false;
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
  

  }
  

  onSearchDate(fecha: { srcElement: { value: string; }; }) {
    // console.log("FECHA", fecha.srcElement.value);
    this.dia = fecha.srcElement.value;
    this.getPlayersMap();
}

onSearchChange(team: any) {
  this.buscando = false;
  if (team) {
    this.equipo_actual = team;
    this.allItems = this.players.filter((player: Players) =>
      (this.equipo_actual.jugadores as Array<number>).includes(player.id)
    );
      // this.setPage(this.pager.currentPage);

  } else {
    this.equipo_actual = undefined;
    this.allItems = this.players;
    // this.setPage(this.pager.currentPage);
  }
  return this.allItems;


}


  setPage(page: number) {

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}