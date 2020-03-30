import { Component, OnInit } from '@angular/core';

import { PitchersService } from '../../../../services/pitchers.service';
// import { PitchersService } from '../../../../services/pitchers.service';
import { Players } from '../../../../../interfaces/players';

import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';



@Component({
  selector: 'app-pitcherinfotemp2019',
  templateUrl: './pitcherinfotemp2019.component.html',
  styleUrls: ['./pitcherinfotemp2019.component.css']
})
export class Pitcherinfotemp2019Component implements OnInit {

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
    idplayer: any;
    jugador: any = {};


    // paged items
    pagedItems: any[];
    player;
    jugadores = {};






  isLoading: boolean;





  constructor(private playerService: PitchersService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.params.subscribe( params => {
      if (this.idplayer !== params.id) {
        this.idplayer = params.id;
        console.log("Players", this.players);
        console.log("IdPlayer", this.idplayer);
        console.log("Params", params.id);
        this.getPlayersMap();
      }
    });

  }

  // Convertir el Array de Observables a un Array de Objetos.
  // Seleccionar los items necesarios del nuevo Array (con todo el contenido del Json) y colocarlos en un nuevo Array
  getPlayersMap() {
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

  }


}

