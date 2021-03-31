import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
import { DataPitchersService } from '../../../../services/data-pitchers.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../../interfaces/players';

// tslint:disable-next-line:semicolon
import { PagerService } from '../../../../services/index'


@Component({
  selector: 'app-p-daily',
  templateUrl: './p-daily.component.html',
  styleUrls: ['./p-daily.component.css']
})
export class PDailyComponent implements OnInit {
  public players = [];
  public playersSort = [];
  groups: any;
  selectedGroup: any;
  elarray: any;
  datesN = 10;
  searchText: any = '';
  playerAuxList = [];
  counter: number;
  n: number;
  m: number;
  n1 = 12;
  n10 = 5;
  dia = moment().format('YYYY-MM-DD');
  diaAnt = moment().format('YYYY-MM-DD');
  diaAnte = moment(this.diaAnt).subtract(1, 'day').format('YYYY-MM-DD')
  public allItems: any[];
  noGameToday : any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];



  isLoading: boolean;
  playersFiltrado: {}[];

  constructor(private playerService: DataPitchersService, private pagerService: PagerService) { }

  ngOnInit() {
    this.isLoading = true;
    this.getPlayersMap();
    // console.log('players', this.players);
    // console.log('diaAnterior', this.diaAnt);
    // console.log('playersNoPlay', this.noGameToday);


  }


// Convertir el Array de Observables a un Array de Objetos.
// Seleccionar los items necesarios del nuevo Array (con todo el contenido del Json)
// y colocarlos en un nuevo Array
getPlayersMap() {
  this.players = [];
  this.allItems = [];
  this.setPage(1);
  const InfoObsPlayer = this.playerService.getAllPlayersDaily2();
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
        // this.noGameToday = this.players.filter(player =>
        //   player.stats[0].splits[player.stats[0].splits.length-2].date);

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
        // .filter(player =>  player.stats[0].splits[player.stats[0].splits.length-1].date === '2018-09-30') ;
        // this.playersFiltrado = this.players.filter(
        //   players => this.players.stats && this.players.stats[0].splits
        // );
        // this.playersFiltrado = this.players.filter(player => player.stats && player.stats[0].splits
        // );

        this.allItems = this.players;
        this.setPage(1);
        this.isLoading = false;
        console.log('allItems', this.allItems);

        }
        index++;
      });
    }

  }

  onSearchDate(fecha) {
    // console.log(fecha.srcElement.value);
    this.dia = fecha.srcElement.value;
    this.getPlayersMap();
}


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
    // console.log('Changing to page '+page);

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
