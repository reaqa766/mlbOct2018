import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Players } from '../../interfaces/players';
import { StatsDayliPlayer } from '../../interfaces/stats-dayli-player';
import playerData from '../../assets/data';
// import _MixedPlayersCodes from '../../assets/JSONS/MixedPlayersIds'
import _dominicanPlayersCodes from '../../assets/JSONS/dominicanPlayersIds';



import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersfantasyService {
  playerCode = 596115;

  public dominicanPlayersCodes;
  // public MixedPlayersCodes;

  private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2021&hydrate=stats(group=pitching,type=season,season=2021,gameType=R)'
  //private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2020&hydrate=stats(group=pitching,type=season,season=2020,gameType=R)'
  //private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2020&hydrate=stats(group=pitching,type=season,season=2020,gameType=S)'

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
  // private playersCode = [
  //   600524, 602922, 570560, 408234, 541600,
  //   455139, 501303, 503556, 542255, 492802,
  //   650402, 553882, 541645, 462101, 452678,
  //   596059, 520471, 500874, 467055, 602074,
  //   514917, 467092, 605612, 445988, 446653,
  //   444489, 542583, 606115, 506703, 591971,
  //   500743, 606299, 553993, 575929, 660670,
  //   444482, 500871, 545121, 570717, 541650,
  //   506702, 467827, 620439, 642731, 542364,
  //   553869, 623993, 650333, 465041, 514888,
  //   642279, 527038, 433587, 491676, 553902,
  //   517369, 620443, 517369, 656024,
  //   665561, 542419,
  //           517369,
  //           433217, 471865, 500208, 521692,
  //           542513, 578570, 591712, 591720,
  //           593993, 600902, 608422, 620443,
  //           630034, 640492, 640902, 641319,
  //           641645, 645305, 647351, 650658,
  //           650660, 650883, 658668, 660614,
  //           660688, 661388, 665861, 665926,
  //           666023, 686780
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
  // private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2020&hydrate=stats(type=season=2020),%20team(currentteam)';
  // private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2018&hydrate=stats(type=gameLog)';


  constructor(private http: HttpClient) {
    this.dominicanPlayersCodes = _dominicanPlayersCodes;

   }

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
  getAllPlayersActivesFtsy(): Observable<StatsDayliPlayer | undefined>[] {
    let dataAllPlayers: Observable<StatsDayliPlayer | undefined>[] = [];
    for (let code of this.dominicanPlayersCodes) {
      this._url = this._url.replace(this.playerCode.toString(), code.toString());
      let dataP = this.getPlayeActive();
      dataAllPlayers.push(dataP);
      this.playerCode = code;
    }
    return dataAllPlayers;
  }

  getAllPlayersActivesOffline(): any[] {
    let dataAllPlayers: any[] = [];
    for (let code of this.dominicanPlayersCodes) {
      let dataP = this.getPlayeActiveOffline(code);
      dataAllPlayers.push(dataP);
    }
    return dataAllPlayers;
  }

}
