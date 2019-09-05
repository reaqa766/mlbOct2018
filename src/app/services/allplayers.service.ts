import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Players } from '../../interfaces/players';
import { StatsDayliPlayer } from '../../interfaces/stats-dayli-player';
import playerData from '../../assets/data';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AllplayersService {
  playerCode = 596115;
  rookieCode = 596115;
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



  // Array de Codigo de Jugadores y Pitchers 2019 SP TRaining
  private playersCode = [
    600524, 602922, 570560, 408234,  622682,
    455139, 501303, 503556, 623993, 506703,
    650402, 553882, 541645, 462101, 452678,
    596059, 520471, 500874, 467055, 467827,
    514917, 467092, 591693, 605612, 541600,
    444489, 542583, 606115, 600858, 620439,
    500743, 606299, 553993, 575929, 660670,
    444482, 500871, 506702, 492802, 602074,
    593958, 471911, 527048, 433589, 622694,
    621237, 630023, 521655, 491646, 434671,
    553878, 501625, 468504, 545121, 642731,
    448855, 641154, 608566, 591741, 650859,
    622608, 444468, 545064, 640470, 591971,
    553869, 650382, 650333, 621592, 622786,
    570717, 620454, 542364, 642578, 642279,
    660813, 620982, 622795, 650671,
  ];

  private rookiesCode = [
    650671, 642731, 621592, 602074, 650859,
    650333, 650382, 622786, 660761, 658648,
    600858, 640470

  ];

  private _url ='https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +  '&season=2019&hydrate=stats(type=season,season=2019,gameType=R)'


  // private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2018&hydrate=stats(type=season=2018),%20team(currentteam)';
  // private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2018&hydrate=stats(type=gameLog)';


  constructor(private http: HttpClient) { }

  // Obtencion de los datos de temporada de un solo jugador
  getPlayeActive(): Observable<StatsDayliPlayer> {
    return this.http.get<StatsDayliPlayer>(this._url);
  }
  getRookies2019(): Observable<StatsDayliPlayer> {
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


  getAllRookiesActives(): Observable<StatsDayliPlayer | undefined>[] {
    // tslint:disable-next-line:prefer-const
    let dataAllPlayers: Observable<StatsDayliPlayer | undefined>[] = [];
    // tslint:disable-next-line:prefer-const
    for (let code of this.rookiesCode) {
      this._url = this._url.replace(this.rookieCode.toString(), code.toString());
      // tslint:disable-next-line:prefer-const
      let dataP = this.getRookies2019();
      dataAllPlayers.push(dataP);
      this.rookieCode = code;
    }
    return dataAllPlayers;
  }




}
