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
    { code: 147, name: 'Yankees', liga: 'Americana', division: 'este' },
    { code: 111, name: 'Boston', liga: 'Americana', division: 'este' },
    { code: 139, name: 'Tampa', liga: 'Americana', division: 'este' },
    { code: 110, name: 'Baltimore', liga: 'Americana', division: 'este' },
    { code: 141, name: 'Toronto', liga: 'Americana', division: 'este' }
  ];
  EQUIPOS2= [

    { code: 116, name: 'Detroit', liga: 'Americana', division: 'central' },
    { code: 114, name: 'Cleveland', liga: 'Americana', division: 'central' },
    { code: 142, name: 'Minnesota', liga: 'Americana', division: 'central' },
    { code: 118, name: 'Kansas', liga: 'Americana', division: 'central' },
    { code: 145, name: 'White Sox', liga: 'Americana', division: 'central' }
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

          if(player.stats && player.stats.length !== 0 && player.stats[0].splits && player.stats[0].splits.length !== 0){
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
        this.setPage(1);
        this.isLoading = false;
        // console.log('allItems', this.allItems);
        }
        index++;

    });
  }

  }

  onSearchDate(fecha) {
    // console.log("FECHA", fecha.srcElement.value);
    this.dia = fecha.srcElement.value;
    this.getPlayersMap();
}

  // onSearchChange() {
  //   if (this.searchText) {
  //     this.allItems = this.players.filter(player =>
  //       player.stats[0].splits[0].team.name.toLowerCase().includes(this.searchText) ||
  //       (player.fullName && player.fullName.toLowerCase().includes(this.searchText)) ||
  //       (player.nickName && player.nickName.toLowerCase().includes(this.searchText)));
  //       this.setPage(this.pager.currentPage);
  //     } else {
  //         this.allItems = this.players;
  //         this.setPage(this.pager.currentPage);

  //       }
  //       return this.allItems;

  //     }
  setPage(page: number) {

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}