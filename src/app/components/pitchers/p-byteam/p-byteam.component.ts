import { Component, OnInit } from '@angular/core';

import { PitchersService } from '../../../services/pitchers.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../../interfaces/players';

import { PagerService } from '../../../../services/index';



@Component({
  selector: 'app-p-byteam',
  templateUrl: './p-byteam.component.html',
  styleUrls: ['./p-byteam.component.css']
})
export class PByteamComponent implements OnInit {
  buscando = true;
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
  constructor(private playerService: PitchersService, private pagerService: PagerService) { }

  ngOnInit() {
    this.isLoading = true;
    this.getPlayersMap();
    // console.log('Pitchers', this.players);
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
          player.stats && player.stats.length !== 0 && player.stats[0].splits && player.stats[0].splits.length !== 0)
            // se ordenan por nombre
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


  onSearchChange(team) {
    this.buscando = false;
    console.log("equipo", team)

    if (team) {
      this.allItems = this.players.filter(player =>
        player.stats[0].splits[0].team.name.toLowerCase().includes(team.toLowerCase()) ||
        player.fullName.toLowerCase().includes(team.toLowerCase()));
      this.setPage(this.pager.currentPage);
    } else {
      this.allItems = this.players;
      this.setPage(this.pager.currentPage);
    }
    console.log("PITCHERSXEQUIPO", this.players)

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
