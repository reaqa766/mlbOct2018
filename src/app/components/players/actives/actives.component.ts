import { Component, OnInit } from '@angular/core';

import { PlayersService } from '../../../../services/players.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../../interfaces/players';

import { PagerService } from '../../../../services/index';



@Component({
  selector: 'app-actives',
  templateUrl: './actives.component.html',
  styleUrls: ['./actives.component.css']
})
export class ActivesComponent implements OnInit {
  public players = [];
  public playersSort = [];
  groups: any;
  selectedGroup: any;
  elarray: any;
  // tslint:disable-next-line:no-inferrable-types
  datesN: number = 10;
  searchText: string;
  playerAuxList = [];
  counter: number;
  n: number;
  m: number;
  // tslint:disable-next-line:no-inferrable-types
  n1: number = 12;
  // tslint:disable-next-line:no-inferrable-types
  n10: number = 5;

  public allItems: any[];
    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];
    jugadores: any[];




  // playersList = [
  //   {name:"Jose Altuve",
  //   position : "segunda base"},

  //   {name : "Gleyber Torres",
  //   position : "segunda base"},

  //   {name : "Ronald Acuña Jr.",
  //   position : "Leftfield"},

  //   {name : "Ender Inciarte",
  //   position : "Centerfield"}

  // ]
  isLoading: boolean;





  constructor(private playerService: PlayersService, private pagerService: PagerService) { }


  ngOnInit() {
    this.isLoading = true;
    // this.playerService.getPlayerDaily();
    this.getPlayersMap();

  }

  // Convertir el Array de Observables a un Array de Objetos.
  // Seleccionar los items necesarios del nuevo Array (con todo el contenido del Json) y colocarlos en un nuevo Array
  getPlayersMap() {
    // tslint:disable-next-line:prefer-const
    let InfoObsPlayer = this.playerService.getAllPlayersActives();
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
            .sort(({ fullName: a }, { fullName: b }) => {
              if (a > b) {
                return 1;
              } else if (a < b) {
                return -1;
              } else if (a === b) {
                return 0;
              }
            });
          this.allItems = this.players;
          this.jugadores = this.players;
          console.log('jugadores', this.jugadores);



    // console.log(JSON.stringify(this.players), 'pbajson');
          this.setPage(1);
          this.isLoading = false;
        }
        index++;
      });
    }

  }

  onSearchChange() {
    if (this.searchText) {
      this.allItems = this.players.filter(player =>
        player.stats[0].splits[0].team.name.toLowerCase().includes(this.searchText) ||
        (player.fullName && player.fullName.toLowerCase().includes(this.searchText)) ||
        (player.nickName && player.nickName.toLowerCase().includes(this.searchText))  ||
        player.mlbDebutDate.includes(this.searchText));
        this.setPage(this.pager.currentPage);
      } else {
          this.allItems = this.players;
          this.setPage(this.pager.currentPage);
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
