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
    46242, 553869, 663158, 650333, 666785, 666632, 699134, 660825, 660844, 622608, 608566, 681623, 
    683627, 700164, 545121, 553993, 593958, 620454, 650907, 645444, 666661, 672515, 700270, 678489, 
    678493, 692544, 521692, 605612, 666023, 672578, 672582, 672580, 681168, 679883, 500743, 542208, 
    553988, 660813, 694037, 682949, 677570, 680846, 699062, 683618, 694208, 471911, 516853, 612797, 
    679758, 665645, 665828, 665648, 672782, 672724, 678707, 700287, 678391, 677592, 683079, 683679, 
    699126, 665966, 667356, 677800, 691370, 691373, 691384, 699157,806956


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


