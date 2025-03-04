import { Component, OnInit } from '@angular/core';

import { AllplayersService } from '../../../../services/allplayers.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../../../interfaces/players';

import { PagerService } from '../../../../../services/index'

@Component({
  selector: 'app-novatos2020',
  templateUrl: './novatos2020.component.html',
  styleUrls: ['./novatos2020.component.css']
})
export class Novatos2020Component implements OnInit {

  public players = [];
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
  n10: number = 10;
  public allItems: any[];

  public fecha = new Date();
  public añoEnCurso = this.fecha.getFullYear();
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  date = new  Date ("2019-03-25");


  isLoading: boolean;
  jsonPlayers: string;
  playersNew: any[];

  constructor(private playerService: AllplayersService, private pagerService: PagerService) { }


  ngOnInit() {
    this.isLoading = true;
    // this.playerService.getPlayerDaily();
    this.getPlayersMap();
    console.log('player 20', this.players);
    // console.log('allItems', this.allItems);
    // console.log('año', this.añoEnCurso);
    // console.log(this.date);

    // console.log('FilterPlayers', this.filterPlayers);



  }


  // Convertir el Array de Observables a un Array de Objetos.
  // Seleccionar los items necesarios del nuevo Array (con todo el contenido del Json) y colocarlos en un nuevo Array
  getPlayersMap() {
    let InfoObsPlayer = this.playerService.getAllRookiesActives20();
    // let InfoObsPlayer = this.playerService.getAllPlayersActives();
    let index = 0;
    for (let obs of InfoObsPlayer) {
      obs.pipe(take(1)).subscribe(res => {
        this.players.push(res);
        // console.log('players', this.players);
        if ((InfoObsPlayer.length - 1) === index) {
          this.players = this.players.map(player => {
            const newPlayer: Players = {};
            Object.assign(newPlayer, player.people[0]);

            return newPlayer;
          });
         // Se filtran los jugadores que no esten activos (no tienen stats ni splits)

         this.players = this.players.filter(player =>
          (new Date(player.mlbDebutDate)) > this.date)

            // se ordenan por apellidos
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
          console.log("this.players", this.players);

        }
        index++;
      });
    }
    // set items to json response
    // this.allItems = InfoObsPlayer;

    // initialize to page 1
    // this.setPage(1);

    // console.log('players', this.players);
    const playerstxt1 = this.players

      }


  onSearchChange() {
    // console.log('search', this.searchText);

    if (this.searchText) {
      this.allItems = this.players.filter(player =>
        // player.stats[0].splits[0].team.name.toLowerCase().includes(this.searchText) ||
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
    // get pager object from service
    this.pager = this.pagerService.getPager2(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
