import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Players } from '../../interfaces/players';
import { StatsDayliPlayer } from '../../interfaces/stats-dayli-player';
import playerData from '../../assets/data';

import { Observable } from 'rxjs';

import _venezuelanPlayersCodes from '../../assets/JSONS/venezuelanPlayersIds'
import _dominicanPlayersCodes from '../../assets/JSONS/dominicanPlayersIds';



@Injectable({
  providedIn: 'root'
})
export class AllplayersService {
  playerCode = 596115;
  rookieCode = 596115;
  public venezuelanPlayersCodes;
  public dominicanPlayersCodes;




// Listado de Novatos del 2019
  private rookiesCode = [
    650671, 642731, 621592, 602074, 650859,
    650333, 650382, 622786, 660761, 658648,
    600858, 640470, 642578, 575070, 660813,
    666200,

  ];
  private rookiesCode2020 = [
    621593, 670550, 658668, 665926, 661388,
    645305, 656004, 660688, 645307, 642772,
    664337, 115815, 677651, 661440,


  ];

  //private _url ='https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +  '&season=2020&hydrate=stats(type=season,season=2020,gameType=S)'
  private _url ='https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +  '&season=2021&hydrate=stats(type=season,season=2021,gameType=S)'
  //private _url ='https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +  '&season=2020&hydrate=stats(type=season,season=2020,gameType=R)'


  constructor(private http: HttpClient) {
    this.venezuelanPlayersCodes = _venezuelanPlayersCodes;
    this.dominicanPlayersCodes = _dominicanPlayersCodes;

   }

  // Obtencion de los datos de temporada de un solo jugador
  getPlayeActive(): Observable<StatsDayliPlayer> {
    return this.http.get<StatsDayliPlayer>(this._url);
  }
  getRookies2019(): Observable<StatsDayliPlayer> {
    return this.http.get<StatsDayliPlayer>(this._url);
  }
  getRookies2020(): Observable<StatsDayliPlayer> {
    return this.http.get<StatsDayliPlayer>(this._url);
  }

  getPlayeActiveOffline(code: number): any {
    for (const player of playerData) {
      if (player.id === code) {
        return player;
      }
    }
  }

  // Para colocar todos los Json en un solo array. Genera Observables
  getAllPlayersActives(): Observable<StatsDayliPlayer | undefined>[] {
    let dataAllPlayers: Observable<StatsDayliPlayer | undefined>[] = [];
    for (let code of this.venezuelanPlayersCodes) {
      this._url = this._url.replace(this.playerCode.toString(), code.toString());
      let dataP = this.getPlayeActive();
      dataAllPlayers.push(dataP);
      this.playerCode = code;
    }


    return dataAllPlayers;
  }

  getAllPlayersActivesOffline(): any[] {
    let dataAllPlayers: any[] = [];
    for (let code of this.venezuelanPlayersCodes) {
      let dataP = this.getPlayeActiveOffline(code);
      dataAllPlayers.push(dataP);
    }
    return dataAllPlayers;

  }


  getAllRookiesActives(): Observable<StatsDayliPlayer | undefined>[] {
    let dataAllPlayers: Observable<StatsDayliPlayer | undefined>[] = [];
    for (let code of this.rookiesCode) {
      this._url = this._url.replace(this.rookieCode.toString(), code.toString());
      let dataP = this.getRookies2019();
      dataAllPlayers.push(dataP);
      this.rookieCode = code;
    }
    return dataAllPlayers;
  }
  getAllRookiesActives20(): Observable<StatsDayliPlayer | undefined>[] {
    let dataAllPlayers: Observable<StatsDayliPlayer | undefined>[] = [];
    for (let code of this.rookiesCode2020) {
      this._url = this._url.replace(this.rookieCode.toString(), code.toString());
      let dataP = this.getRookies2020();
      dataAllPlayers.push(dataP);
      this.rookieCode = code;
    }

    return dataAllPlayers;
  }




}
