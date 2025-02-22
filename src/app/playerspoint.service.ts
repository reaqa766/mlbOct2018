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
    // 46242, 553869, 663158, 650333, 666785, 666632, 699134, 660825, 660844, 622608, 608566, 681623, 
    // 683627, 700164, 545121, 553993, 593958, 620454, 650907, 645444, 666661, 672515, 700270, 678489, 
    // 678493, 692544, 521692, 605612, 666023, 672578, 672582, 672580, 681168, 679883, 500743, 542208, 
    // 553988, 660813, 694037, 682949, 677570, 680846, 699062, 683618, 694208, 471911, 516853, 612797, 
    // 679758, 665645, 665828, 665648, 672782, 672724, 678707, 700287, 678391, 677592, 683079, 683679, 
    // 699126, 665966, 667356, 677800, 691370, 691373, 691384, 699157,806956
    677578, 660670, 606115, 506702, 683690, 672373, 682769, 641154, 673394, 665846, 514888, 
    620449, 685744, 641645, 664351, 677651, 660634, 682626, 699305, 620443, 640492, 542364, 682668, 640470, 
    676130, 681739, 660688, 665953, 660766, 674285, 691251, 514888, 685744, 
    806441, 682692, 677651, 670868, 544150, 620439, 670869, 691373, 665966, 677800, 691370, 699157, 667356, 
    691384, 665648, 699126, 700287, 683679, 665828, 677592, 672782, 683079, 801276, 672724, 678391, 471911, 
    665645, 678707, 612797, 679758, 516853, 665926, 645305, 692478, 623993, 682785, 665561, 621237, 691893, 
    691330, 614179, 624133, 672613, 665859, 650402, 695865, 672456, 678662, 
    608566, 622608, 553993, 545121, 678493, 678489, 700270, 692544, 666661, 
    593958, 677587, 672356, 684222, 691422, 682897, 699114, 703150, 806957, 691641, 682641, 678545, 527038, 
    694196, 681168, 553882, 672820, 682790, 683568, 527048, 694208, 680846, 553988, 542208, 694037, 
    645444, 620454, 672515, 650907, 700270, 692544, 666661, 593958, 642731, 
    700164, 681623, 608566, 683627, 622608, 703150, 806957, 691641, 655316, 694192, 661388, 671272, 
    694206, 691620, 640902, 650333, 666632, 553869, 666785, 699134, 663158, 660844, 660825, 646242, 570560, 
    808129, 650859, 665861, 650671, 660761, 666023, 605612, 672578, 521692, 679883, 679200, 672582, 683618, 
    677570, 691558, 500743, 660813, 699062, 682949, 575929, 701800, 686780, 692405, 665996, 691185, 691594, 
    622786


  ]

    playerCode = 596115;
  public venezuelanPlayersCodes;
  public dominicanPlayersCodes;





  //private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2020&hydrate=stats(group=hitting,type=season,season=2020,gameType=S)';
  private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2025&hydrate=stats(group=hitting,type=season,season=2025,gameType=S)';
  //private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2019&hydrate=stats(group=hitting,type=season,season=2019,gameType=S)';


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


