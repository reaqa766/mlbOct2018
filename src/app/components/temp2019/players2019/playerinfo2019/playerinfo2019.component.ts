import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { PlayerspointService} from '../../../../playerspoint.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../../../interfaces/players';
import { PlayersService } from '../../../../../services/players.service';

import { PagerService } from '../../../../../services/index';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-playerinfo2019',
  templateUrl: './playerinfo2019.component.html',
  styleUrls: ['./playerinfo2019.component.css']
})
export class Playerinfo2019Component implements OnInit {
  public players = [];
  public playersSort = [];
  // Cambiar  a false cuando este en linea
  isOffline = false;
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
  n1: number = 12;
  n10: number = 5;

  public allItems: any[];
    // pager object
    pager: any = {};
    idplayer: any;
    jugador: any = {};
    data = '';
    // paged items
    pagedItems: any[];
    player;

    jugadores = {};




  isLoading: boolean;





  constructor(private playerService: PlayersService, private pagerService: PagerService, private route: ActivatedRoute) { }


  ngOnInit() {
    // Cambio de ID potr CODE Dic 2018
    this.route.params.subscribe( params => {
      if (this.idplayer !== params.code) {
        this.idplayer = params.code;
        this.getPlayersMap();
      }
    });

  }

  // Convertir el Array de Observables a un Array de Objetos.
  // Seleccionar los items necesarios del nuevo Array (con todo el contenido del Json) y colocarlos en un nuevo Array
  getPlayersMap() {
    if (!this.isOffline) {
      let InfoObsPlayer = this.playerService.getAllPlayersActives2019();
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
            for (let jugador of this.players) {
              if (jugador.id == this.idplayer) {
                this.player = jugador;
                break;
              }
            }
          }
          index++;
        });
      }
    } else {
      this.players = this.playerService.getAllPlayersActivesOffline();
      for (const jugador of this.players) {
        if (jugador.id == this.idplayer) {
          this.player = jugador;
          break;
        }
      }
    }

  }
}





