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
export class DataPitchersService {
  playerCode = 596115;



  // Array de Codigo de Pitchers
  private playersCode = [
  593958, 471911, 527048, 433589, 591693,
  621237, 630023, 521655, 491646, 434671,
  553878, 501625, 468504, 545064, 640470,
  448855, 641154, 608566, 622608, 444468,
  650382, 622694, 621592, 622786, 621592,
  622795, 620454, 642578, 614179,

  ];
  // 433587, 433589, 434671, 444468, 448855,
  // 468504, 471911, 491646, 501593, 591693,
  // 501625, 521655, 527048, 553878, 575070,
  // 591693, 593163, 593958, 606208, 608566,
  // 611093, 621237, 621592, 622382,
  // 622608, 622786, 622795,  658648
  // 630023, 641154, 650671
  // 650382, 656001, 658530,
  // 666200
  // private playersCode = [
  //   433589, 434671,
  //   471911,
  //   521655, 527048,
  //    593163,  606208,
  //   611093,
  //   622608,  622795, 624133,
  //   630023, , 641154, 642511, 650347,
  //   656001,  658648,
  //   659262,
  // ];

  // PITCHERS 2018
  // 2019?  640470
    // 501593, 621237,
    // 501593,
    // 593993,
    // 471911, 620454,
    // 468504, 630023, 571035,
    // 521655,
    // 491646,
    // 448855, 622694,
    // 433587, 500872,
    // 641154, 608566,
    // 622795, 591672, 622382,
    // 622161,
    // 527048, 433589,
    // 591693,
    // 593958, 600965, 541652, 444468,
    // 614179, 434671,
    // 622608, 462515,
    // 624133,
    // 553878

  // private playersCode = [
  //   650402, 660670, 542583, 514888, 503556,
  //   542255, 444489, 501303, 621237, 462101,
  //   516472, 606115, 553902, 641319, 501593,
  //   620439, 453923, 611093, 593993, 452678,
  //   408234, 471911, 620454, 605612, 465041,
  //   468504, 455139, 630023, 575929, 571035,
  //   553869, 444876, 500871, 527038, 521655,
  //   520471, 541645, 491646, 554054, 471865,
  //    492802, 448855, 514917, 622694,
  //   433587, 491676, 546318, 500872, 506702,
  //   446653, 641154, 553988, 608566, 500874,
  //   400121, 622795, 471083, 591672, 622382,
  //   553882, 600524, 596059, 542364, 591741,
  //   622161, 467827, 444482, 606299, 542208,
  //   541650, 527048, 521692, 463610, 433589,
  //   517369, 445988, 591693, 467092, 622682,
  //   593958, 600965, 500743, 541652, 444468,
  //   602922, 614179, 506703, 434671, 570560,
  //   467055, 623993, 596143, 622608, 462515,
  //   500208, 553993, 624133, 491696, 542513,
  //   624636, 591720, 472528, 591971, 545121,
  //   553878, 622713

  // ]

  private gameCode = [
    531368,
  ]


  // private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2019&hydrate=stats(group=pitching,type=season,season=2019,gameType=S)';
  private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +  '&season=2019&hydrate=stats(type=gameLog,gameType=R)';
  // private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +
  //  '&season=2018&hydrate=stats(type=gameLog)';
  // private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +
  //  '&season=2018&hydrate=stats(type=season=2018),%20team(currentteam)';


  constructor(private http: HttpClient) { }

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
    for (let code of this.playersCode) {
      this._url6 = this._url6.replace(this.playerCode.toString(), code.toString())
      let dataP2 = this.getPlayerDaily2();
      dataAllPlayers2.push(dataP2);
      this.playerCode = code;
    }
    return dataAllPlayers2
  }


}






