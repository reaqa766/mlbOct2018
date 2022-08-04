import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
import { DataPlayersService } from '../../../services/data-players.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../interfaces/players';

// tslint:disable-next-line:semicolon
import { PagerService } from '../../../services/index'

// import * as moment from 'moment';
// import { DataPlayersService } from '../../../services/data-players.service';
// import { take } from 'rxjs/operators';
// import { Players } from '../../../interfaces/players';

// import { PagerService } from '../../../services/index'


@Component({
  selector: 'app-pruebas2019',
  templateUrl: './pruebas2019.component.html',
  styleUrls: ['./pruebas2019.component.css']
})
export class Pruebas2019Component implements OnInit {

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
  dia = moment().format('YYYY-MM-DD');
  // dia = moment().format('YYYY-MM-DD');
  // diaAnt = moment().format('YYYY-MM-DD');
  // diaAnte = moment(this.diaAnt).subtract(1, 'day').format('YYYY-MM-DD')
  // diaAnterior = moment(this.diaAnt).subtract(1, 'day').format('DD-MM-YYYY')
  // noGameToday : any[];
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
    console.log('Jugadores', this.players);
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
        console.log('Original players: ', this.players);
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
        .sort(({lastName: a}, {lastName: b}) => {
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
        // console.log('players', this.players);
        }
        index++;

    });
  }

  }

  onSearchDate(fecha) {
    // console.log("FECHA", fecha.srcElement.value);
    this.dia = fecha.srcElement.value;
    this.getPlayersMap();
}

  onSearchChange() {
    if (this.searchText) {
      this.allItems = this.players.filter(player =>
        // player.stats[0].splits[0].team.name.toLowerCase().includes(this.searchText) ||
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




























































// VIEJO MODULO PARA JUGADORES ESTADISTICAS SEMANALES

//   public players = [];
//   public playerWeek: number = 0;
//   public playersSort = [];
//   public playerWeekSum : number = 0;
//   public sumArray = 0;

//   sumArrayAtBats: number = 0; 
//   arrayPlayersatBats = [];
//   sumArrayHits: number = 0; 
//   arrayPlayersHits = [];
//   sumArrayDoubles: number = 0; 
//   arrayPlayersdoubles = [];
//   sumArrayHomeRuns: number = 0; 
//   arrayPlayershomeRuns = [];
//   sumArrayRbi: number = 0; 
//   arrayPlayersrbi = [];

//   playerWeekAtBats: number = 0; 
//   playerWeekHits: number = 0; 
//   playerWeekDoubles: number = 0; 
//   playerWeekHomeRuns: number = 0; 
//   playerWeekRbi: number = 0; 

//  arrayPlayersAtBatsFinal= []; 
//  arrayPlayersHitsFinal= []; 
//  arrayPlayersDoublesFinal= []; 
//  arrayPlayersHomeRunsFinal= []; 
//  arrayPlayersRbiFinal= []; 

//  arrayPlayersName= [];



//   groups: any;
//   selectedGroup: any;
//   elarray: any;
//   datesN = 10;
//   searchText: string;
//   playerAuxList = [];
//   counter: number;
//   n: number;
//   m: number;
//   n1 = 12;
//   n10 = 5;
//   dia = moment().format('YYYY-MM-DD');
//   public allItems: any[];
//   gamePlays: string;

  // pager object
  // pager: any = {};

  // paged items
  // pagedItems: any[];
  // fechaHoy: Date;


  // isLoading: boolean;
  // avgFinal: number;
  // arrayPlayersAvgFinal: any[];
  // arrayPlayersId: any;

  // constructor(private playerService: DataPlayersService, private pagerService: PagerService) { }

  // ngOnInit() {
  //   console.log('Jugadores', this.players);
    // console.log('dia', this.dia);

  //   this.isLoading = true;
  //   this.getPlayersMap();
  // }


// Convertir el Array de Observables a un Array de Objetos.
// Seleccionar los items necesarios del nuevo Array (con todo el contenido del Json)
// y colocarlos en un nuevo Array
// getPlayersMap() {
//   this.arrayPlayersAvgFinal= [];
//   this.arrayPlayersName= [];
//   this.arrayPlayersId= [];
//   this.players = [];
//   this.allItems = [];
//   this.arrayPlayersHits = [];
  // this.playerWeek = string;
  // this.playerWeekSum =  Number; 

  // this.setPage(1);
  // const InfoObsPlayer = this.playerService.getAllPlayersDaily2();
  // let index = 0;
  // for (let obs of InfoObsPlayer) {
  //   obs.pipe(take(1)).subscribe(res => {
  //     this.players.push(res);

  //     if ((InfoObsPlayer.length - 1) === index) {

  //       this.players = this.players.map(player => {
  //         const newPlayer: Players = {};
  //         Object.assign(newPlayer, player.people[0]);
  //         return newPlayer;
  //       });
        // console.log('Original players: ', this.players);
        // Se filtran los jugadores que no esten activos (no tienen stats ni splits)
        // this.players = this.players.filter(player =>{
         

        //   if(player.stats && player.stats.length !== 0 && player.stats[0].splits && player.stats[0].splits.length !== 0){
        //     for(let i = 0; i < player.stats[0].splits.length; i++){
        //       if(player.stats[0].splits[i].date === this.dia){
        //         player.indexStatDate = i;
        //         this.arrayPlayersName.push(player.fullName); 
        //         this.arrayPlayersId.push(player.id); 
                

        //         this.arrayPlayersatBats = [];
        //         this.arrayPlayersHits = [];
        //         this.arrayPlayersdoubles = [];
        //         this.arrayPlayershomeRuns = [];
        //         this.arrayPlayersrbi = [];
              
                
        //       for(let j = 0; j < 7; j++) {

                
        //           this.playerWeekAtBats = player.stats[0].splits[player.stats[0].splits.length-(j+1)].stat.atBats;
        //           this.arrayPlayersatBats.push(this.playerWeekAtBats); 
                  // console.log("AtBats", this.playerWeekAtBats, j);
                  // this.playerWeekHits = player.stats[0].splits[player.stats[0].splits.length-(j+1)].stat.hits;
                  // this.arrayPlayersHits.push(this.playerWeekHits); 
                  // console.log("SENCILLOS", this.arrayPlayersHits, j, player.fullName);
                  // this.playerWeekDoubles = player.stats[0].splits[player.stats[0].splits.length-(j+1)].stat.doubles;
                  // this.arrayPlayersdoubles.push(this.playerWeekDoubles); 
                  // console.log("Doubles", this.playerWeekDoubles, j);
                  // this.playerWeekHomeRuns = player.stats[0].splits[player.stats[0].splits.length-(j+1)].stat.homeRuns;
                  // this.arrayPlayershomeRuns.push(this.playerWeekHomeRuns); 
                  // console.log("HomeRuns", this.arrayPlayershomeRuns, j);
                  // this.playerWeekRbi = player.stats[0].splits[player.stats[0].splits.length-(j+1)].stat.rbi;
                  // this.arrayPlayersrbi.push(this.playerWeekRbi); 
                  // console.log("Rbi", this.playerWeekRbi, j);
                  
                // }
                // this.sumArrayAtBats = 0;
                // this.sumArrayHits = 0;
                // this.sumArrayDoubles = 0;
                // this.sumArrayHomeRuns = 0;
                // this.sumArrayRbi = 0;
                // console.log("array", this.arrayPlayersHits);
                // for(let k = 0; k < 7; k++){
                // this.sumArrayAtBats = this.sumArrayAtBats + this.arrayPlayersatBats[k];
                // this.sumArrayHits = this.sumArrayHits + this.arrayPlayersHits[k];
                // console.log("Hits", this.sumArrayHits, this.arrayPlayersHits);
                
                // this.sumArrayDoubles = this.sumArrayDoubles + this.arrayPlayersdoubles[k];
                // this.sumArrayHomeRuns = this.sumArrayHomeRuns + this.arrayPlayershomeRuns[k];
                // this.sumArrayRbi = this.sumArrayRbi + this.arrayPlayersrbi[k];
                // }
                
                // console.log("sumArray", this.sumArray);
                // this.arrayPlayersAtBatsFinal.push(this.sumArrayAtBats); 
                // this.arrayPlayersHitsFinal.push(this.sumArrayHits); 
                // this.arrayPlayersDoublesFinal.push(this.sumArrayDoubles); 
                // this.arrayPlayersHomeRunsFinal.push(this.sumArrayHomeRuns); 
                // this.arrayPlayersRbiFinal.push(this.sumArrayRbi); 
                // this.avgFinal = Math.trunc(this.sumArrayHits*1000/this.sumArrayAtBats);
                // console.log("AVG", this.avgFinal);
                
                // this.arrayPlayersAvgFinal.push(this.avgFinal); 

                // console.log("AvgFinal",this.avgFinal);
                

                // console.log("this.arrayPlayersName", this.arrayPlayersName);
                // console.log("arrayPlayersAtBatsFinal", this.arrayPlayersAtBatsFinal);
                // console.log("arrayPlayersHitsFinal", this.arrayPlayersHitsFinal);
                // console.log("arrayPlayersDoublesFinal", this.arrayPlayersDoublesFinal);
                // console.log("arrayPlayersHomerunsFinal", this.arrayPlayersHomeRunsFinal);
                // console.log("arrayPlayersRbiFinal", this.arrayPlayersRbiFinal);

              //   return true;
                
              // }
              // for(let j = 0; j < 8; j++) {
              //   this.playerWeek+=player.stats[0].splits[i].stat.hit
              //   console.log("playerWeek", this.playerWeek);
        //       //       }
        //     }
        //     return false;
        //   }
        // })
        // se ordenan por nombre
  //       .sort(({fullName: a}, {fullName: b}) => {
  //         if (a > b) {
  //           return 1;
  //         } else if (a < b) {
  //           return -1;
  //         } else if (a === b) {
  //           return 0;
  //         }

  //       });
  //       console.log('This players final: ', this.players);



  //       this.allItems = this.players;
  //       this.setPage(1);
  //       this.isLoading = false;
  //       console.log('players', this.players);
  //       }
  //       index++;

  //   });
  // }

  // }

  // onSearchDate(fecha) {
    // console.log("FECHA", fecha.srcElement.value);
//     this.dia = fecha.srcElement.value;
//     this.getPlayersMap();
// }

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

    // get pager object from service
    // this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
//     this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
//   }

// }
