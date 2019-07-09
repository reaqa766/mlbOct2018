import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Players } from '../interfaces/players';
import { StatsDayliPlayer } from '../interfaces/stats-dayli-player';
import playerData from '../assets/data';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  playerCode = 596115;




  // Array de Codigo de Jugadores
  // private playersCode = [
  //   408234, 433217, 444482, 444489, 445988, 446653,
  //   452678, 455139, 462101, 463610, 465041, 467055,
  //   467092, 467827, 485567, 492802, 500208, 500743,
  //   500871, 500874, 501303, 503556, 506702,
  //   514888, 514916, 514917, 516949, 517369, 520471,
  //   521692, 527038, 541645, 541650, 542255, 542364,
  //   542513, 542583, 545121, 546318, 553869, 553882,
  //   553902, 553988, 553993, 554054, 570560, 571685,
  //   575929, 578570, 591712, 591720, 591741, 591971,
  //   593993,  596059, 600524, 600858, 602074, 602922,
  //    606115, 606299, 614179, 620439, 620443,
  //    622758, 623993, 624636, 642731, 642772,
  //   645305, 650333, 650339, 650402, 650700, 650859,
  //   650907, 658668, 660564, 660614, 660634, 660636,
  //   660670, 660688, 660844, 661388, 665828, 665945,
  //   491676
  // ];

    private playersCode = [
      600524, 602922, 570560, 408234, 591741,
      455139, 514888, 501303, 503556,
      650402, 553882, 541645, 462101, 452678,
      596059, 520471, 500874, 467055, 467827,
      514917, 467092, 650859, 605612,
      444489, 542583, 606115,
      500743, 606299, 553993, 575929, 660670,
      444482, 500871, 622682,
      506702, 553869, 545121,
      650333, 623993,

    ];

  // MENORES 545121, 2019
  // SPRING TRAINING 2019
  //  408234, 433217, 444482, 444489, 445988, 446653, 471865,
  // 452678, 455139, 462101, 463610, 465041, 467055, 623993,
  // 467092, 467827, 485567, 492802, 500208, 500743,
  // 500871, 500874, 501303, 503556, 506702, 506703,
  // 514888, 514916, 514917, 516949, 517369, 520471,
  // 521692, 527038, 541645, 541650, 542255, 542364,
  // 542513, 542583, 545121, 546318, 553869, 553882,
  // 553902, 553988, 553993, 554054, 570560, 571685,
  // 575929, 578570, 591712, 591720, 591741, 491696,
  // 593993, 596059, 600524, 600858, 602922, 650859
  // 605612, 606115, 606299, 614179, 620439,  602074
  // 622758,
  // 645305, 650339, 650402, 650700,
  // 650907, 660564, 660614, 660634, 660636,
  // 660670, 660844, 661388, 665828, 665945,
  // 491676










  // JUGADORES 2018
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
  // 517369, 445988, 467092, 622682,
  // 500743,
  // 602922, 506703, 570560,
  // 467055, 623993, 596143,
  // 500208, 553993, 491696, 542513,
  // 624636, 591720, 472528, 591971, 545121,
  // 622713

  // PITCHERS 2018
  // private playersCode = [
  //   621237,
  //   501593,
  //   593993,
  //   471911, 620454,
  //   468504, 630023, 571035,
  //   521655,
  //   491646,
  //   448855, 622694,
  //   433587, 500872,
  //   641154, 608566,
  //   622795, 591672, 622382,
  //   622161,
  //   527048, 433589,
  //   591693,
  //   593958, 600965, 541652, 444468,
  //   614179, 434671,
  //   622608, 462515,
  //   624133,
  //   553878
  // ];

  // PITCHERS 2019
  // 433587, 433589, 434671, 444468, 448855,
  // 468504, 471911, 491646, 501593,
  // 501625, 521655, 527048, 553878, 575070,
  // 591693, 593163, 593958, 606208, 608566,
  // 611093, 612792, 621237, 621592, 622382,
  // 622608, 622694, 622786, 622795, 624133,
  // 630023, 640470, 641154, 642511, 650347,
  // 650382, 650671, 656001, 658530, 658648,
  // 659262, 660761, 666200



  // Url del Api con los datos de cada juego para un Jugador particular
  // private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +
  // '&season=2018&hydrate=stats(group=hitting,type=gameLog)';
  // private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +
  // '&season=2018&hydrate=stats(group=[hitting,pitching],type=[career,statSplits],sitCodes=a,sportId=12)';
  // private _url5 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +
  // '&season=2018&hydrate=stats(group=[hitting],type=[pecota],sportId=12)';
  // private _url1 = 'http://statsapi.mlb.com/api/v1/people/' + this.playerCode + '/stats/game/' +
  // this.gameCode;
  // tslint:disable-next-line:max-line-length
  // private _url4 = 'https://statsapi.mlb.com/api/v1/teams/109/roster?hydrate=person(stats(type=season,season=2018),education)&rosterType=Active';
  // // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:max-line-length
  private _url ='https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +  '&season=2019&hydrate=stats(group=hitting,type=season,season=2019,gameType=R)'


  // private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2018&hydrate=stats(type=season=2018),%20team(currentteam)';
  // private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2018&hydrate=stats(type=gameLog)';


  constructor(private http: HttpClient) { }

  // Obtencion de los datos de temporada de un solo jugador
  getPlayeActive(): Observable<StatsDayliPlayer> {
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
    for (let code of this.playersCode) {
      this._url = this._url.replace(this.playerCode.toString(), code.toString());
      let dataP = this.getPlayeActive();
      dataAllPlayers.push(dataP);
      this.playerCode = code;
    }


    return dataAllPlayers;
  }

  getAllPlayersActivesOffline(): any[] {
    let dataAllPlayers: any[] = [];
    for (let code of this.playersCode) {
      let dataP = this.getPlayeActiveOffline(code);
      dataAllPlayers.push(dataP);
    }
    return dataAllPlayers;

  }



}
