import { Injectable } from '@angular/core';
import { Stats } from '../interfaces/stats';
import { APIResponse } from '../interfaces/response';
import { Players } from '../interfaces/players';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StatsDayliPlayer } from '../interfaces/stats-dayli-player';


@Injectable({
  providedIn: 'root'
})
export class PlayerspointService {
  playerCode = 596115;




  // Array de Codigo de Jugadores
  private playersCode = [
  408234, 642731, 650402, 500871, 575929,
  660670, 542255, 623993, 542583, 553902,
  455139, 514888, 462101, 596059,
  ]

  private gameCode = [
    531368,
  ]

  // private _url6 ='https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +  '&season=2019&hydrate=stats(group=hitting,type=season,season=2019,gameType=S)'
  private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +  '&season=2020&hydrate=stats(type=gameLog,gameType=S)';
  // private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +  '&season=2019&hydrate=stats(type=gameLog)';
  // private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2018&hydrate=stats(type=season=2018),%20team(currentteam)';


  constructor(private http: HttpClient) { }

  getDataPlayers3(): Observable<Players[]> {
    return this.http.get<Players[]>(this._url6);
  }

    // Obtencion de los datos diarios de un solo jugador
  getPlayerDaily3(): Observable<StatsDayliPlayer> {
    return this.http.get<StatsDayliPlayer>(this._url6);
  }

  // Para colocar todos los Json en un solo array. Genera Obsrvables
  getAllPlayersDaily3(): Observable<StatsDayliPlayer | undefined>[] {
    let dataAllPlayers2: Observable<StatsDayliPlayer | undefined>[] = [];
    for (let code of this.playersCode) {
      this._url6 = this._url6.replace(this.playerCode.toString(), code.toString())
      let dataP2 = this.getPlayerDaily3();
      dataAllPlayers2.push(dataP2);
      this.playerCode = code;
    }
    return dataAllPlayers2
  }


}


