import { Component, OnInit } from '@angular/core';
import { CodegenComponentFactoryResolver } from '@angular/core/src/linker/component_factory_resolver';


import { PlayersService } from '../../../services/players.service';
// import { PruebaService } from '../../services/prueba.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../interfaces/players';
// import LIDERES from '../../../assets/JSONS/ESTADISTICAS_DE_LIDERES';
import VenezolanosActivos from '../../../assets/JSONS/VenezolanosActivos';

import { PagerService } from '../../../services/index';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


 // MODULO DE LIDERES
 data: any;
 lider_avg: any;
 row: any;
 estadistica = [true, false, false, false, false, false, false];
 public players = [];
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

 public allItems: any[];
 // pager object
 pager: any = {};

 // paged items
 pagedItems: any[];
 jugadores: any;
 isLoading: boolean;
 avg: any = [];
 filtrado: any;
 venezolanosActivos: any;
 CALEND2: any;
 CALEND3: any;
 teamPlays: any;

 _url = 'https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&season=2019&standingsTypes=regularSeason';
 _url1 = 'https://statsapi.mlb.com/api/v1/schedule?sportId=1,51&date=2019-04-14&gameTypes=E,S,R,A,F,D,L,W&hydrate=team(linescore(matchup,runners))&useLatestGames=false&language=en&leagueId=103,104,420';

// FIN DE MODULO DE LIDERES

constructor(private playerService: PlayersService, private pagerService: PagerService, private http: HttpClient) { }

 async ngOnInit() {
   // Se lleva al top de la pagina en inicio
   window.scrollTo(0,0);
   this.getPlayersMap();
   this.isLoading = true;
   // this.data = LIDERES.row;
   // this.jugadores = VenezolanosActivos;
   console.log('jugadores', this.players);

 }

textChange(i) {
 this.players[i].activo = !this.players[i].activo;
}



// INICIO MODULO 2 LIDERES


// Convertir el Array de Observables a un Array de Objetos.
 // Seleccionar los items necesarios del nuevo Array (con todo el contenido del Json) y colocarlos en un nuevo Array
 getPlayersMap() {
   let InfoObsPlayer = this.playerService.getAllPlayersActives();
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
           .sort(({ fullName: a }, { fullName: b }) => {
             if (a > b) {
               return 1;
             } else if (a < b) {
               return -1;
             } else if (a === b) {
               return 0;
             }
           });
         this.allItems = this.players;
         this.jugadores = this.players;
         this.setPage(1);
         this.isLoading = false;
       }
       index++;
     });
   }

 }

 filtroTopCinco(estadistica: string) {
   let filtrado = [];

   filtrado = this.jugadores.filter(
     jugador => jugador.stats && jugador.stats[0].splits
   ).
   sort((jugadorA, jugadorB) => {

     const a = Number(jugadorA.stats[0].splits[0].stat[estadistica]);
     const b = Number(jugadorB.stats[0].splits[0].stat[estadistica]);
     if (a < b) {
       return 1;
     } else if (a > b) {
       return -1;
     } else if (a === b) {
       return 0;
     }
   })
   // Se acaba el sort por la estadistica deseada => se retorna un array
   .slice(0, 6);
   // console.log('filtrado', filtrado);

   return filtrado;

 }

 filtroTopCincoAvg(estadistica: string) {
   let filtrado = [];

   filtrado = this.jugadores.filter(
     jugador => jugador.stats && jugador.stats[0].splits &&  jugador.stats[0].splits[0].stat.atBats >= (52*3.1)
     // jugador => jugad or.stats && jugador.stats[0].splits &&  jugador.stats[0].splits[0].stat.atBats >= (this.teamPlays.record * 3.1)
   ).
   sort((jugadorA, jugadorB) => {

     const a = Number(jugadorA.stats[0].splits[0].stat[estadistica]);
     const b = Number(jugadorB.stats[0].splits[0].stat[estadistica]);
     if (a < b) {
       return 1;
     } else if (a > b) {
       return -1;
     } else if (a === b) {
       return 0;
     }
   })
   // Se acaba el sort por la estadistica deseada => se retorna un array
   .slice(0, 6);
   // console.log('filtrado', filtrado);

   return filtrado;

 }


 setPage(page: number) {
   // get pager object from service
   this.pager = this.pagerService.getPager(this.allItems.length, page);

   // get current page of items
   this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
 }

avgClick(x) {
 // console.log('estadistica', this.estadistica);

 for (let i=0; i<this.estadistica.length; i++) {
   if (x === i) {
     this.estadistica[i] = true;
     // console.log('estadistica x', this.estadistica[i]);

   } else {
     this.estadistica[i] = false;
     // console.log('estadistica y', this.estadistica[i]);


   }

 }
}
// FIN MODULO 2 LIDERES

}

