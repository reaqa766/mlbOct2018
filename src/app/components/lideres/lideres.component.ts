import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======

>>>>>>> c5796caf1334eed0a9b55d42cb32502a8aef9324
import { PlayersService } from '../../../services/players.service';
// import { PruebaService } from '../../services/prueba.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../interfaces/players';
// import LIDERES from '../../../assets/JSONS/ESTADISTICAS_DE_LIDERES';
import VenezolanosActivos from '../../../assets/JSONS/VenezolanosActivos';

import { PagerService } from '../../../services/index';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lideres',
  templateUrl: './lideres.component.html',
  styleUrls: ['./lideres.component.css']
})
export class LideresComponent implements OnInit {
  data: any;
  lider_avg: any;
  row: any;

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

  constructor(private playerService: PlayersService, private pagerService: PagerService, private http: HttpClient) { }


  async ngOnInit() {
    // this.isLoading = true;
    // this.data = LIDERES.row;
    this.jugadores = VenezolanosActivos;

    // this.jugadores = await this.http.get('../../../../assets/JSONS/VenezolanosActivos.json').toPromise();
    // this.isLoading = false;
    // console.log('data', this.data);
    // console.log('jugador', this.jugadores);
  }

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
          // this.jugadores = this.players;
          // this.setPage(1);
          // this.isLoading = false;
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
    .slice(0, 5);
    // console.log('filtrado', filtrado);

    return filtrado;

  }





}
