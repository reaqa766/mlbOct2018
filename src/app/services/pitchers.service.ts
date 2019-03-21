import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Players } from '../../interfaces/players';
import { StatsDayliPlayer } from '../../interfaces/stats-dayli-player';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PitchersService {
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
  // private playersCode = [
  //   650402, 660670, 542583, 514888, 503556,
  //   542255, 444489, 501303, 462101,
  //   516472, 606115, 553902, 641319,
  //   620439, 453923, 593993, 452678,
  //   408234, 605612, 465041,
  //   455139, 575929,
  //   553869, 444876, 500871, 527038,
  //   520471, 541645, 554054, 471865,
  //   492802, 514917,
  //   491676, 546318, 506702,
  //   446653, 553988, 500874,
  //   400121, 471083,
  //   553882, 600524, 596059, 542364, 591741,
  //   467827, 444482, 606299, 542208,
  //   541650, 521692, 463610,
  //   517369, 445988, 467092, 622682,
  //   500743,
  //   602922, 506703, 570560,
  //   467055, 623993, 596143,
  //   500208, 553993, 491696, 542513,
  //   624636, 591720, 472528, 591971, 545121,
  //   622713
  // ];
  // PITCHERS
  private playersCode = [
    433587, 433589, 434671, 444468, 448855,
    468504, 471911, 491646, 501593,
    501625, 521655, 527048, 553878, 575070,
    591693, 593163, 593958, 606208, 608566,
    611093, 621237, 621592, 622382,
    622608, 622786, 622795,
    630023, 641154,
    650382, 656001, 658530,
    666200
  ];

  // PITCHERS 2018
  // 621237,
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

  private gameCode = [
    531368,
    // 531824,
    // 531829,
    // 531825,
    // 531833,
    // 531835
  ];


  // Url del Api con los datos de cada juego para un Jugador particular
  // private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +
  // '&season=2018&hydrate=stats(group=hitting,type=gameLog)';
  // private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +
  // '&season=2018&hydrate=stats(group=[hitting,pitching],type=[career,statSplits],sitCodes=a,sportId=12)';
  private _url5 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +
  '&season=2018&hydrate=stats(group=[hitting],type=[pecota],sportId=12)';
  private _url1 = 'http://statsapi.mlb.com/api/v1/people/' + this.playerCode + '/stats/game/' +
  this.gameCode;
  // tslint:disable-next-line:max-line-length
  private _url4 = 'https://statsapi.mlb.com/api/v1/teams/109/roster?hydrate=person(stats(type=season,season=2018),education)&rosterType=Active';
  // tslint:disable-next-line:max-line-length
  private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2019&hydrate=stats(group=pitching,type=season,season=2019,gameType=S)';
  // private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2018&hydrate=stats(type=season=2018),%20team(currentteam)';
  private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2018&hydrate=stats(type=gameLog)';


  constructor(private http: HttpClient) { }

  // Obtencion de los datos de temporada de un solo jugador
  getPlayeActive(): Observable<StatsDayliPlayer> {
    return this.http.get<StatsDayliPlayer>(this._url);
  }

  // Para colocar todos los Json en un solo array. Genera Observables
  getAllPlayersActives(): Observable<StatsDayliPlayer | undefined>[] {
    // tslint:disable-next-line:prefer-const
    let dataAllPlayers: Observable<StatsDayliPlayer | undefined>[] = [];
    // tslint:disable-next-line:prefer-const
    for (let code of this.playersCode) {
      this._url = this._url.replace(this.playerCode.toString(), code.toString());
      // tslint:disable-next-line:prefer-const
      let dataP = this.getPlayeActive();
      dataAllPlayers.push(dataP);
      this.playerCode = code;
    }
    return dataAllPlayers;
  }

}
