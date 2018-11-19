import { Component, OnInit } from '@angular/core';

import { PlayersService } from '../../../../services/players.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../../interfaces/players';

import { PagerService } from '../../../../services/index';



@Component({
  selector: 'app-p-byteam',
  templateUrl: './p-byteam.component.html',
  styleUrls: ['./p-byteam.component.css']
})
export class PByteamComponent implements OnInit {
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

  private allItems: any[];
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];



  // playersList = [
  //   {
  //     name: "Jose Altuve",
  //     position: "segunda base"
  //   },

  //   {
  //     name: "Gleyber Torres",
  //     position: "segunda base"
  //   },

  //   {
  //     name: "Ronald Acuña Jr.",
  //     position: "Leftfield"
  //   },

  //   {
  //     name: "Ender Inciarte",
  //     position: "Centerfield"
  //   }

  // ]

  isLoading: boolean;




  // public searchText : string;
  // public playerData : any;

  constructor(private playerService: PlayersService, private pagerService: PagerService) { }


  ngOnInit() {
    this.isLoading = true;
    // this.playerService.getPlayerDaily();
    this.getPlayersMap();
    // console.log('players', this.players);
  }

  // Convertir el Array de Observables a un Array de Objetos.
  // Seleccionar los items necesarios del nuevo Array (con todo el contenido del Json) y colocarlos en un nuevo Array
  getPlayersMap() {
    const InfoObsPlayer = this.playerService.getAllPlayersActives();
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
            .sort((a, b) => {
              a = a.stats[0].splits[0].team.name;
              b = b.stats[0].splits[0].team.name;
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

  }


  onSearchChange() {
    if (this.searchText) {
      this.allItems = this.players.filter(player =>
        player.stats[0].splits[0].team.name.toLowerCase().includes(this.searchText) ||
        player.fullName.toLowerCase().includes(this.searchText));
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

