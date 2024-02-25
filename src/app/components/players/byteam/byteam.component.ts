import { Component, OnInit } from '@angular/core';

import { AllplayersService } from '../../../services/allplayers.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../../interfaces/players';

import { PagerService } from '../../../../services/index';

@Component({
  selector: 'app-byteam',
  templateUrl: './byteam.component.html',
  styleUrls: ['./byteam.component.css']
})
export class ByteamComponent implements OnInit {
  buscando = true;
  public players = [];
  groups: any;
  selectedGroup: any;
  elarray: any;
  datesN = 10;
  // searchText: string;
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
  answerDef = ' ';
  answer: Array<string> = [];
  // answer = ' ';
  respuesta_def: Array<boolean> = [];
  respuesta_dada: Array<boolean> = [];
  form_container = true;
  opcion = '0';
  selection = ' ';
  teamsAmE = [
    { code: 147, name: 'Yankees', liga: 'Americana', division: 'este' },
    { code: 111, name: 'Boston', liga: 'Americana', division: 'este' },
    { code: 139, name: 'Tampa', liga: 'Americana', division: 'este' },
    { code: 110, name: 'Baltimore', liga: 'Americana', division: 'este' },
    { code: 141, name: 'Toronto', liga: 'Americana', division: 'este' }
  ];

  teamsAmC = [

    { code: 116, name: 'Detroit', liga: 'Americana', division: 'central' },
    { code: 114, name: 'Cleveland', liga: 'Americana', division: 'central' },
    { code: 142, name: 'Minnesota', liga: 'Americana', division: 'central' },
    { code: 118, name: 'Kansas', liga: 'Americana', division: 'central' },
    { code: 145, name: 'White Sox', liga: 'Americana', division: 'central' }
  ];

  teamsAmO = [
    { code: 117, name: 'Astros', liga: 'Americana', division: 'oeste' },
    { code: 133, name: 'Oakland', liga: 'Americana', division: 'oeste' },
    { code: 108, name: 'Angels', liga: 'Americana', division: 'oeste' },
    { code: 136, name: 'Seattle', liga: 'Americana', division: 'oeste' },
    { code: 140, name: 'Texas', liga: 'Americana', division: 'oeste' }
  ];

  teamsNacE = [
    { code: 144, name: 'Atlanta', liga: 'Nacional', division: 'este' },
    { code: 143, name: 'Philadelphia', liga: 'Nacional', division: 'este' },
    { code: 120, name: 'Washington', liga: 'Nacional', division: 'este' },
    { code: 121, name: 'Mets', liga: 'Nacional', division: 'este' },
    { code: 146, name: 'Miami', liga: 'Nacional', division: 'este' }
  ];

  teamsNacC = [
    { code: 112, name: 'Cubs', liga: 'Nacional', division: 'central' },
    { code: 158, name: 'Milwaukee', liga: 'Nacional', division: 'central' },
    { code: 138, name: 'Louis', liga: 'Nacional', division: 'central' },
    { code: 134, name: 'Pittsburgh', liga: 'Nacional', division: 'central' },
    { code: 113, name: 'Cincinnati', liga: 'Nacional', division: 'central' }
  ];

  teamsNacO = [
    { code: 119, name: 'Dodgers', liga: 'Nacional', division: 'oeste' },
    { code: 115, name: 'Colorado', liga: 'Nacional', division: 'oeste' },
    { code: 109, name: 'Arizona', liga: 'Nacional', division: 'oeste' },
    { code: 137, name: 'San Francisco', liga: 'Nacional', division: 'oeste' },
    { code: 135, name: 'San Diego', liga: 'Nacional', division: 'oeste' }
  ];

  isLoading: boolean;
  position: any;




  // public searchText : string;
  // public playerData : any;

  constructor(private playerService: AllplayersService, private pagerService: PagerService) { }


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
            // player.active === true && player.stats[0].splits[0].team)
             player.stats && player.stats.length !== 0 && player.stats[0].splits && player.stats[0].splits.length !== 0)
            // se ordenan por nombre
            .sort((a, b) => {
              a = a.fullName;
              b = b.fullName;
              if (a > b) {

                return 1;
              } else if (a < b) {
                return -1;
              } else if (a === b) {
                return 0;
              }
            });
            // console.log("CARLOS", this.players.find(player => player.id === 471865));


          this.allItems = this.players;
          this.setPage(1);
          this.isLoading = false;
          // console.log("JUGADORES JSON 2:", JSON.stringify(this.allItems));
        }
        index++;
      });
    }

  }


  onSearchChange(team) {
    this.buscando = false;
    if (team) {
      this.allItems = this.players.filter(player =>
        player.stats[0].splits[0].team.name.toLowerCase().includes(team.toLowerCase()) ||
        player.fullName.toLowerCase().includes(team.toLowerCase()));
        console.log("JUGADORES JSON:", JSON.stringify(this.allItems));
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

  back_one_page() {
    this.buscando = true;
  }

}

