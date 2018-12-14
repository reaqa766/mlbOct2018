import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../../services/players.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../interfaces/players';
import { PagerService } from '../../../services/index';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-playerinfo',
  templateUrl: './playerinfo.component.html',
  styleUrls: ['./playerinfo.component.css']
})
export class PlayerinfoComponent implements OnInit { public players = [];
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

  private allItems: any[];
    // pager object
    pager: any = {};
    idplayer: any;
    jugador: any = {};

    // paged items
    pagedItems: any[];

    player = {};
    jugadores = {};




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





  constructor(private playerService: PlayersService, private pagerService: PagerService, private route: ActivatedRoute) { }


  ngOnInit() {
    // this.isLoading = true;
    this.getPlayersMap();
    this.route.params.subscribe( params =>{
      this.idplayer = params.id;
      console.log(this.idplayer);
      
    })
    console.log('items6', this.players );

    
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
          });

          for(let jugador of this.players) {
            if (jugador.id === this.idplayer) {
              console.log('items4', jugador.fullName);
              this.player = jugador;
              break;
            }
            console.log('items5', 1);
            console.log('items7', this.idplayer);

          }

      
          //   .sort(({ fullName: a }, { fullName: b }) => {
          //     if (a > b) {
          //       return 1;
          //     } else if (a < b) {
          //       return -1;
          //     } else if (a === b) {
          //       return 0;
          //     }
          //   });
          // this.allItems = this.players;

    // console.log(JSON.stringify(this.players), 'pbajson');
          // this.setPage(1);
          // this.isLoading = false;
        }
        index++;
      });
      
    }

  }

  // onSearchChange() {
  //   if (this.searchText) {
  //     this.allItems = this.players.filter(player =>
  //       player.stats[0].splits[0].team.name.toLowerCase().includes(this.searchText) ||
  //       (player.fullName && player.fullName.toLowerCase().includes(this.searchText)) ||
  //       (player.nickName && player.nickName.toLowerCase().includes(this.searchText))  ||
  //       player.mlbDebutDate.includes(this.searchText));
  //       this.setPage(this.pager.currentPage);
  //     } else {
  //         this.allItems = this.players;
  //         this.setPage(this.pager.currentPage);
  //       }
  //       return this.allItems;
  //     }

  // setPage(page: number) {
  //   this.pager = this.pagerService.getPager(this.allItems.length, page);

  //   this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  // }


}


