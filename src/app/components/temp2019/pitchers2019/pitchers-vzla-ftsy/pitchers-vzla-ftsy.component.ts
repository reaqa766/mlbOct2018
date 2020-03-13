import { Component, OnInit } from '@angular/core';

import { PlayersService } from '../../../../../services/players.service';
import { PlayersfantasyService  } from '../../../../services/playersfantasy.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../../../interfaces/players';

import { PagerService } from '../../../../../services/index'




@Component({
  selector: 'app-pitchers-vzla-ftsy',
  templateUrl: './pitchers-vzla-ftsy.component.html',
  styleUrls: ['./pitchers-vzla-ftsy.component.css']
})
export class PitchersVzlaFtsyComponent implements OnInit {

  public players = [];
  groups: any;
  selectedGroup: any;
  elarray: any;
  datesN: number = 10;
  searchText: string;
  playerAuxList = [];
  counter: number;
  n: number;
  m: number;
  n1: number = 12;
  n10: number = 10;
  public allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];




  isLoading: boolean;

  constructor(private playerService: PlayersService, private pagerService: PagerService) { }


  ngOnInit() {
    this.isLoading = true;
    this.getPlayersMap();
    console.log("Jugadores", this.players)

  }


  // Convertir el Array de Observables a un Array de Objetos.
  // Seleccionar los items necesarios del nuevo Array (con todo el contenido del Json) y colocarlos en un nuevo Array
  getPlayersMap() {
    let InfoObsPlayer = this.playerService.getAllPlayersActives();
    // let InfoObsPlayer = this.playerService.getAllPlayersActives();
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
         // Se filtran los jugadores que no esten activos (no tienen stats ni splits)

         this.players = this.players.filter(player =>
          player.primaryPosition.name =='Pitcher' )

            // se ordenan por nombre
            .sort(({ lastName: a }, { lastName: b }) => {
              if (a > b) {
                return 1;
              } else if (a < b) {
                return -1;
              } else if (a === b) {
                return 0;
              }
            });
            this.allItems = this.players;
            this.setPage(1);
          this.isLoading = false;
          // console.log(JSON.stringify(this.players[0]));
        }
        index++;
      });
    }
    // set items to json response
    // this.allItems = InfoObsPlayer;

    // initialize to page 1
    // this.setPage(1);
    const playerstxt1 = this.players

  }


  onSearchChange() {
    if (this.searchText) {
      this.allItems = this.players.filter(player =>
        // player.stats[0].splits[0].team.name.toLowerCase().includes(this.searchText) ||
        (player.fullName && player.fullName.toLowerCase().includes(this.searchText)) ||
        (player.nickName && player.nickName.toLowerCase().includes(this.searchText)) ||
        (player.primaryPosition.abbreviation && player.primaryPosition.abbreviation.toLowerCase().includes(this.searchText)) ||
        (player.primaryPosition.name && player.primaryPosition.name.toLowerCase().includes(this.searchText)));
        this.setPage(this.pager.currentPage);
      } else {
          this.allItems = this.players;
          this.setPage(this.pager.currentPage);
        }
        return this.allItems;
      }
  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager2(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
