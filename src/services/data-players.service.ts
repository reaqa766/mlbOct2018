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
export class DataPlayersService {
  playerCode = 596115;




  // Array de Codigo de Jugadores
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
        517369, 656024, 656196,
        433217, 471865, 500208, 521692,
        542513, 578570, 591712, 591720,
        593993, 600902, 608422, 620443,
        630034, 640492, 640902, 641319,
        641645, 645305, 647351, 650658,
        650660, 650883, 658668, 660614,
        660688, 661388, 665861, 665926,
        666023, 686780,

    // 593163, 593993, 600921, 611093, 612792,
    // 621593, 622459, 642511, 645307, 650347,
    // 656196, 658530, 658648, 659262, 660749,
    // 660761, 661099, 661440, 664337, 666200,
    // 666674, 667356, 670550, 672578, 500610



  ]
  // MENORES 2019 545121, 491696, 514888, 605612,
  // 408234, 433217, 444482, 444489, 445988, 446653,
  // 452678, 455139, 462101, 463610, 465041, 467055,
  // 467092, 467827, 485567, 492802, 500208, 500743,
  // 500871, 500874, 501303, 503556, 506702,  471865,
  // 514888, 514916, 514917, 516949, 517369, 520471,
  // 521692, 527038, 541645, 541650, 542255, 542364,
  // 542513, 542583, 545121, 546318, 553869, 553882,
  // 553902, 553988, 553993, 554054, 570560, 571685,
  // 575929, 578570, 591712, 591720, 591741, 602074
  // 593993, 596059, 600524, 600858, 602922, 623993,
  //  606115, 606299, 614179, 620439,
  // 622758,
  // 645305, 650339, 650402, 650700,
  // 650907, 660564, 660614, 660634, 660636,
  // 660670, 660844, 661388, 665828, 665945,
  // 491676


  // JUGADORES  2018
  // 650402, 660670, 542583, 514888, 503556,
  // 542255, 444489, 501303, 462101,
  // 516472, 606115, 553902, 641319,
  // 620439, 453923, 593993, 452678,
  // 408234, 605612, 465041,
  // 455139, 575929,
  // 553869, 444876, 500871, 527038,
  // 520471, 541645, 554054,
  // 492802, 514917,
  // 491676, 546318, 506702,
  // 446653, 553988, 500874,
  // 400121, 471083,
  // 553882, 600524, 596059, 542364, 591741,
  // 467827, 444482, 606299, 542208,
  // 541650, 521692, 463610,
  // 517369, 445988, 467092,
  // 500743,
  // 602922, 506703, 570560,
  // 467055, 623993, 596143,
  // 500208, 553993, 491696, 542513,
  // 624636, 591720, 472528, 591971, 545121,
  // 622713,


  // PITCHERS  2018
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

  // private _url6 ='https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +  '&season=2019&hydrate=stats(group=hitting,type=season,season=2019,gameType=S)'
  private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +  '&season=2020&hydrate=stats(type=gameLog,gameType=S)';
  // private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +  '&season=2019&hydrate=stats(type=gameLog)';
  // private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2018&hydrate=stats(type=season=2018),%20team(currentteam)';


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






