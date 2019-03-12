import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../../../services/prueba.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../../interfaces/players';
import LIDERES from '../../../../assets/JSONS/ESTADISTICAS_DE_LIDERES';
import VenezolanosActivos from '../../../../assets/JSONS/VenezolanosActivos';

import { PagerService } from '../../../../services/index';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pruebajsons',
  templateUrl: './pruebajsons.component.html',
  styleUrls: ['./pruebajsons.component.css']
})
export class PruebajsonsComponent implements OnInit {
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
  avg: any = [];
  filtrado: any;
  venezolanosActivos: any;

  constructor(private playerService: PruebaService, private pagerService: PagerService, private http: HttpClient) { }


  async ngOnInit() {
    // this.isLoading = true;
    this.data = LIDERES.row;
    this.jugadores = VenezolanosActivos;

    // this.jugadores = await this.http.get('../../../../assets/JSONS/VenezolanosActivos.json').toPromise();
    // this.isLoading = false;
    // console.log('data', this.data);
    // console.log('jugador', this.jugadores);
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
          })
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