import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Players } from '../../interfaces/players';
import { StatsDayliPlayer } from '../../interfaces/stats-dayli-player';
import playerData from '../../assets/data';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Players2019Service {
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
    // 646242, 553869, 663158, 650333, 666785, 666632, 699134, 660825, 660844, 622608, 608566, 681623, 
    // 683627, 700164, 545121, 553993, 593958, 620454, 650907, 645444, 666661, 672515, 700270, 678489, 
    // 678493, 692544, 521692, 605612, 666023, 672578, 672582, 672580, 681168, 679883, 500743, 542208, 
    // 553988, 660813, 694037, 682949, 677570, 680846, 699062, 683618, 694208, 471911, 516853, 612797, 
    // 679758, 665645, 665828, 665648, 672782, 672724, 678707, 700287, 678391, 677592, 683079, 683679, 
    // 699126, 665966, 667356, 677800, 691370, 691373, 691384, 699157,806956

    // 77578, 660670, 606115, 506702, 683690, 672373, 682769, 641154, 673394, 665846, 806441, 514888, 
    // 677578, 660670, 606115, 506702, 683690, 672373, 682769, 641154, 673394, 665846, 514888, 
    // 620449, 685744, 641645, 664351, 677651, 660634, 682626, 699305, 620443, 640492, 542364, 682668, 640470, 
    // 676130, 681739, 660688, 665953, 660766, 674285, 691251, 514888, 685744, 
    // 806441, 682692, 677651, 670868, 544150, 620439, 670869, 691373, 665966, 677800, 691370, 699157, 667356, 
    // 691384, 665648, 699126, 700287, 683679, 665828, 677592, 672782, 683079, 801276, 672724, 678391, 471911, 
    // 665645, 678707, 612797, 679758, 516853, 665926, 645305, 692478, 623993, 682785, 665561, 621237, 691893, 
    // 691330, 614179, 624133, 672613, 665859, 650402, 695865, 672456, 678662, 
    // 608566, 622608, 553993, 545121, 678493, 678489, 700270, 692544, 666661, 
    // 593958, 677587, 672356, 684222, 691422, 682897, 699114, 703150, 806957, 691641, 682641, 678545, 527038, 
    // 694196, 681168, 553882, 672820, 682790, 683568, 527048, 694208, 680846, 553988, 542208, 694037, 
    // 645444, 620454, 672515, 650907, 700270, 692544, 666661, 593958, 642731, 
    // 700164, 681623, 608566, 683627, 703150, 806957, 655316, 694192, 661388, 671272, 
    // 694206, 691620, 640902, 650333, 666632, 553869, 666785, 699134, 663158, 660844, 660825, 646242, 570560, 
    // 808129, 650859, 665861, 650671, 660761, 666023, 605612, 672578, 521692, 679883, 679200, 672582, 683618, 
    // 677570, 691558, 500743, 660813, 699062, 682949, 575929, 701800, 686780, 692405, 665996, 691185, 691594, 
    // 622786,806956, 666200, 647351

    808104, 699157, 691384, 691373, 691370, 691385, 677800, 667356 ,665966, 800510, 695865, 672613, 
    691251, 665953, 673395, 660688, 674285, 660766, 692371, 684852, 683690, 677578, 660670, 606115, 506702, 
    699126, 800510, 700287, 695865, 672456, 665648, 665859, 650402, 692478, 682785, 670869, 665926, 645305, 
    620439, 623993, 544150, 691913, 682616, 682769, 685712, 672373, 673394, 670868, 641154, 692405, 698929, 692390, 
    691185, 691594, 691582, 701800, 681450, 665996, 686780, 622786, 575929, 801276, 691330, 683610, 683679, 691893, 
    677592, 683079, 678391, 672724, 678707, 665828, 672782, 672376, 665561, 665645, 679758, 621237, 624133, 612797, 
    614179, 516853, 471911, 821252, 808154, 800331, 828592, 806441, 808129, 699305, 820884, 803241, 698933, 691710, 
    694208, 700322, 682668, 702878, 691186, 682626, 682692, 680846, 681739, 684483, 685744, 672620, 680933, 694037, 
    660634, 676130, 664346, 665846, 665861, 660761, 640492, 620443, 664351, 677651, 650859, 640470, 620449, 650671, 
    641645, 570560, 542364, 553988, 514888, 542208, 806957, 800198, 699114, 703150, 699912, 699134, 691641, 692544, 
    683490, 678493, 700270, 678489, 672515, 666661, 666632, 650333, 666785, 645444, 650907, 640902, 620454, 593958, 
    545121, 553993, 663158, 553869, 808396, 805052, 691422, 692852, 683588, 682790, 683568, 684222, 682897, 
    681168, 677587, 669413, 672820, 672356, 553882, 527048, 815929, 692044, 692348, 694196, 
    700164, 683588, 682641, 682674, 678662, 683627, 678545, 682276, 681623, 660844, 646242, 660825, 642731, 608566, 
    622608, 527038, 800424, 694192, 800325, 802192, 694206, 699130, 691616, 691558, 692334, 683618, 691600, 682633, 
    691620, 677570, 699062, 679883, 682949, 672580, 671272, 672582, 660813, 661388, 655316, 672578, 679200, 666023, 
    605612, 521692, 500743, 806956,666200, 647351
  ];



  // MENORES 2019 545121, 514888,
  // JUGADORES 2018
  //   650402, 660670, 542583, 514888, 503556,
  //   542255, 444489, 501303, 462101,602074
  //   516472, 606115, 553902, 641319,  471865,
  //   620439, 453923, 593993, 452678,
  //   408234,  465041, 500208,
  //   455139, 575929,  491696,  605612,
  //   553869, 444876, 500871, 527038,
  //   520471, 541645, 554054,
  //   492802, 514917,
  //   491676, 546318, 506702,
  //   446653, 553988, 500874,
  //   400121, 471083,
  //   553882, 600524, 596059, 542364, 591741,
  //   467827, 444482, 606299, 542208,
  //   541650, 521692, 463610,
  //   517369, 445988, 467092,
  //   500743,
  //   602922,  570560,
  //   467055, 623993, 596143,
  //   500208, 553993, 491696, 542513,
  //   624636, 591720, 472528, 591971, 545121,
  //   622713

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
  private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2020&hydrate=stats(type=season=2020),%20team(currentteam)';
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

  getAllPlayersActivesOffline(): any[] {
    // tslint:disable-next-line:prefer-const
    let dataAllPlayers: any[] = [];
    // tslint:disable-next-line:prefer-const
    for (let code of this.playersCode) {
      // tslint:disable-next-line:prefer-const
      let dataP = this.getPlayeActiveOffline(code);
      dataAllPlayers.push(dataP);
    }
    return dataAllPlayers;
  }

}
