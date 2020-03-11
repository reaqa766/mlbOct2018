import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { PlayerspointService} from '../../../../playerspoint.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../../../interfaces/players';

// tslint:disable-next-line:semicolon
import { PagerService } from '../../../../../services/index'
import { ThrowStmt } from '@angular/compiler';

// import { PlayersService } from '../../../../services/players.service';
// import { take } from 'rxjs/operators';
// import { Players } from '../../../../interfaces/players';

// import { PagerService } from '../../../../services/index';


@Component({
  selector: 'app-actives2019',
  templateUrl: './actives2019.component.html',
  styleUrls: ['./actives2019.component.css']
})
export class Actives2019Component implements OnInit {
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
  // dia1 = moment().format('YYYY-MM-DD');
  // dia1 = new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate() - 1);
  dia = new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate() - 1);
  // dia = new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate() - 1);
  public allItems: any[];
  gamePlays: string;

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any;
  fechaHoy: Date;
  sumaTotalPts: any;
  sumaTotal: any;


  isLoading: boolean;
  sumaTotal2: number;
  players1: number;
  sumaHits: number;
  sumaDoubles: number;
  sumaTriples: number;
  sumaHr: number;
  sumaCI: number;
  sumaCA: number;
  sumaBB: number;
  sumaPonche: number;
  sumaBR: number;
  sumaCapRob: number;


  constructor(private playerService: PlayerspointService, private pagerService: PagerService) { }

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
  this.sumaTotal = 0;
  this.sumaHits = 0;
  this.sumaDoubles = 0;
  this.sumaTriples = 0;
  this.sumaHr = 0;
  this.sumaCI = 0;
  this.sumaCA = 0;
  this.sumaBB = 0;
  this.sumaPonche = 0;
  this.sumaBR = 0;
  this.setPage(1);
  const InfoObsPlayer = this.playerService.getAllPlayersDaily3();
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
                this.sumaTotal2=(player.stats[0].splits[player.indexStatDate].stat.hits)*1 + (player.stats[0].splits[player.indexStatDate].stat.doubles)*2 +
                (player.stats[0].splits[player.indexStatDate].stat.triples)*3 + (player.stats[0].splits[player.indexStatDate].stat.homeRuns)*4 + (player.stats[0].splits[player.indexStatDate].stat.rbi)*2 +
                (player.stats[0].splits[player.indexStatDate].stat.runs)*1 + (player.stats[0].splits[player.indexStatDate].stat.baseOnBalls)*1 + (player.stats[0].splits[player.indexStatDate].stat.strikeOuts)*-1 +
                (player.stats[0].splits[player.indexStatDate].stat.stolenBases)*1 + (player.stats[0].splits[player.indexStatDate].stat.caughtStealing)*-2 ;
                // console.log('sumaTotal2: ', this.sumaTotal2);
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






        this.allItems = this.players;
        // console.log("ALLITEMS", this.allItems)

        this.players = this.players.filter(player =>{
          if(player.stats && player.stats.length !== 0 && player.stats[0].splits && player.stats[0].splits.length !== 0){
             for(let i = 0; i < player.stats[0].splits.length; i++){
               if(player.stats[0].splits[i].date === this.dia){
                // this.sumaHits =this.sumaHits + (player.stats[0].splits[player.indexStatDate].stat.hits)*1;
                // this.sumaDoubles = this.sumaDoubles + (player.stats[0].splits[player.indexStatDate].stat.doubles)*2;
                // this.sumaTriples= this.sumaTriples + (player.stats[0].splits[player.indexStatDate].stat.triples)*3;
                // this.sumaHr= this.sumaHr + (player.stats[0].splits[player.indexStatDate].stat.homeRuns)*4;
                // this.sumaCI= this.sumaCI + (player.stats[0].splits[player.indexStatDate].stat.rbi)*2;
                // this.sumaCA= this.sumaCA + (player.stats[0].splits[player.indexStatDate].stat.runs)*1;
                // this.sumaBB= this.sumaBB + (player.stats[0].splits[player.indexStatDate].stat.baseOnBalls)*1;
                // this.sumaPonche= this.sumaPonche +(player.stats[0].splits[player.indexStatDate].stat.strikeOuts)*-1;
                // this.sumaBR= this.sumaBR + (player.stats[0].splits[player.indexStatDate].stat.stolenBases)*1;
                // this.sumaCapRob= this.sumaCapRob + (player.stats[0].splits[player.indexStatDate].stat.caughtStealing)*-2;
                this.sumaTotal =this.sumaTotal + (player.stats[0].splits[player.indexStatDate].stat.hits)*1 + (player.stats[0].splits[player.indexStatDate].stat.doubles)*2 +
                  (player.stats[0].splits[player.indexStatDate].stat.triples)*3 + (player.stats[0].splits[player.indexStatDate].stat.homeRuns)*4 + (player.stats[0].splits[player.indexStatDate].stat.rbi)*2 +
                  (player.stats[0].splits[player.indexStatDate].stat.runs)*1 + (player.stats[0].splits[player.indexStatDate].stat.baseOnBalls)*1 + (player.stats[0].splits[player.indexStatDate].stat.strikeOuts)*-1 +
                  (player.stats[0].splits[player.indexStatDate].stat.stolenBases)*1 + (player.stats[0].splits[player.indexStatDate].stat.caughtStealing)*-2 ;
                // console.log("sumaHits", this.sumaHits)

                 return true;
               }
             }
             return false;
           }
         })



        this.setPage(1);
        this.isLoading = false;
              }
        index++;

    });
  }


  }

  onSearchDate(fecha) {
    this.dia= fecha.srcElement.value;
    this.getPlayersMap();
}

  onSearchChange() {
    if (this.searchText) {
      this.allItems = this.players.filter(player =>
        player.stats[0].splits[0].team.name.toLowerCase().includes(this.searchText) ||
        (player.fullName && player.fullName.toLowerCase().includes(this.searchText)) ||
        (player.nickName && player.nickName.toLowerCase().includes(this.searchText)) ||
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
    this.pager = this.pagerService.getPager(this.allItems.length+1, page);
    // this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}















