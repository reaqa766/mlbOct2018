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
    // 646242, 553869, 663158, 650333, 666785, 666632, 699134, 660825, 660844, 622608, 608566, 681623, 
    // 683627, 700164, 545121, 553993, 593958, 620454, 650907, 645444, 666661, 672515, 700270, 678489, 
    // 678493, 692544, 521692, 605612, 666023, 672578, 672582, 672580, 681168, 679883, 500743, 542208, 
    // 553988, 660813, 694037, 682949, 677570, 680846, 699062, 683618, 694208, 471911, 516853, 612797, 
    // 679758, 665645, 665828, 665648, 672782, 672724, 678707, 700287, 678391, 677592, 683079, 683679, 
    // 699126, 665966, 667356, 677800, 691370, 691373, 691384, 699157,806956

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
    // 622786, 806956, 666200, 647351

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
    605612, 521692, 500743, 806956,666200, 647351,687282


    //VENEZOLANOS SPRING TRAINNING 2021
  //   514888,462101,656196,606115,672356,553902,642772,660825,593993,621593,605612,455139,602074,500871,666023,527038,520471,
  // 541645,665926,664332,492802,645444,542255,672779,665561,553882,658668,444482,672724,542208,541650,521692,650907,578570,467092,650859,665861,602922,
  // 506703,570560,467055,623993,670869,553993,622786,650402,591971, 672582,660766,
  
  // 666200, 642769,660670,501303,622758,542583,622459,621237,656032,501625,640470,689577,665918,
  // 650333,600858,672555,641319,501593,640492,620439,678545,591611,666598,433217,660684,452678,408234,
  // 665828,650700,471911,613546,665776,542419,660636,612792,620449,661411,465041,468504,665953,622482,630023,666674,661388,
  // 575929,660630,646241,666452,553869,545064,646242,642731,660662,600898,570717,521655,575070,660614,
  // 671272,660564,600902,665648,608422,650506,642857,471865,503556,660813,660508,500610,448855,641645,670868,642511,672578,
  // 514917,650382,622694,433587,491676,665912,591712,660634,672544,621592,506702,650428,661440,446653,660686,641154,606208,600921,
  // 650347,670867,608566,500874,680932,667356,642337,655316,672515,620445,665922,682774,593163,600524,596059,660690,
  // 650883,542364,591741,686780,620444,606299,640902,677592,656024,658530,527048,672596,433589,650658,444489,
  // 665836,642513,660749,650671,591693,622682,660844,677587,630034,593958,642578,677601,670550,500743,444468,
  // 614179,660688,650362,593137,656004,645305,434671,645307,650694,622608,658531,500208,672820,660761,
  // 624133,542513,624636,620443,650660,591720,541600,665987,545121,660631,622415,664337,642508

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
    542255,500871,462101,467092,514888,
    527048,501303,503556,640470,433587,
    593958,641154,541645,660670,444482,
    553993,650402,650333,542583,575929




    // 665742, 521692, 518934, 641313, 607208,
    // 518692, 671277, 514917, 660670,




    // 531368, 502054, 643418, 660670, 592206,
    // 605141, 641487, 595879, 665487, 664058,
    // 621020, 621439, 593428, 520471, 592450,

  ]
  private playersCodeQExtra = [
    542255,500871,462101,467092,514888,
    527048,501303,503556,640470,433587,
    593958,641154,541645,660670,444482,
    553993,650402,650333,542583,575929

  ]
  private playersCodeQExtra1 = [
   531368, 502054, 643418, 660670, 592206,
    605141, 641487, 595879, 665487, 664058,
    621020, 621439, 593428, 520471, 592450,
  ]
  private playersCodeQuin = [
    531368,   ]

  public teams =[
    {
      id: 'losEstrada',
      name: 'Los Estrada',
      playersCodeQuin: [
        531368, 502054, 643418, 660670, 592206,
         605141, 641487, 595879, 665487, 664058,
         621020, 621439, 593428, 520471, 592450,
       ]
      },
      {
        id: 'losEstrada1',
        name: 'Los Estrada1',
        pplayersCodeQuin: [
     542255,500871,462101,467092,514888,
     527048,501303,503556,640470,433587,
     593958,641154,541645,660670,444482,
     553993,650402,650333,542583,575929,
          ]
      
    },

  ]


  // private _url17 = 'https://statsapi.mlb.com/api/v1/people/' + this.playerCode + '/stats?stats=gameLog,statSplits,statsSingleSeason&group=hitting&gameType=S&sitCodes=1&hydrate=team&season=2019&language=en';
  // private _url6 = 'https://statsapi.mlb.com/api/v1/people/' + this.playerCode + '/stats?stats=gameLog,statSplits,statsSingleSeason&group=hitting&gameType=S&sitCodes=1,2,3,4,5,6,7,8,9,10,11,12&hydrate=team&season=2019&language=en';
  // private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2019&hydrate=stats(type=gameLog,gameType=S)';
  // private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2019)';
  private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2025&hydrate=stats(group=hitting,type=gameLog,season,season=2025,gameType=S)';
  // private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2021&hydrate=stats(group=hitting,type=gameLog,season,season=2021,gameType=S)';
  private _url6Pitchers = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +  '&season=2025&hydrate=stats(group=pitching,type=gameLog,gameType=S)';
 // private _url6Pitchers = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +  '&season=2021&hydrate=stats(group=pitching,type=gameLog,gameType=S)';
  private _urlQ = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2025&hydrate=stats(group=hitting,type=gameLog,season,season=2025,gameType=S)';
 //  private _urlQ = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2021&hydrate=stats(group=hitting,type=gameLog,season,season=2021,gameType=S)';
 // private _urlQ = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2020&hydrate=stats(group=hitting,type=gameLog,season,season=2020,gameType=S)';
  private _urlQ2 = 'https://statsapi.mlb.com/api/v1/sports/1/' + this.playerCode +  'players?season=2025&gameType=S';
  // private _urlQ2 = 'https://statsapi.mlb.com/api/v1/sports/1/' + this.playerCode +  'players?season=2021&gameType=S';
  //private _urlQ2 = 'https://statsapi.mlb.com/api/v1/sports/1/' + this.playerCode +  'players?season=2020&gameType=S';
  // private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2019&hydrate=stats(group=pitching,type=gameLog,season,season=2019,gameType=S)';
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
  getPlayerDailyPitchers(): Observable<StatsDayliPlayer> {
    return this.http.get<StatsDayliPlayer>(this._url6Pitchers);
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

  // algoritmo para quiniela/doubles -  jugadores de cada equipo en cada Liga 
  getAllPlayersDailyQuin(jugadores: Array<number>): Observable<StatsDayliPlayer | undefined>[] {
    let dataAllPlayers2: Observable<StatsDayliPlayer | undefined>[] = [];
    for (let code of jugadores) {
      this._url6 = this._url6.replace(this.playerCode.toString(), code.toString())
      // this._url6 = this._url6.replace(this.playerCode.toString(), code.toString())
      let dataP2 = this.getPlayerDaily2();
      dataAllPlayers2.push(dataP2);
      this.playerCode = code;
    }
    return dataAllPlayers2
  }
  // algoritmo para quiniela/doubles -  jugadores de cada equipo en cada Liga 
  getAllPlayersDailyQuinPitchers(jugadores: Array<number>): Observable<StatsDayliPlayer | undefined>[] {
    let dataAllPlayers2: Observable<StatsDayliPlayer | undefined>[] = [];
    for (let code of jugadores) {
      this._url6Pitchers = this._url6Pitchers.replace(this.playerCode.toString(), code.toString())
      // this._url6 = this._url6.replace(this.playerCode.toString(), code.toString())
      let dataP2 = this.getPlayerDailyPitchers();
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
    // getAllPlayersDailyQExtra(playerCodes: number[]): Observable<StatsDayliPlayer | undefined>[] {
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
    getAllPlayersDailyQExtra1(): Observable<StatsDayliPlayer | undefined>[] {
      let dataAllPlayersQ: Observable<StatsDayliPlayer | undefined>[] = [];
      for (let code of this.playersCodeQExtra1) {
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






