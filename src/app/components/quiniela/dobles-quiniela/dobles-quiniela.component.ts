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
    { code: 1, name: 'Leones de Boston', liga: 'Norte', division: 'este' },
    { code: 2, name: 'Toros de Pedregal', liga: 'Norte', division: 'este' },
    { code: 3, name: 'las Vegas BBC', liga: 'Norte', division: 'este' },
    { code: 4, name: 'La Familia', liga: 'Norte', division: 'este' },
    { code: 5, name: 'Super Leones', liga: 'Norte', division: 'este' },
    { code: 6, name: 'Los Frailes', liga: 'Norte', division: 'este' }
  ];
  EQUIPOS2= [

    { code: 7, name: 'The Bay', liga: 'Sur', division: 'central' },
    { code: 8, name: 'The Lyons', liga: 'Sur', division: 'central' },
    { code: 9, name: 'Robaseñas', liga: 'Sur', division: 'central' },
    { code: 10, name: 'Hedgbogs', liga: 'Sur', division: 'central' },
    { code: 11, name: 'CPB Hercules', liga: 'Sur', division: 'central' },
    { code: 12, name: 'Michis Club', liga: 'Sur', division: 'central' }
  ];

  EQUIPOS3= [
    { code: 117, name: 'Astros', liga: 'Americana', division: 'oeste' },
    { code: 133, name: 'Oakland', liga: 'Americana', division: 'oeste' },
    { code: 108, name: 'Angels', liga: 'Americana', division: 'oeste' },
    { code: 136, name: 'Seattle', liga: 'Americana', division: 'oeste' },
    { code: 140, name: 'Texas', liga: 'Americana', division: 'oeste' }
  ];
  EQUIPOS4= [

    { code: 116, name: 'Detroit', liga: 'Americana', division: 'central' },
    { code: 114, name: 'Cleveland', liga: 'Americana', division: 'central' },
    { code: 142, name: 'Minnesota', liga: 'Americana', division: 'central' },
    { code: 118, name: 'Kansas', liga: 'Americana', division: 'central' },
    { code: 145, name: 'White Sox', liga: 'Americana', division: 'central' }
  ];
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
    this.allItems = this.players.filter(player =>
      player.stats[0].splits[0].equipo.name.toLowerCase().includes(team.toLowerCase()) ||
      player.fullName.toLowerCase().includes(team.toLowerCase()));
      // this.setPage(this.pager.currentPage);

  } else {
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