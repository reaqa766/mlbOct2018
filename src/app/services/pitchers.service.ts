import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Pitchers } from '../../interfaces/';
import { Players } from '../../interfaces/players';
import { StatsDayliPlayer } from '../../interfaces/stats-dayli-player';
import _venezuelanPlayersCodes from '../../assets/JSONS/venezuelanPlayersIds'
import _dominicanPlayersCodes from '../../assets/JSONS/dominicanPlayersIds';
import _venezuelanPlayersCodes2019 from '../../assets/JSONS/venezuelanPlayersIds2019.'
import _dominicanPlayersCodes2019 from '../../assets/JSONS/dominicanPlayersIds2019';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PitchersService {
  playerCode = 596115;
  // playerCode2 = 596115;
  public venezuelanPlayersCodes;
  public dominicanPlayersCodes;
  public venezuelanPlayersCodes2019;
  public dominicanPlayersCodes2019;
  private gameCode = [
    531368,
  ];


  // Url del Api con los datos de cada juego para un Jugador particular
  private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2024&hydrate=stats(group=pitching,type=season,season=2024,gameType=S)';
  // private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2021&hydrate=stats(group=pitching,type=season,season=2021,gameType=R)';
  //private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2020&hydrate=stats(group=pitching,type=season,season=2020,gameType=R)';
  //private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2020&hydrate=stats(group=pitching,type=season,season=2020,gameType=S)';
  private _url2 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2024&hydrate=stats(group=pitching,type=season,season=2024,gameType=S)';
  //private _url2 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2019&hydrate=stats(group=pitching,type=season,season=2019,gameType=R)';


  constructor(private http: HttpClient) {
    this.venezuelanPlayersCodes = _venezuelanPlayersCodes;
    this.dominicanPlayersCodes = _dominicanPlayersCodes;
    this.venezuelanPlayersCodes2019 = _venezuelanPlayersCodes2019;
    this.dominicanPlayersCodes2019 = _dominicanPlayersCodes2019;

   }

  // Obtencion de los datos de temporada de un solo jugador
  getPlayeActive(): Observable<StatsDayliPlayer> {
    return this.http.get<StatsDayliPlayer>(this._url);
  }

  // Para colocar todos los Json en un solo array. Genera Observables
  getAllPlayersActives(): Observable<StatsDayliPlayer | undefined>[] {
    let dataAllPlayers: Observable<StatsDayliPlayer | undefined>[] = [];
    for (let code of this.venezuelanPlayersCodes) {
      this._url = this._url.replace(this.playerCode.toString(), code.toString());
      let dataP = this.getPlayeActive();
      dataAllPlayers.push(dataP);
      this.playerCode = code;
    }
    return dataAllPlayers;
  }
  // Obtencion de los datos de temporada de un solo jugador
  getPlayeActive2019(): Observable<StatsDayliPlayer> {
    return this.http.get<StatsDayliPlayer>(this._url2);
  }

  // Para colocar todos los Json en un solo array. Genera Observables
  getAllPlayersActives2019(): Observable<StatsDayliPlayer | undefined>[] {
    let dataAllPlayers2: Observable<StatsDayliPlayer | undefined>[] = [];
    for (let code of this.venezuelanPlayersCodes2019) {
      this._url2 = this._url2.replace(this.playerCode.toString(), code.toString());
      let dataP = this.getPlayeActive2019();
      dataAllPlayers2.push(dataP);
      this.playerCode = code;
    }
    return dataAllPlayers2;
  }

 }
