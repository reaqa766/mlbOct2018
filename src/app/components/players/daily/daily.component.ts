import { Component, OnInit } from '@angular/core';

import { DataPlayersService } from '../../../../services/data-players.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../../interfaces/players';

// tslint:disable-next-line:semicolon
import { PagerService } from '../../../../services/index'


@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {
  public players = [];
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
  dia = new Date();
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];


  playersList = [
    {name: 'Jose Altuve',
    position : 'segunda base'},

    {name : 'Gleyber Torres',
    position : 'segunda base'},

    {name : 'Ronald Acuña Jr.',
    position : 'Leftfield'},

    {name : 'Ender Inciarte',
    position : 'Centerfield'}
 ];

  isLoading: boolean;

  constructor(private playerService: DataPlayersService, private pagerService: PagerService) { }

  ngOnInit() {
    this.isLoading = true;
    // this.playerService.getPlayerDaily();
    this.getPlayersMap();
    // console.log('players', this.players);
  }


// Convertir el Array de Observables a un Array de Objetos.
// Seleccionar los items necesarios del nuevo Array (con todo el contenido del Json)
// y colocarlos en un nuevo Array
getPlayersMap() {
  const InfoObsPlayer = this.playerService.getAllPlayersDaily2();
  let index = 0;
  // tslint:disable-next-line:prefer-const
  for (let obs of InfoObsPlayer) {
    obs.pipe(take(1)).subscribe(res => {
      this.players.push(res);

      if ((InfoObsPlayer.length - 1) === index) {
        this.players = this.players.map(player => {
          const newPlayer: Players = {};
          Object.assign(newPlayer, player.people[0]);
          return newPlayer;
        })
        .sort(({fullName: a}, {fullName: b}) => {
          if (a > b) {
            return 1;
          } else if (a < b) {
            return -1;
          } else if (a === b) {
            return 0;
          }
        });
        this.isLoading = false;
        // console.log(JSON.stringify(this.players[0]));
          //  console.log('playersDaily', this.players);
      }
      index++;
    });
  }
    // set items to json response
    this.allItems = InfoObsPlayer;

    // initialize to page 1
    this.setPage(1);

  }

get filterPlayers() {

  return this.searchText ?

  this.players.filter(player =>
    player.stats[0].splits[0].team.name.toLowerCase().includes(this.searchText) ||
    (player.fullName && player.fullName.toLowerCase().includes(this.searchText)) ||
    (player.nickName && player.nickName.toLowerCase().includes(this.searchText))  ||
    player.mlbDebutDate.includes(this.searchText))


  : this.players;
  }
  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
