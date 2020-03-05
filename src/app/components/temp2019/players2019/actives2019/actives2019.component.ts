import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { PlayerspointService} from '../../../../playerspoint.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../../../interfaces/players';

// tslint:disable-next-line:semicolon
import { PagerService } from '../../../../../services/index'

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

  constructor(private playerService: PlayerspointService, private pagerService: PagerService) { }

  ngOnInit() {
    // console.log('Jugadores', this.players);
    console.log('dia', this.dia);
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
        console.log('Original players: ', this.players);
        // Se filtran los jugadores que no esten activos (no tienen stats ni splits)
        this.players = this.players.filter(player =>{
         if(player.stats && player.stats.length !== 0 && player.stats[0].splits && player.stats[0].splits.length !== 0){
            for(let i = 0; i < player.stats[0].splits.length; i++){
              if(player.stats[0].splits[i].date === this.dia){
                player.indexStatDate = i;
                  for(let z = 0; z <=i; z++)  {              
                  this.sumaTotal= this.sumaTotal + (player.stats[0].splits[z].stat.hits*1+player.stats[0].splits[z].stat.strikeOuts*-2);
                  this.sumaTotal2= (player.stats[0].splits[z].stat.hits*1+player.stats[0].splits[z].stat.strikeOuts*-2);
                  // this.sumaTotalPts = this.sumaTotalPts.push(this.sumaTotal);
                  console.log('Z: ', z);
                  console.log('Sumatotal: ', this.sumaTotal2);
                  console.log('Sumatotal2: ', this.sumaTotal);
                  }
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
        // console.log('players', this.players);
        }
        index++;

    });
  }

  }

  onSearchDate(fecha) {
    console.log("FECHA", fecha.srcElement.value);
    // this.dia= fecha.srcElement.value;
    this.dia= fecha.srcElement.value;
    this.getPlayersMap();
}
//   sumaParcialDiaria(sumatotal) {
//     console.log("FECHA", fecha.srcElement.value);
//     this.dia= fecha.srcElement.value;
//     this.getPlayersMap();
// }

  onSearchChange() {
    if (this.searchText) {
      this.allItems = this.players.filter(player =>
        player.stats[0].splits[0].team.name.toLowerCase().includes(this.searchText) ||
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















