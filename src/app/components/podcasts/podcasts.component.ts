import { Component, OnInit } from '@angular/core';

import { DominicanService } from '../../services/dominican.service';


// import { PlayersService } from '../../../services/players.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../interfaces/players';

import { PagerService } from '../../../services/index'


@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.css']
})
export class PodcastsComponent implements OnInit {


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

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];


  isLoading: boolean;
  jsonPlayers: string;

  constructor(private DPlayersService: DominicanService, private pagerService: PagerService) { }


  ngOnInit() {
    this.isLoading = true;
    this.getPlayersMap();
    // console.log('Players', this.players);



  }


  // Convertir   el Array de Observables a un Array de Objetos.
  // Seleccionar los items necesarios del nuevo Array (con todo el contenido del Json) y colocarlos en un nuevo Array
  getPlayersMap() {
    let InfoObsPlayer = this.DPlayersService.getAllDominicanPlayersActives();
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
          player.stats && player.stats.length !== 0 && player.primaryPosition.name !=='Pitcher' && player.stats[0].splits && player.stats[0].splits.length !== 0)

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
            // console.log(JSON.stringify(this.players),'VENEZUELAN');
            this.setPage(1);
          this.isLoading = false;
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


//   location: string;
//   num: string;


//   selectedImg;
//   imgs = [ {number: 1, url: '../../../../assets/EPISODIO1TalkBeisbol2daTemp2019.jpg'}, 
//   {number: 2, url: '../../../../assets/EPISODIO2TalkBeisbol2daTemp2019.jpg'},
//     {number: 3, url: '../../../../assets/EPISODIO3TalkBeisbol2daTemp2019.jpg'},
//     {number: 4,url: '../../../../assets/EPISODIO4TalkBeisbol2daTemp2019pqno.jpg'},
//     {number: 5,url: '../../../../assets/EPISODIO 5 Talk Beisbol 2da Temp. 2019.jpg'},
//     {number: 6,url: '../../../../assets/EP6TB2daT. 2019.jpg'},
//     {number: 7,url: '../../../../assets/EPISODIO 7 Talk Beisbol 2da Temp. 2019.jpg'},
//   ];


//   constructor() { }

//   ngOnInit() {
    
//   }
//   PodCast(i): void {
//     if (i === 1) 
//   {
//     this.num = 'PodCast1';
//   }
//     else if (i === 2) 
//   {
//     this.num = 'PodCast2D';
//   }
//     else if (i === 3) 
//   {
//     this.num = 'PodCast3D';
//   }
//     else if (i === 4) 
//   {
//     this.num = 'PodCast4D';
//   }
//   else if (i === 5) 
//   {
//     this.num = 'PodCast5D';
//   }
//   else if (i === 6) 
//   {
//     this.num = 'PodCast6D';
//   }
//   else if (i === 7) 
//   {
//     this.num = 'PodCast7D';
//   }
// }



  
  


//   urladdress(): void {
//     if (this.num === 'PodCast1') {
//       window.open('https://talkbeisbol.podbean.com/e/episodio-1-segunda-temporada/', '_blank');
//     } else if (this.num === 'PodCast2D') {
//       window.open('https://talkbeisbol.podbean.com/e/episodio-2-segunda-temporada/', '_blank');
//   } else if (this.num === 'PodCast3D') {
//     window.open('https://talkbeisbol.podbean.com/e/episodio-3-segunda-temporada-1558100751/', '_blank');
//   } else if (this.num === 'PodCast4D') {
//     window.open('https://talkbeisbol.podbean.com/e/episodio-4-segunda-temporada-1558659319/', '_blank');
//   } else if (this.num === 'PodCast5D') {
//     window.open('https://talkbeisbol.podbean.com/e/episodio-5-segunda-temporada-1559233360/', '_blank');
//   } else if (this.num === 'PodCast6D') {
//     window.open('https://talkbeisbol.podbean.com/e/episodio-6-2da-temporada/', '_blank');
//   } else if (this.num === 'PodCast7D') {
//     window.open('https://talkbeisbol.podbean.com/e/episodio-7-segunda-temporada-1560305309/', '_blank');

//   }
//   }

}
