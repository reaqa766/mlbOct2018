import { Component, OnInit } from '@angular/core';

import { PitchersService } from '../../services/pitchers.service';
import { Players } from '../../../interfaces/players';

import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-pitcherinfo',
  templateUrl: './pitcherinfo.component.html',
  styleUrls: ['./pitcherinfo.component.css']
})
export class PitcherinfoComponent implements OnInit {
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
        // console.log(this.players);
        this.getPlayersMap();
      }
    });

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
          });
                    // tslint:disable-next-line:prefer-const
                    for (let jugador of this.players) {
                      // console.log('Comparando: '+jugador.id+' con '+this.idplayer);
                      // tslint:disable-next-line:triple-equals
                      if (jugador.id == this.idplayer) {
                        // console.log('items4', jugador.fullName);
                        this.player = jugador;
                        break;
                      }
                      // console.log('items5', 1);
                      // console.log('items7', this.idplayer);
                    }
                    console.log('items6', this.player);
        }
        index++;
      });
    }

  }



}
