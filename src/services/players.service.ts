import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Players } from '../interfaces/players';
import { StatsDayliPlayer } from '../interfaces/stats-dayli-player';
import playerData from '../assets/data';

import { Observable } from 'rxjs';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { take } from 'rxjs-compat/operator/take';
import { first } from 'rxjs/operators';
import { async } from 'q';
import _venezuelanPlayersCodes2019 from '../assets/JSONS/venezuelanPlayersIds2019.'
import _dominicanPlayersCodes from '../assets/JSONS/dominicanPlayersIds';
import _venezuelanPlayersCodes from '../assets/JSONS/venezuelanPlayersIds'
import _dominicanPlayersCodes2019 from '../assets/JSONS/dominicanPlayersIds2019';


@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  // getAllPlayersDailyQExtra() {
  //   throw new Error('Method not implemented.');
  // }
  playerCode = 596115;
  venezuelanPlayersCollection: AngularFirestoreCollection<any>;
  dominicanPlayersCollection: AngularFirestoreCollection<any>;

  public venezuelanPlayersCodes;
  public dominicanPlayersCodes;
  public venezuelanPlayersCodes2019;
  public dominicanPlayersCodes2019;

  private playersCodeQ = [
    640449, 665487, 650333, 592518, 596059,
    575929, 547180, 519317, 502110, 514888,
    595879, 665742, 605141, 624413, 571448,
    408234, 641355, 592885, 553993, 592450,
    650402, 545361, 660670, 646240, 488726,
  ]

  private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2021&hydrate=stats(group=hitting,type=season,season=2021,gameType=S)';
  //private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2020&hydrate=stats(group=hitting,type=season,season=2020,gameType=R)';
  // private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2020&hydrate=stats(group=hitting,type=season,season=2020,gameType=S)';
  private _url2 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2020&hydrate=stats(type=season,season=2020,gameType=S)';
  // private _url2 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2019&hydrate=stats(group=hitting,type=season,season=2019,gameType=R)'


  constructor(private http: HttpClient, private afs: AngularFirestore) {
    this.venezuelanPlayersCollection = this.afs.collection('venezuelans');
    this.dominicanPlayersCollection = this.afs.collection('dominicans');
    this.venezuelanPlayersCodes = _venezuelanPlayersCodes;
    this.dominicanPlayersCodes = _dominicanPlayersCodes;
    this.venezuelanPlayersCodes2019 = _venezuelanPlayersCodes2019;
    this.dominicanPlayersCodes2019 = _dominicanPlayersCodes2019;
  }

  // Searchs for Season Training Venezuelan and Dominican Players
  // Para obtener los IDs de todos los jugadores o Venezolanos o Diminicanos, Cualquiera de los 3 
  async getIdsJSON() {

    const getPlayerByCountry = async (country) => {
      // Fetch all players from current season
      const response: any = await this.http.get('https://statsapi.mlb.com/api/v1/sports/1/players?season=2021&gameType=S').toPromise();
      //const response: any = await this.http.get('https://statsapi.mlb.com/api/v1/sports/1/players?season=2020&gameType=R').toPromise();
     // const response: any = await this.http.get('https://statsapi.mlb.com/api/v1/sports/1/players?season=2019&gameType=R').toPromise();
      // const response: any = await this.http.get('https://statsapi.mlb.com/api/v1/sports/1/players?season=2020&gameType=S').toPromise();
      const allPlayers = response.people;

      // Filter by country
      // const filteredPlayers = allPlayers.filter(player => (player.active));
      const filteredPlayers = allPlayers.filter(player => (player.birthCountry === country && player.active));

      // Map to get only ids
      const playerIds = filteredPlayers.map(player => {
        const { firstName, lastName, fullName, id, birthDate, currentAge } = player;
        const position = player.primaryPosition.abbreviation
        const teamId = player.currentTeam.id;
        const batSide = player.batSide.code;
        const pitchHand = player.pitchHand.code;
        // const {data: {teams: {name: teamName}}} = await axios.get(`https://statsapi.mlb.com/api/v1/teams/${teamId}`);


        return id;
      });

      return playerIds;
    }

    const dominicanPlayers = await getPlayerByCountry('Dominican Republic');
    const venezuelanPlayers = await getPlayerByCountry('Venezuela');
    console.log(JSON.stringify(venezuelanPlayers),'VENEZUELAN');
    // console.log(JSON.stringify(dominicanPlayers));
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

  // Para colocar todos los Json en un solo array. Genera Observables
  getAllPlayersActivesQ(): Observable<StatsDayliPlayer | undefined>[] {
    let dataAllPlayers: Observable<StatsDayliPlayer | undefined>[] = [];
    for (let code of this.playersCodeQ) {
      this._url = this._url.replace(this.playerCode.toString(), code.toString());
      let dataP = this.getPlayeActive();
      dataAllPlayers.push(dataP);
      this.playerCode = code;
    }


    return dataAllPlayers;
  }

  getAllPlayersActivesOffline(): any[] {
    let dataAllPlayers: any[] = [];
    for (let code of this.venezuelanPlayersCodes) {
      let dataP = this.getPlayeActiveOffline(code);
      dataAllPlayers.push(dataP);
    }
    return dataAllPlayers;

  }
  getPlayeActive2019(): Observable<StatsDayliPlayer> {
    return this.http.get<StatsDayliPlayer>(this._url2);
  }

  // Para colocar todos los Json en un solo array. Genera Observables
  getAllPlayersActives2019(): Observable<StatsDayliPlayer | undefined>[] {
    let dataAllPlayers: Observable<StatsDayliPlayer | undefined>[] = [];
    for (let code of this.venezuelanPlayersCodes2019) {
      this._url2 = this._url2.replace(this.playerCode.toString(), code.toString());
      let dataP = this.getPlayeActive2019();
      dataAllPlayers.push(dataP);
      this.playerCode = code;
    }


    return dataAllPlayers;
  }

}
