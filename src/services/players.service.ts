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
    // 640449, 665487, 650333, 592518, 596059,
    // 575929, 547180, 519317, 502110, 514888,
    // 595879, 665742, 605141, 624413, 571448,
    // 408234, 641355, 592885, 553993, 592450,
    // 650402, 545361, 660670, 646240, 488726,
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
    622786, 806956, 666200, 647351
  ]

  private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2025&hydrate=stats(group=hitting,type=season,season=2025,gameType=S)';
  // private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2021&hydrate=stats(group=hitting,type=season,season=2021,gameType=S)';
  //private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2020&hydrate=stats(group=hitting,type=season,season=2020,gameType=S)';
  // private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2020&hydrate=stats(group=hitting,type=season,season=2020,gameType=S)';
  private _url2 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2025&hydrate=stats(type=season,season=2025,gameType=S)';
  // private _url2 = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2019&hydrate=stats(group=hitting,type=season,season=2019,gameType=S)'


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
      const response: any = await this.http.get('https://statsapi.mlb.com/api/v1/sports/1/players?season=2025&gameType=S').toPromise();
      // const response: any = await this.http.get('https://statsapi.mlb.com/api/v1/sports/14/players?season=2025&gameType=S').toPromise();  LIGAS MENORES AAA

      
      // https://statsapi.mlb.com/api/v1/sports/1/players?season=2023&gameType=S
      // const response: any = await this.http.get('https://statsapi.mlb.com/api/v1/sports/1/players?season=2021&gameType=S').toPromise();
      //const response: any = await this.http.get('https://statsapi.mlb.com/api/v1/sports/1/players?season=2020&gameType=S').toPromise();
     // const response: any = await this.http.get('https://statsapi.mlb.com/api/v1/sports/1/players?season=2019&gameType=S').toPromise();
      // const response: any = await this.http.get('https://statsapi.mlb.com/api/v1/sports/1/players?season=2020&gameType=S').toPromise();
      const allPlayers = response.people;

      console.log(allPlayers,"Todos Ligas Mayores")

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
      console.log(playerIds, "vzla22");


      return playerIds;

    }

    const dominicanPlayers = await getPlayerByCountry('Dominican Republic');
    const venezuelanPlayers = await getPlayerByCountry('Venezuela');
    const cubanPlayers = await getPlayerByCountry('Cuba');

    // const venezuelanPlayers = await getPlayerByCountry('Venezuela');
    const venezuelanIds = JSON.stringify(venezuelanPlayers);
    console.log(venezuelanPlayers,'VENEZUELAN CODS');
     console.log(JSON.stringify(cubanPlayers),'CUBAN');

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
      //  for (let code of venezuelanPlayers) {
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
