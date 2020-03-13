import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Players } from '../../interfaces/players';
import { StatsDayliPlayer } from '../../interfaces/stats-dayli-player';
import playerData from '../../assets/data';

import { Observable } from 'rxjs';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { take } from 'rxjs-compat/operator/take';
import { first } from 'rxjs/operators';
import { async } from 'q';
import _venezuelanPlayersCodes from '../../assets/JSONS/venezuelanPlayersIds'
import _dominicanPlayersCodes from '../../assets/JSONS/dominicanPlayersIds';


@Injectable({
  providedIn: 'root'
})
export class DominicanService {
  playerCode = 596115;
  public venezuelanPlayersCodes;
  public dominicanPlayersCodes;
  private gameCode = [
    531368,
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
  private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2020&hydrate=stats(group=pitching,type=season,season=2020,gameType=S)';
  // private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2018&hydrate=stats(type=season=2018),%20team(currentteam)';
  private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2018&hydrate=stats(type=gameLog)';


  constructor(private http: HttpClient) {
    this.venezuelanPlayersCodes = _venezuelanPlayersCodes;
    this.dominicanPlayersCodes = _dominicanPlayersCodes;

   }

  // Obtencion de los datos de temporada de un solo jugador
  getPlayeActive(): Observable<StatsDayliPlayer> {
    return this.http.get<StatsDayliPlayer>(this._url);
  }

  // Para colocar todos los Json en un solo array. Genera Observables
  getAllDominicanPlayersActives(): Observable<StatsDayliPlayer | undefined>[] {
    let dataAllPlayers: Observable<StatsDayliPlayer | undefined>[] = [];
    for (let code of this.dominicanPlayersCodes) {
      this._url = this._url.replace(this.playerCode.toString(), code.toString());
      let dataP = this.getPlayeActive();
      dataAllPlayers.push(dataP);
      this.playerCode = code;
    }
    return dataAllPlayers;
  }
  getAllDominicanPlayersActivesOffline(): any[] {
    let dataAllPlayers: any[] = [];
    for (let code of this.venezuelanPlayersCodes) {
      let dataP = this.getPlayeActiveOffline(code);
      dataAllPlayers.push(dataP);
    }
    return dataAllPlayers;

  }
  getPlayeActiveOffline(code: any) {
    throw new Error("Method not implemented.");
  }

 }
