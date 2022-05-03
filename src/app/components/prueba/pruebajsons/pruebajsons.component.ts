import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DataPlayersService } from '../../../../services/data-players.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../../interfaces/players';

// tslint:disable-next-line:semicolon
import { PagerService } from '../../../../services/index'

// import { PlayersService } from '../../../../services/players.service';
// import { take } from 'rxjs/operators';
// import { Players } from '../../../../interfaces/players';

// import { PagerService } from '../../../../services/index';




@Component({
  selector: 'app-pruebajsons',
  templateUrl: './pruebajsons.component.html',
  styleUrls: ['./pruebajsons.component.css']
})
export class PruebajsonsComponent implements OnInit {

  public players = [];
  public playersSort = [];
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
  // dia = moment().format('YYYY-MM-DD');
  dia = moment().format('YYYY-MM-DD');
  // dia = new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate() - 1);
  public allItems: any[];
  gamePlays: string;

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  fechaHoy: Date;


  isLoading: boolean;

  constructor(private playerService: DataPlayersService, private pagerService: PagerService) { }

  ngOnInit() {
    // console.log('Jugadores', this.players);
    // console.log('dia', this.dia);
    this.isLoading = true;
    this.getPlayersMap();

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
        // console.log('Original players: ', this.players);
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
        .sort(({fullName: a}, {fullName: b}) => {
          if (a > b) {
            return 1;
          } else if (a < b) {
            return -1;
          } else if (a === b) {
            return 0;
          }

        });
        // console.log('This players final: ', this.players);



        this.allItems = this.players;
        this.setPage(1);
        this.isLoading = false;
        console.log('ALLITEMS', this.allItems);
        }
        index++;

    });
  }

  }

  onSearchDate(fecha) {
    // console.log("FECHA", fecha.srcElement.value);
    this.dia= fecha.srcElement.value;
    // this.dia= fecha.srcElement.value;
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

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length+1, page);
    // this.pager = this.pagerService.getPager(this.allItems.length, page);
    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}

















//   public players = [];
//   public playersSort = [];
//   groups: any;
//   selectedGroup: any;
//   elarray: any;
//   // tslint:disable-next-line:no-inferrable-types
//   datesN: number = 10;
//   searchText: string;
//   playerAuxList = [];
//   counter: number;
//   n: number;
//   m: number;
//   // tslint:disable-next-line:no-inferrable-types
//   n1: number = 12;
//   // tslint:disable-next-line:no-inferrable-types
//   n10: number = 5;

//   public allItems: any[];
//     // pager object
//     pager: any = {};

//     // paged items
//     pagedItems: any[];
//     jugadores: any[];

//   isLoading: boolean;





//   constructor(private playerService: PlayersService, private pagerService: PagerService) { }


//   ngOnInit() {
//     this.isLoading = true;
//     // this.playerService.getPlayerDaily();
//     this.getPlayersMap();
//     // console.log('allItems', this.allItems);
//     console.log('players', this.players);

//     // console.log('data', JSON.stringify(this.allItems));


//   }

//   // Convertir el Array de Observables a un Array de Objetos.
//   // Seleccionar los items necesarios del nuevo Array (con todo el contenido del Json) y colocarlos en un nuevo Array
//   getPlayersMap() {
//     let InfoObsPlayer = this.playerService.getAllPlayersActives();
//     let index = 0;
//     for (let obs of InfoObsPlayer) {
//       obs.pipe(take(1)).subscribe(res => {
//         this.players.push(res);

//         if ((InfoObsPlayer.length - 1) === index) {
//           this.players = this.players.map(player => {
//             const newPlayer: Players = {};
//             Object.assign(newPlayer, player.people[0]);
//             return newPlayer;
//           });
//           // Se filtran los jugadores que no esten activos (no tienen stats ni splits)
//           this.players = this.players.filter(player =>
//           player.stats && player.stats.length !== 0 && player.stats[0].splits && player.stats[0].splits.length !== 0)
//              // se ordenan por nombre
//             .sort(({ fullName: a }, { fullName: b }) => {
//               if (a > b) {
//                 return 1;
//               } else if (a < b) {
//                 return -1;
//               } else if (a === b) {
//                 return 0;
//               }
//             });
//           this.allItems = this.players;
//           this.jugadores = this.players;
//           // console.log('jugadores', JSON.stringify(this.jugadores));



//     // console.log(JSON.stringify(this.players), 'pbajson');
//           this.setPage(1);
//           this.isLoading = false;
//         }
//         index++;
//       });
//     }

//   }

//   onSearchChange() {
//     if (this.searchText) {
//       this.allItems = this.players.filter(player =>
//         player.stats[0].splits[0].team.name.toLowerCase().includes(this.searchText) ||
//         (player.fullName && player.fullName.toLowerCase().includes(this.searchText)) ||
//         (player.nickName && player.nickName.toLowerCase().includes(this.searchText))  ||
//         player.mlbDebutDate.includes(this.searchText));
//         this.setPage(this.pager.currentPage);
//       } else {
//           this.allItems = this.players;
//           this.setPage(this.pager.currentPage);
//         }
//         return this.allItems;
//       }

//   setPage(page: number) {
//     // get pager object from service
//     this.pager = this.pagerService.getPager(this.allItems.length, page);

//     // get current page of items
//     this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
//   }


// }
