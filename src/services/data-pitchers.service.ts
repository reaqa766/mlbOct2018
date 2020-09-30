import { Injectable } from '@angular/core';
import { Stats } from '../interfaces/stats';
import { APIResponse } from '../interfaces/response';
import { Players } from '../interfaces/players';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StatsDayliPlayer } from '../interfaces/stats-dayli-player';

import _venezuelanPlayersCodes from '../assets/JSONS/venezuelanPlayersIds'
import _dominicanPlayersCodes from '../assets/JSONS/dominicanPlayersIds';



@Injectable({
  providedIn: 'root'
})
export class DataPitchersService {
  playerCode = 596115;
  public venezuelanPlayersCodes;
  public dominicanPlayersCodes;



  // Array de Codigo de Pitchers
  // private playersCode = [
  // 593958, 471911, 527048, 433589, 591693,
  // 621237, 630023, 521655, 491646, 434671,
  // 553878, 501625, 468504, 545064, 640470,
  // 448855, 641154, 608566, 622608, 444468,
  // 650382, 622694, 621592, 622786,
  // 622795, 620454, 642578, 614179, 433587,
  // 660813, 620982, 650671, 624133, 575070,

  //   593163, 600921, 611093, 612792,
  //   621593, 622459, 642511, 645307, 650347,
  //   656196, 658530, 658648, 659262, 660749,
  //   660761, 661099, 661440, 664337, 666200,
  //   666674, 667356, 670550, 672578, 500610



  // ];


  private gameCode = [
    531368,
  ]


  // private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2019&hydrate=stats(group=pitching,type=season,season=2019,gameType=S)';
  private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +  '&season=2020&hydrate=stats(group=pitching,type=gameLog,gameType=F)';
  //private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +  '&season=2020&hydrate=stats(group=pitching,type=gameLog,gameType=S)';
  // private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +
  //  '&season=2018&hydrate=stats(type=gameLog)';
  // private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +
  //  '&season=2018&hydrate=stats(type=season=2018),%20team(currentteam)';


  constructor(private http: HttpClient) {
    this.venezuelanPlayersCodes = _venezuelanPlayersCodes;
    this.dominicanPlayersCodes = _dominicanPlayersCodes;

   }

  getDataPlayers(): Observable<Players[]> {
    return this.http.get<Players[]>(this._url6);
  }

    // Obtencion de los datos diarios de un solo jugador
  getPlayerDaily2(): Observable<StatsDayliPlayer> {
    return this.http.get<StatsDayliPlayer>(this._url6);
  }

  // Para colocar todos los Json en un solo array. Genera Obsrvables
  getAllPlayersDaily2(): Observable<StatsDayliPlayer | undefined>[] {
    let dataAllPlayers2: Observable<StatsDayliPlayer | undefined>[] = [];
    for (let code of this.venezuelanPlayersCodes) {
      this._url6 = this._url6.replace(this.playerCode.toString(), code.toString())
      let dataP2 = this.getPlayerDaily2();
      dataAllPlayers2.push(dataP2);
      this.playerCode = code;
    }
    return dataAllPlayers2
  }


}






