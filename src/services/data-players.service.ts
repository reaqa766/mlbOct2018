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
  playerCodeQ = 596115;

  public venezuelanPlayersCodes;
  public dominicanPlayersCodes;




  // Array de Codigo de Jugadores
  private playersCode = [

    //VENEZOLANOS SPRING TRAINNING 2021
    514888,462101,656196,606115,672356,553902,642772,660825,593993,621593,605612,455139,602074,500871,666023,527038,520471,
    541645,665926,664332,492802,645444,542255,665561,553882,658668,444482,672724,542208,541650,521692,650907,578570,467092,
    650859,665861,602922,506703,570560,467055,623993,670869,553993,622786,650402,591971

    //Dominican
    //472551,650556,542436,642715,593643,660896,645261,622505,501659,609280,606157,606478,
   // 623214,520980,622783,639373,593528,593647,650893,466320,429664,650895,622491,456078,446868,612434,516770,542585,
    //661403,517008,614173,622772,443558,456501,660853,600887,646240,622766,660546,594694,622554,429665,608032,544727,
    //593140,622774,658551,596748,658305,606424,544725,472610,596825,554340,593334,460576,570481,620453,594056,594311,
   // 642721,608597,593700,593523,606192,516969,594011,605301,650391,501571,659275,657656,600917,642736,434538,625643,
   // 672773,608475,622534,606466,516782,593372,608577,606167,625510,642336,622492,573668,593423,606160,606625,622168,
   // 593576,504379,456051,467100,456488,542303,606303,570240,642547,593974,503449,606131,501381,570256,593871,527049,
    //405395,434670,608070,606162,600466,614177,622569,570663,645302,407845,622446,593144,500135,622864,650738,642708,
    //600968,517593,596142,593934,467793,542454,642701,570267,429722,516416,622663,600474,642423,642397,665742,467008,
    //593833,606132,665487,570632,620446,664285,570488,542340,527055,450172,593679,660623,

    //Venezuelan
    // 660670,501303,542583,514888,621237,501625,640470,462101,606115,650333,600858,553902,658648,501593,620439,521692,
    // 452678,408234,471911,620454,605612,465041,468504,455139,630023,575929,602074,553869,545064,500871,642731,527038,521655,575070,520471,541645,
    // 491646,471865,503556,660813,492802,500610,448855,641645,514917,650382,622694,433587,491676,546318,542255,621592,506702,641154,608566,500874,
    // 622795,553882,600524,596059,542364,591741,467827,444482,606299,541650,527048,433589,444489,620982,517369,650671,591693,467092,650859,622682,
    // 593958,642578,500743,444468,602922,614179,506703,434671,570560,467055,623993,622608,500208,553993,660761,624133,491696,622786,620443,650402,
    // 591720,541600,591971,545121,553878,661388,665926, 658668,

    // JUGADORES VENEZOLANOS DEL 2020
      // 660670,501303,542583,514888,621237,501625,640470,462101,606115,650333,553902,501593,620439,642772,593993,452678,
      // 408234,471911,621593,605612,465041,468504,455139,630023,661388,575929,553869,545064,500871,642731,527038,521655,520471,541645,677651,665926,
      // 503556,660813,500610,448855,641645,672578,514917,650382,622694,591712,542255,506702,661440,641154,608566,500874,553882,600524,596059,658668,
      // 591741,444482,606299,541650,527048,521692,433589,444489,650671,467092,650859,622682,642578,670550,500743,444468,614179,660688,656004,645305,
      // 434671,645307,570560,467055,623993,622608,553993,660761,624133,622786,620443,650402,545121,664337,


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
  ]

  private gameCode = [
    531368,
  ]

  private playersCodeQ = [
    665742, 521692, 518934, 641313, 607208,
    518692, 671277, 514917, 660670,




    // 531368, 502054, 643418, 660670, 592206,
    // 605141, 641487, 595879, 665487, 664058,
    // 621020, 621439, 593428, 520471, 592450,

  ]
  private playersCodeQExtra = [
    541645, 521692

  ]


  // private _url17 = 'https://statsapi.mlb.com/api/v1/people/' + this.playerCode + '/stats?stats=gameLog,statSplits,statsSingleSeason&group=hitting&gameType=R&sitCodes=1&hydrate=team&season=2019&language=en';
  // private _url6 = 'https://statsapi.mlb.com/api/v1/people/' + this.playerCode + '/stats?stats=gameLog,statSplits,statsSingleSeason&group=hitting&gameType=R&sitCodes=1,2,3,4,5,6,7,8,9,10,11,12&hydrate=team&season=2019&language=en';
  // private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2019&hydrate=stats(type=gameLog,gameType=R)';
  // private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2019)';
  private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2021&hydrate=stats(group=hitting,type=gameLog,season,season=2021,gameType=S)';
  //private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2020&hydrate=stats(group=hitting,type=gameLog,season,season=2020,gameType=R)';
  private _urlQ = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2021&hydrate=stats(group=hitting,type=gameLog,season,season=2021,gameType=S)';
 // private _urlQ = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2020&hydrate=stats(group=hitting,type=gameLog,season,season=2020,gameType=R)';
  private _urlQ2 = 'https://statsapi.mlb.com/api/v1/sports/1/' + this.playerCode +  'players?season=2021&gameType=S';
  //private _urlQ2 = 'https://statsapi.mlb.com/api/v1/sports/1/' + this.playerCode +  'players?season=2020&gameType=R';
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
  getPlayerDailyQ(): Observable<StatsDayliPlayer> {
    return this.http.get<StatsDayliPlayer>(this._url6);
  }
  getPlayerDailyQ2(): Observable<StatsDayliPlayer> {
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

    // Para colocar todos los Json de la QUINIELA en un solo array. Genera Observables
    getAllPlayersDailyQ(): Observable<StatsDayliPlayer | undefined>[] {
      let dataAllPlayersQ: Observable<StatsDayliPlayer | undefined>[] = [];
      for (let code of this.playersCodeQ) {
        this._url6 = this._urlQ.replace(this.playerCode.toString(), code.toString())
        // this._url6 = this._url6.replace(this.playerCode.toString(), code.toString())
        let dataP2 = this.getPlayerDailyQ();
        dataAllPlayersQ.push(dataP2);
        this.playerCodeQ = code;
      }
      return dataAllPlayersQ
    }
    // Para colocar todos los Json de la QUINIELA en un solo array. Genera Observables
    getAllPlayersDailyQExtra(): Observable<StatsDayliPlayer | undefined>[] {
      let dataAllPlayersQ: Observable<StatsDayliPlayer | undefined>[] = [];
      for (let code of this.playersCodeQExtra) {
        this._url6 = this._urlQ.replace(this.playerCode.toString(), code.toString())
        // this._url6 = this._url6.replace(this.playerCode.toString(), code.toString())
        let dataP2 = this.getPlayerDailyQ();
        dataAllPlayersQ.push(dataP2);
        this.playerCodeQ = code;
      }
      return dataAllPlayersQ
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






