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
export class PlayerspointService {
  private playersCode = [
    600524, 602922, 570560, 408234, 591741,
    455139, 514888, 501303, 503556, 542255,
    650402, 553882, 541645, 462101, 452678,
    596059, 520471, 500874, 467055, 467827,
    514917, 467092, 650859, 605612, 445988,
    444489, 542583, 606115, 600858, 506703,
    500743, 606299, 553993, 575929, 660670,
    444482, 500871, 622682, 541600, 492802,
    506702, 553869, 545121, 620439, 602074,
    650333, 623993, 591971, 570717, 517369,
    446653, 541650, 642731, 542364,
    465041, 642279, 527038, 491676, 553902,
    665561, 542419,
    517369, 656024,
    433217, 471865, 500208, 521692,
    542513, 578570, 591712, 591720,
    593993, 600902, 608422, 620443,
    630034, 640492, 640902, 641319,
    641645, 645305, 647351, 650658,
    650660, 650883, 658668, 660614,
    660688, 661388, 665861, 665926,
    666023, 686780,

  ]

    playerCode = 596115;
  public venezuelanPlayersCodes;
  public dominicanPlayersCodes;





  //private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2020&hydrate=stats(group=hitting,type=season,season=2020,gameType=S)';
  private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2024&hydrate=stats(group=hitting,type=season,season=2024,gameType=S)';
  //private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2019&hydrate=stats(group=hitting,type=season,season=2019,gameType=R)';


  constructor(private http: HttpClient) {
    this.venezuelanPlayersCodes = _venezuelanPlayersCodes;
    this.dominicanPlayersCodes = _dominicanPlayersCodes;

   }

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


