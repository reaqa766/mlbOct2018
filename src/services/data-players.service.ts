import { Injectable } from '@angular/core';
import { Stats } from '../interfaces/stats';
import { APIResponse } from '../interfaces/response';
import { Players } from '../interfaces/players';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StatsDayliPlayer } from '../interfaces/stats-dayli-player';



@Injectable({
  providedIn: 'root'
})
export class DataPlayersService {
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
    650402, 660670, 542583, 514888, 503556,
    542255, 444489, 501303, 621237, 462101,
    516472, 606115, 553902, 641319, 501593,
    620439, 453923, 611093, 593993, 452678,
    408234, 471911, 620454, 605612, 465041,
    468504, 455139, 630023, 575929, 571035,
    553869, 444876, 500871, 527038, 521655,
    520471, 541645, 491646, 554054, 471865,
     492802, 448855, 514917, 622694,
    433587, 491676, 546318, 500872, 506702,
    446653, 641154, 553988, 608566, 500874,
    400121, 622795, 471083, 591672, 622382,
    553882, 600524, 596059, 542364, 591741,
    622161, 467827, 444482, 606299, 542208,
    541650, 527048, 521692, 463610, 433589,
    517369, 445988, 591693, 467092, 622682,
    593958, 600965, 500743, 541652, 444468,
    602922, 614179, 506703, 434671, 570560,
    467055, 623993, 596143, 622608, 462515,
    500208, 553993, 624133, 491696, 542513,
    624636, 591720, 472528, 591971, 545121,
    553878, 622713

  ]

  private gameCode = [
    531368,
    // 531824,
    // 531829,
    // 531825,
    // 531833,
    // 531835,
  ]


  private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode +  '&season=2018&hydrate=stats(type=gameLog)';
  // private _url6 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2018&hydrate=stats(type=season=2018),%20team(currentteam)';


  constructor(private http: HttpClient) { }

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
      let dataP2 = this.getPlayerDaily2();
      dataAllPlayers2.push(dataP2);
      this.playerCode = code;
    }
    return dataAllPlayers2
  }


}






