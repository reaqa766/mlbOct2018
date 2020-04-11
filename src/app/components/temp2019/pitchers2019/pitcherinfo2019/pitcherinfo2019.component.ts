import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { PitcherspointService} from '../../../../pitcherspoint.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../../../interfaces/players';

// tslint:disable-next-line:semicolon
import { PagerService } from '../../../../../services/index'
import { parse } from 'cfb/types';

// import { PlayersService } from '../../../../services/players.service';
// import { take } from 'rxjs/operators';
// import { Players } from '../../../../interfaces/players';

// import { PagerService } from '../../../../services/index';




@Component({
  selector: 'app-pitcherinfo2019',
  templateUrl: './pitcherinfo2019.component.html',
  styleUrls: ['./pitcherinfo2019.component.css']
})
export class Pitcherinfo2019Component implements OnInit {

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
  dia = new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate() - 1);
  public allItems: any[];
  gamePlays: string;

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  fechaHoy: Date;


  isLoading: boolean;
  sumaTotal: any;
  cero_carreras_permitidas: number;
  una_carreras_permitidas: number;
  Nro_innings: number;
  dos_carreras_permitidas: number;
  tres_carreras_permitidas: number;
  cuatro_ponches_realizados: number;
  diez_ponches_realizados: number;
  quince_ponches_realizados: number;
  masquince_ponches_realizados: number;

  constructor(private playerService: PitcherspointService, private pagerService: PagerService) { }

  ngOnInit() {
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
  this.cero_carreras_permitidas = 0;
  this.una_carreras_permitidas = 0;
  this.dos_carreras_permitidas = 0;
  this.tres_carreras_permitidas = 0;
  this.Nro_innings = 0;
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

          if(player.stats && player.stats.length !== 0 && player.stats[0].splits && player.primaryPosition.name == "Pitcher" && player.stats[0].splits.length !== 0){
            for(let i = 0; i < player.stats[0].splits.length; i++){
              if(player.stats[0].splits[i].date === this.dia){
                player.indexStatDate = i;
                this.Nro_innings = Number(player.stats[0].splits[player.indexStatDate].stat.inningsPitched).valueOf();

                if(player.stats[0].splits[player.indexStatDate].stat.earnedRuns==0){ (this.cero_carreras_permitidas = Math.round(7/9*this.Nro_innings))}
                else if (player.stats[0].splits[player.indexStatDate].stat.earnedRuns==1){ (this.una_carreras_permitidas = Math.round(5/9*this.Nro_innings ))}
                else if(player.stats[0].splits[player.indexStatDate].stat.earnedRuns==2){ (this.dos_carreras_permitidas = Math.round(3/9*this.Nro_innings ))}
                else if (player.stats[0].splits[player.indexStatDate].stat.earnedRuns>=3) { (this.tres_carreras_permitidas = 0)};


                if(player.stats[0].splits[player.indexStatDate].stat.strikeOuts>=0 && player.stats[0].splits[player.indexStatDate].stat.strikeOuts<=4 ){ (this.cuatro_ponches_realizados = 1)}
                else if (player.stats[0].splits[player.indexStatDate].stat.strikeOuts>=5 && player.stats[0].splits[player.indexStatDate].stat.strikeOuts<=10){ (this.diez_ponches_realizados =2 )}
                else if(player.stats[0].splits[player.indexStatDate].stat.strikeOuts>=11 && player.stats[0].splits[player.indexStatDate].stat.strikeOuts<15){ (this.quince_ponches_realizados =5 )}
                else if (player.stats[0].splits[player.indexStatDate].stat.strikeOuts>=15) { (this.masquince_ponches_realizados = 10)};

              console.log("i", i);
              console.log("name", player.fullName);
              console.log("Innings Original",player.stats[0].splits[player.indexStatDate].stat.inningsPitched );
              console.log("Innings",  this.Nro_innings );
              console.log("EarnedRuns", player.stats[0].splits[player.indexStatDate].stat.earnedRuns);
              console.log("cero_carreras_permitidas", (this.cero_carreras_permitidas));
              console.log("una_carreras_permitidas", this.una_carreras_permitidas);
              console.log("dos_carreras_permitidas", this.dos_carreras_permitidas);
              console.log("tres_carreras_permitidas", this.tres_carreras_permitidas);

              console.log("Ponches Realizados",player.stats[0].splits[player.indexStatDate].stat.strikeOuts);
              console.log("cuatro_ponches_realizados", this.cuatro_ponches_realizados);
              console.log("diez_ponches_realizados", this.diez_ponches_realizados);
              console.log("quince_ponches_realizados", this.quince_ponches_realizados);
              console.log("masquince_ponches_realizados", this.masquince_ponches_realizados);



                this.sumaTotal = this.sumaTotal + (this.cero_carreras_permitidas + this.una_carreras_permitidas + this.dos_carreras_permitidas + this.tres_carreras_permitidas + player.stats[0].splits[player.indexStatDate].stat.wins) * 3 + (player.stats[0].splits[player.indexStatDate].stat.saves) * 2 +
                (player.stats[0].splits[player.indexStatDate].stat.losses) * -3;


                this.Nro_innings = 0;
                this.cero_carreras_permitidas=0;
                this.una_carreras_permitidas=0;
                this.dos_carreras_permitidas=0;
                this.tres_carreras_permitidas=0;
                this.cuatro_ponches_realizados=0;
                this.diez_ponches_realizados=0;
                this.quince_ponches_realizados=0;
                this.masquince_ponches_realizados=0;


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

        // Calculo de Suma Total de Ptos Pitchers
        // this.players = this.players.filter(player => {
        //   if (player.stats && player.stats.length !== 0 && player.stats[0].splits && player.stats[0].splits.length !== 0) {
        //     for (let i = 0; i < player.stats[0].splits.length; i++) {
        //       if (player.stats[0].splits[i].date === this.dia) {
        //         this.sumaTotal = this.sumaTotal + (player.stats[0].splits[player.indexStatDate].stat.wins) * 3 + (player.stats[0].splits[player.indexStatDate].stat.saves) * 2 +
        //           (player.stats[0].splits[player.indexStatDate].statlosses) * -3;

        //         return true;
        //       }
        //     }
        //     return false;
        //   }
        // })

        this.setPage(1);
        this.isLoading = false;
        // console.log('players', this.players);
        }
        // console.log("index", index);

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
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}















