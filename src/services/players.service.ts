import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Players } from '../interfaces/players';
import { StatsDayliPlayer } from '../interfaces/stats-dayli-player';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  playerCode = 596115;
  // gameCode = 563385;


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



  // Array de Codigo de Jugadores
  private playersCode = [
    650402,
    660670,
    542583,
    514888,
    503556,
    542255,
    444489,
  ]

  private gameCode = [
    531368,
    // 531824,
    // 531829,
    // 531825,
    // 531833,
    // 531835,  
  ]


  // Url del Api con los datos de cada juego para un Jugador particular
  // private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2018&hydrate=stats(group=hitting,type=gameLog)';
  // private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2018&hydrate=stats(group=[hitting,pitching],type=[career,statSplits],sitCodes=a,sportId=12)';
  private _url5 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2018&hydrate=stats(group=[hitting],type=[pecota],sportId=12)';
  private _url1 = 'http://statsapi.mlb.com/api/v1/people/' + this.playerCode + '/stats/game/' + this.gameCode ;
  private _url4 = 'https://statsapi.mlb.com/api/v1/teams/109/roster?hydrate=person(stats(type=season,season=2018),education)&rosterType=Active';
  private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2018&hydrate=stats(type=season=2018),%20team(currentteam)';
  private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +  '&season=2018&hydrate=stats(type=gameLog)';


  constructor(private http: HttpClient) { }

  //Obtencion de los datos de temporada de un solo jugador
  getPlayeActive(): Observable<StatsDayliPlayer> {
    return this.http.get<StatsDayliPlayer>(this._url);
  }

  // Para colocar todos los Json en un solo array. Genera Observables
  getAllPlayersActives(): Observable<StatsDayliPlayer | undefined>[] {
    let dataAllPlayers: Observable<StatsDayliPlayer | undefined>[] = [];
    for (let code of this.playersCode) {
      this._url = this._url.replace(this.playerCode.toString(), code.toString())
      let dataP = this.getPlayeActive();
      dataAllPlayers.push(dataP);
      this.playerCode = code;
    }
    return dataAllPlayers
  }






  // //Obtencion de los datos diarios de un solo jugador
  // getPlayerDaily(): Observable<StatsDayliPlayer> {
  //   return this.http.get<StatsDayliPlayer>(this._url);
  // }

  // // Para colocar todos los Json en un solo array. Genera Obsrvables
  // getAllPlayersDaily(): Observable<StatsDayliPlayer | undefined>[] {
  //   let dataAllPlayers1: Observable<StatsDayliPlayer | undefined>[] = [];
  //   for (let code of this.playersCode) {
  //     this._url = this._url.replace(this.playerCode.toString(), code.toString())
  //     let dataP1 = this.getPlayerDaily();
  //     dataAllPlayers1.push(dataP1);
  //     this.playerCode = code;
  //   }
  //   return dataAllPlayers1
  // }







  // //Obtencion de los datos diarios de un solo jugador
  // getPlayerDaily2(): Observable<StatsDayliPlayer> {
  //   return this.http.get<StatsDayliPlayer>(this._url6);
  // }



  // // Para colocar todos los Json en un solo array. Genera Obsrvables
  // getAllPlayersDaily2(): Observable<StatsDayliPlayer | undefined>[] {
  //   let dataAllPlayers2: Observable<StatsDayliPlayer | undefined>[] = [];
  //   for (let code of this.playersCode) {
  //     this._url6 = this._url6.replace(this.playerCode.toString(), code.toString())
  //     let dataP2 = this.getPlayerDaily2();
  //     dataAllPlayers2.push(dataP2);
  //     this.playerCode = code;
  //   }
  //   return dataAllPlayers2
  // }
}
