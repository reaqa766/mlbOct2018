import { Component, OnInit } from '@angular/core';
import { AllplayersService } from '../../services/allplayers.service';
// import { PlayersService } from '../../../services/players.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../interfaces/players';
import { PagerService } from '../../../services/index';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { url } from 'inspector';


@Component({
  selector: 'app-playerinfo',
  templateUrl: './playerinfo.component.html',
  styleUrls: ['./playerinfo.component.css']
})
export class PlayerinfoComponent implements OnInit {
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
  // tslint:disable-next-line:no-inferrable-types
  n1: number = 12;
  // tslint:disable-next-line:no-inferrable-types
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

    // player = {};
    jugadores = {};




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





  constructor(private playerService: AllplayersService, private pagerService: PagerService, private route: ActivatedRoute) { }
  // constructor(private playerService: PlayersService, private pagerService: PagerService, private route: ActivatedRoute) { }


  ngOnInit() {
    // this.isLoading = true;
    // Cambio de ID potr CODE Dic 2018
    this.route.params.subscribe( params => {
      if (this.idplayer !== params.code) {
        this.idplayer = params.code;
        console.log('players', this.players);

        this.getPlayersMap();
      }
    });

  }

  // Convertir el Array de Observables a un Array de Objetos.
  // Seleccionar los items necesarios del nuevo Array (con todo el contenido del Json) y colocarlos en un nuevo Array
  getPlayersMap() {
    if (!this.isOffline) {
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
            for (let jugador of this.players) {
              // console.log('Comparando: '+jugador.id+' con '+this.idplayer);
              if (jugador.id == this.idplayer) {
                // console.log('items4', jugador.fullName);
                this.player = jugador;
                break;
              }
              // console.log('items5', 1);
              // console.log('Players', this.players);
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
