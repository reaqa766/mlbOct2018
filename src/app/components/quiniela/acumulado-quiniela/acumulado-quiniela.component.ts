import { Component, OnInit } from '@angular/core';

import { PlayersService } from '../../../../services/players.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../../interfaces/players';

import { PagerService } from '../../../../services/index';


@Component({
  selector: 'app-acumulado-quiniela',
  templateUrl: './acumulado-quiniela.component.html',
  styleUrls: ['./acumulado-quiniela.component.css']
})
export class AcumuladoQuinielaComponent implements OnInit {

  selectedImg;
  imgs = [ {number: 1, url: '../../../../assets/TABLA DE POSICIONES DIV NORTE.jpg'},
  {number: 2, url: '../../../../assets/TABLA DE POSICIONES DIV SUR.jpg'},
  {number: 2, url: '../../../../assets/TABLA DE POSICIONES DIV ESTE.jpg'},
  // {number: 2, url: '../../../../assets/TABLA SEMANAL DE RESULTADO SUR 1.jpg'},
  // {number: 2, url: '../../../../assets/TABLA SEMANAL DE RESULTADO SUR 2.jpg'},
  // {number: 2, url: '../../../../assets/TABLA SEMANAL DE RESULTADO SUR 3.jpg'},
  // {number: 2, url: '../../../../assets/TABLA SEMANAL DE RESULTADO ESTE 1.jpg'},
  // {number: 2, url: '../../../../assets/TABLA SEMANAL DE RESULTADO ESTE 2.jpg'},
  // {number: 2, url: '../../../../assets/TABLA SEMANAL DE RESULTADO ESTE 3.jpg'},
  ];

  constructor() { }

  ngOnInit() {
  }


  showMyImage(index) {
    this.selectedImg = this.imgs[index].url;
  }


}






  // ANTIGUO TS 30 MARZO 2021
//   public players = [];
//   public playersSort = [];
//   groups: any;
//   selectedGroup: any;
//   elarray: any;
//   datesN: number = 10;
//   searchText: string;
//   playerAuxList = [];
//   counter: number;
//   n: number;
//   m: number;
//   n1: number = 12;
//   n10: number = 5;

//   public allItems: any[];
//     pager: any = {};

//     pagedItems: any[];
//     jugadores: any[];

//   isLoading: boolean;





//   constructor(private playerService: PlayersService, private pagerService: PagerService) { }


//   ngOnInit() {
//     this.isLoading = true;
//     this.getPlayersMap();
//   }

//   getPlayersMap() {
//     let InfoObsPlayer = this.playerService.getAllPlayersActivesQ();
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
//           this.players = this.players.filter(player =>
//           player.stats && player.stats.length !== 0 && player.stats[0].splits && player.stats[0].splits.length !== 0)
//            .sort(({ fullName: a }, { fullName: b }) => {
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
//         (player.nickName && player.nickName.toLowerCase().includes(this.searchText)));
//         this.setPage(this.pager.currentPage);
//       } else {
//           this.allItems = this.players;
//           this.setPage(this.pager.currentPage);
//         }
//         return this.allItems;
//       }

//   setPage(page: number) {
//     this.pager = this.pagerService.getPager(this.allItems.length, page);

//     this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
//   }


// }
