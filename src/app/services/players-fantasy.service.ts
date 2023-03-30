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
import _dominicansVenezuelansPlayersCodes from '../../assets/JSONS/DominicansVenezuelansIds';

@Injectable({
  providedIn: 'root'
})
export class PlayersFantasyService {

  playerCode = 596115;
  venezuelanPlayersCollection: AngularFirestoreCollection<any>;
  dominicanPlayersCollection: AngularFirestoreCollection<any>;
  venezuelandominicanPlayersCollection: AngularFirestoreCollection<any>;

  public venezuelanPlayersCodes;
  public dominicanPlayersCodes;
  public dominicansVenezuelansPlayersCodes;


  private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2023&hydrate=stats(group=hitting,type=season,season=2023,gameType=R)'


  constructor(private http: HttpClient, private afs: AngularFirestore) {
    this.venezuelanPlayersCollection = this.afs.collection('venezuelans');
    this.dominicanPlayersCollection = this.afs.collection('dominicans');
    this.venezuelanPlayersCodes = _venezuelanPlayersCodes;
    this.dominicanPlayersCodes = _dominicanPlayersCodes;
    this.dominicansVenezuelansPlayersCodes = _dominicansVenezuelansPlayersCodes ;
  }

  // Searchs for Season Training Venezuelan and Dominican Players
  async getIdsJSON() {

    const getPlayerByCountry = async (country) => {
      // Fetch all players from current season
      const response: any = await this.http.get('https://statsapi.mlb.com/api/v1/sports/1/players?season=2023&gameType=S').toPromise();
     // const response: any = await this.http.get('https://statsapi.mlb.com/api/v1/sports/1/players?season=2019&gameType=R').toPromise();
      const allPlayers = response.people;

      // Filter by country
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
    console.log(JSON.stringify(venezuelanPlayers));
    console.log(JSON.stringify(dominicanPlayers));
  }

  // Obtencion de los datos de temporada de un solo jugador
  getPlayeActive19(): Observable<StatsDayliPlayer> {
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
  getAllPlayersActives19(): Observable<StatsDayliPlayer | undefined>[] {
    let dataAllPlayers: Observable<StatsDayliPlayer | undefined>[] = [];
    for (let code of this.dominicansVenezuelansPlayersCodes) {
      this._url = this._url.replace(this.playerCode.toString(), code.toString());
      let dataP = this.getPlayeActive19();
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

    // Para colocar todos los Json en un solo array. Genera Observables
    getAllPlayersActives20(): Observable<StatsDayliPlayer | undefined>[] {
      let dataAllPlayers: Observable<StatsDayliPlayer | undefined>[] = [];
      for (let code of this.venezuelanPlayersCodes) {
        this._url = this._url.replace(this.playerCode.toString(), code.toString());
        let dataP = this.getPlayeActive19();
        dataAllPlayers.push(dataP);
        this.playerCode = code;
      }


      return dataAllPlayers;
    }




}
