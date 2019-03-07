import { Component, OnInit } from '@angular/core';

import { PlayersService } from '../../../../services/players.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../../interfaces/players';

import { PagerService } from '../../../../services/index';

@Component({
  selector: 'app-byteam',
  templateUrl: './byteam.component.html',
  styleUrls: ['./byteam.component.css']
})
export class ByteamComponent implements OnInit {
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

  public allItems: any[];
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];



  // text_11 = true;
  // text_22 = true;s
  answerDef = ' ' ;
  answer: Array<string> =  [];
  // answer = ' ';
  respuesta_def: Array<boolean> = [];
  respuesta_dada: Array<boolean> = [];
  form_container = true;
  opcion = '0' ;
  selection = ' ' ;
  teamsAmE = [
  {code: 147, equipo: 'Yankees', liga: 'Americana', division: 'este'},
  {code: 111, equipo: 'Boston', liga: 'Americana', division: 'este'},
  {code: 139, equipo: 'Tampa', liga: 'Americana', division: 'este'},
  {code: 110, equipo: 'Baltimore', liga: 'Americana', division: 'este'},
  {code: 141, equipo: 'Toronto', liga: 'Americana', division: 'este'}
];

teamsAmC = [

  {code: 116, equipo: 'Detroit', liga: 'Americana', division: 'central'},
  {code: 114, equipo: 'Cleveland', liga: 'Americana', division: 'central'},
  {code: 142, equipo: 'Minnesota', liga: 'Americana', division: 'central'},
  {code: 118, equipo: 'Kansas', liga: 'Americana', division: 'central'},
  {code: 145, equipo: 'ChicagoW', liga: 'Americana', division: 'central'}
];

teamsAmO = [
  {code: 117, equipo: 'Houston', liga: 'Americana', division: 'oeste'},
  {code: 133, equipo: 'Oakland', liga: 'Americana', division: 'oeste'},
  {code: 108, equipo: 'Angels', liga: 'Americana', division: 'oeste'},
  {code: 136, equipo: 'Seattle', liga: 'Americana', division: 'oeste'},
  {code: 140, equipo: 'Texas', liga: 'Americana', division: 'oeste'}
];

teamsNacE = [
  {code: 144, equipo: 'Atlanta', liga: 'Nacional', division: 'este'},
  {code: 143, equipo: 'Philadelphia', liga: 'Nacional', division: 'este'},
  {code: 120, equipo: 'Washington', liga: 'Nacional', division: 'este'},
  {code: 121, equipo: 'Mets', liga: 'Nacional', division: 'este'},
  {code: 146, equipo: 'Miami', liga: 'Nacional', division: 'este'}
];

teamsNacC = [
  {code: 112, equipo: 'ChicagoC', liga: 'Nacional', division: 'central'},
  {code: 158, equipo: 'Milwakee', liga: 'Nacional', division: 'central'},
  {code: 138, equipo: 'SaintL', liga: 'Nacional', division: 'central'},
  {code: 134, equipo: 'Pittsburgh', liga: 'Nacional', division: 'central'},
  {code: 113, equipo: 'Cincinati', liga: 'Nacional', division: 'central'}
];

teamsNacO = [
  {code: 119, equipo: 'Dodgers', liga: 'Nacional', division: 'oeste'},
  {code: 115, equipo: 'Colorado', liga: 'Nacional', division: 'oeste'},
  {code: 109, equipo: 'Arizona', liga: 'Nacional', division: 'oeste'},
  {code: 137, equipo: 'SanFrancisco', liga: 'Nacional', division: 'oeste'},
  {code: 135, equipo: 'SanDiego', liga: 'Nacional', division: 'oeste'}
];

  isLoading: boolean;




  // public searchText : string;
  // public playerData : any;

  constructor(private playerService: PlayersService, private pagerService: PagerService) { }


  ngOnInit() {

    console.log('AllItems', this.allItems );

    this.isLoading = true;
    // this.playerService.getPlayerDaily();
    this.getPlayersMap();
    console.log('players', this.players);
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

