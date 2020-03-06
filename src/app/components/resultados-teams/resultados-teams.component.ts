import { Component, OnInit } from '@angular/core';

import { PruebaService } from '../../services/prueba.service';

import { PagerService } from '../../../services/index';
import { HttpClient } from '@angular/common/http';
import { PosicionesService } from 'src/app/services/posiciones.service';

import * as moment from 'moment';


@Component({
  selector: 'app-resultados-teams',
  templateUrl: './resultados-teams.component.html',
  styleUrls: ['./resultados-teams.component.css']
})
export class ResultadosTeamsComponent implements OnInit {
  dia = moment().format('YYYY-MM-DD');
  diaAnt = moment().format('YYYY-MM-DD');
  diaAnte = moment(this.diaAnt).subtract(1, 'day').format('YYYY-MM-DD')
  diaAnterior = moment(this.diaAnt).subtract(1, 'day').format('YYYY-MM-DD')

  data: any;
  AllResult: any[];

  AllLeague: Boolean;
  CALEND3: any;
  _url = 'https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&season=2019&standingsTypes=regularSeason';
  // _url = 'https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&season=2019&standingsTypes=springTraining';
  _url1 = 'https://statsapi.mlb.com/api/v1/schedule?sportId=1,51&date=' + this.dia + '&gameTypes=E,S,R,A,F,D,L,W&hydrate=team(linescore(matchup,runners))&useLatestGames=false&language=en&leagueId=103,104,420';

  constructor(private playerService: PruebaService,
    private pagerService: PagerService,
    private posicionesService: PosicionesService,
    private http: HttpClient) { }

  async ngOnInit() {

    this.AllResult=[];


    this.CALEND3 = await this.http.get(this._url1).toPromise();
    // console.log('CALEND3', this.CALEND3);
    for (let result of this.CALEND3.dates[0].games) {
      // if(tpos.division.id === 200){
      // for(let team of tpos.teamRecords){
          this.AllResult.push({
            name1: result.teams.away.team.abbreviation,
            Id1: result.teams.away.team.id,
            Id2: result.teams.home.team.id,
            name2: result.teams.home.team.abbreviation,
            score1: result.teams.away.score,
            score2: result.teams.home.score,
            record1Losses: result.teams.away.leagueRecord.losses,
            record1Wins: result.teams.away.leagueRecord.wins,
            record1Pct: result.teams.away.leagueRecord.pct,
            record2Losses: result.teams.home.leagueRecord.losses,
            record2Wins: result.teams.home.leagueRecord.wins,
            record2Pct: result.teams.home.leagueRecord.pct,
            status: result.status.statusCode
          });}


}
}
