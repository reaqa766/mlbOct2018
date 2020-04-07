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
export class DataPlayersService {
  playerCode = 596115;

  public venezuelanPlayersCodes;
  public dominicanPlayersCodes;




  // Array de Codigo de Jugadores
  private playersCode = [
    605541
    // 600524, 602922, 570560, 408234, 591741,
    // 455139, 514888, 501303, 503556, 542255,
    // 650402, 553882, 541645, 462101, 452678,
    // 596059, 520471, 500874, 467055, 467827,
    // 514917, 467092, 650859, 605612, 445988,
    // 444489, 542583, 606115, 600858, 506703,
    // 500743, 606299, 553993, 575929, 660670,
    // 444482, 500871, 622682, 541600, 492802,
    // 506702, 553869, 545121, 620439, 602074,
    // 650333, 623993, 591971, 570717, 517369,
    // 446653, 541650, 642731, 542364,
    // 465041, 642279, 527038, 491676, 553902,
    // 665561, 542419,
    // 517369, 656024,
    // 433217, 471865, 500208, 521692,
    // 542513, 578570, 591712, 591720,
    // 593993, 600902, 608422, 620443,
    // 630034, 640492, 640902, 641319,
    // 641645, 645305, 647351, 650658,
    // 650660, 650883, 658668, 660614,
    // 660688, 661388, 665861, 665926,
    // 666023, 686780,
    // Venezuelan Players
    // 642769,660670,501303,622758,542583,514888,622459,621237,656032,501625,640470,462101,656196,689577,
    // 665918,606115,672356,650333,600858,672555,553902,641319,501593,640492,620439,642772,678545,660825,591611,666598,433217,593993,
    // 660684,452678,408234,665828,650700,471911,613546,665776,542419,660636,612792,621593,605612,620449,661411,465041,468504,665953,
    // 622482,455139,630023,666674,661388,575929,660630,602074,646241,666452,553869,545064,646242,500871,642731,660662,666023,600898,
    // 570717,527038,521655,575070,520471,660614,541645,671272,660564,600902,665648,665926,608422,650506,664332,642857,471865,503556,
    // 660813,492802,660508,500610,448855,641645,670868,642511,672578,514917,650382,622694,433587,491676,665912,591712,660634,645444,
    // 542255,672544,621592,506702,650428,661440,446653,660686,641154,606208,600921,650347,670867,672779,665561,608566,500874,680932,
    // 667356,642337,655316,672515,620445,665922,553882,682774,593163,600524,596059,658668,660690,650883,542364,591741,686780,620444,
    // 444482,606299,672724,640902,677592,656024,542208,658530,541650,527048,672596,521692,433589,650658,444489,665836,642513,650907,
    // 660749,578570,650671,591693,467092,650859,622682,660844,665861,677587,630034,593958,642578,677601,670550,500743,444468,602922,
    // 614179,660688,650362,593137,656004,506703,645305,434671,645307,570560,467055,623993,650694,622608,658531,500208,672820,670869,
    // 660761,624133,542513,622786,624636,620443,650660,650402,591720,541600,591971,665987,545121,660631,622415,664337,642508,

    // 472551,650556,542436,642715,593643,660896,645261,622505,501659,609280,606157,606478,
    // 623214,520980,622783,639373,593528,593647,650893,466320,429664,650895,622491,456078,446868,612434,516770,542585,
    // 661403,517008,614173,622772,443558,456501,660853,600887,646240,622766,660546,594694,622554,429665,608032,544727,
    // 593140,622774,658551,596748,658305,606424,544725,472610,596825,554340,593334,460576,570481,620453,594056,594311,
    // 642721,608597,593700,593523,606192,516969,594011,605301,650391,501571,659275,657656,600917,642736,434538,625643,
    // 672773,608475,622534,606466,516782,593372,608577,606167,625510,642336,622492,573668,593423,606160,606625,622168,
    // 593576,504379,456051,467100,456488,542303,606303,570240,642547,593974,503449,606131,501381,570256,593871,527049,
    // 405395,434670,608070,606162,600466,614177,622569,570663,645302,407845,622446,593144,500135,622864,650738,642708,
    // 600968,517593,596142,593934,467793,542454,642701,570267,429722,516416,622663,600474,642423,642397,665742,467008,
    // 593833,606132,665487,570632,620446,664285,570488,542340,527055,450172,593679,660623
  ]

  private gameCode = [
    531368,
  ]

  // private _url17 = 'https://statsapi.mlb.com/api/v1/people/' + this.playerCode + '/stats?stats=gameLog,statSplits,statsSingleSeason&group=hitting&gameType=R&sitCodes=1&hydrate=team&season=2019&language=en';
  // private _url6 = 'https://statsapi.mlb.com/api/v1/people/' + this.playerCode + '/stats?stats=gameLog,statSplits,statsSingleSeason&group=hitting&gameType=R&sitCodes=1,2,3,4,5,6,7,8,9,10,11,12&hydrate=team&season=2019&language=en';
  // private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2019&hydrate=stats(type=gameLog,gameType=R)';
  // private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2019)';
  private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2019&hydrate=stats(group=hitting,type=gameLog,season,season=2019,gameType=R)';
  // private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2019&hydrate=stats(group=pitching,type=gameLog,season,season=2019,gameType=R)';
  // private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2020&hydrate=stats(type=gameLog,gameType=S)';


  constructor(private http: HttpClient) {
    this.venezuelanPlayersCodes = _venezuelanPlayersCodes;
    this.dominicanPlayersCodes = _dominicanPlayersCodes;

   }
  //Arrray de PerosonIds
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
      // this._url6 = this._url6.replace(this.playerCode.toString(), code.toString())
      let dataP2 = this.getPlayerDaily2();
      dataAllPlayers2.push(dataP2);
      this.playerCode = code;
    }
    return dataAllPlayers2
  }


  //Array de Datos

  // getDataPlayers17(): Observable<Players[]> {
  //   return this.http.get<Players[]>(this._url17);
  // }

  // // Obtencion de los datos diarios de un solo jugador
  // getPlayerDaily17(): Observable<StatsDayliPlayer> {
  //   return this.http.get<StatsDayliPlayer>(this._url17);

  // }


  // // Para colocar todos los Json en un solo array. Genera Observables
  // getAllPlayersDaily17(): Observable<StatsDayliPlayer | undefined>[] {
  //   let dataAllPlayers17: Observable<StatsDayliPlayer | undefined>[] = [];
  //   for (let code of this.playersCode) {
  //     this._url17 = this._url17.replace(this.playerCode.toString(), code.toString())
  //     // this._url6 = this._url6.replace(this.playerCode.toString(), code.toString())
  //     let dataP17 = this.getPlayerDaily17();
  //     dataAllPlayers17.push(dataP17);
  //     this.playerCode = code;
  //   }
  //   return dataAllPlayers17
  // }


}






