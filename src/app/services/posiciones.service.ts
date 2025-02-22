import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { Players } from '../../interfaces/players';
import { StatsDayliPlayer } from '../../interfaces/stats-dayli-player';
import playerData from '../../assets/data';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PosicionesService { playerCode = 596115;




  private fecha = moment().format('YYYY-MM-DD').toString();

  private _url ='http://statsapi.mlb.com/api/v1/schedule?sportId=1&startDate=' + this.fecha + '&endDate=' + this.fecha + '&hydrate=team,linescore,flags,liveLookin,person,stats,probablePitcher,game(content(summary,media(epg)),tickets)&language=en'
  private _url2 ='https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&season=2025&standingsTypes=regularSeason,springTraining,firstHalf,secondHalf&hydrate=division,conference,sport,league,team(nextSchedule(team,gameType=[R,F,D,L,W,C],inclusive=false),previousSchedule(team,gameType=[R,F,D,L,W,C],inclusive=true))'




  constructor(private http: HttpClient) { }

  // Obtencion de los datos de temporada de un solo jugador
  getPlayeActive(): Observable<StatsDayliPlayer> {
    return this.http.get<StatsDayliPlayer>(this._url);
  }

  getTeamPositions() {
    return this.http.get(this._url2).toPromise();
  }



  // Para colocar todos los Json en un solo array. Genera Observables
  // getAllPlayersActives(): Observable<StatsDayliPlayer | undefined>[] {
  //   let dataAllPlayers: Observable<StatsDayliPlayer | undefined>[] = [];
  //   for (let code of this.playersCode) {
  //     this._url = this._url.replace(this.playerCode.toString(), code.toString());
  //     const dataP = this.getPlayeActive();
  //     dataAllPlayers.push(dataP);
  //     this.playerCode = code;
  //   }
  //   return dataAllPlayers;
  // }

  // getAllPlayersActivesOffline(): any[] {
  //   let dataAllPlayers: any[] = [];
  //   for (let code of this.playersCode) {
  //     let dataP = this.getPlayeActiveOffline(code);
  //     dataAllPlayers.push(dataP);
  //   }
  //   return dataAllPlayers;
  // }

}
