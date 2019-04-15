import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../../../services/prueba.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../../interfaces/players';
import LIDERES from '../../../../assets/JSONS/ESTADISTICAS_DE_LIDERES';
import VenezolanosActivos from '../../../../assets/JSONS/VenezolanosActivos';

import { PagerService } from '../../../../services/index';
import { HttpClient } from '@angular/common/http';
import { PosicionesService } from 'src/app/services/posiciones.service';

import * as moment from 'moment';



@Component({
  selector: 'app-pruebajsons',
  templateUrl: './pruebajsons.component.html',
  styleUrls: ['./pruebajsons.component.css']
})
export class PruebajsonsComponent implements OnInit {

  dia = moment().format('YYYY-MM-DD');
  diaAnt = moment().format('YYYY-MM-DD');
  diaAnte = moment(this.diaAnt).subtract(1, 'day').format('YYYY-MM-DD')
  diaAnterior = moment(this.diaAnt).subtract(1, 'day').format('YYYY-MM-DD')

  data: any;
  // ClLeague: any[];
  // GlLeague: any[];
  nlEast: any[];
  nlCentral: any[];
  nlWest: any[];
  alEast: any[];
  alCentral: any[];
  alWest: any[];
  AllResult: any[];

  AllLeague: Boolean;
  CALEND2: any;
  CALEND3: any;
  _url = 'https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&season=2019&standingsTypes=regularSeason';
  // _url = 'https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&season=2019&standingsTypes=springTraining';
  _url1 = 'https://statsapi.mlb.com/api/v1/schedule?sportId=1,51&date=' + this.diaAnterior + '&gameTypes=E,S,R,A,F,D,L,W&hydrate=team(linescore(matchup,runners))&useLatestGames=false&language=en&leagueId=103,104,420';

  constructor(private playerService: PruebaService,
    private pagerService: PagerService,
    private posicionesService: PosicionesService,
    private http: HttpClient) { }

  async ngOnInit() {

    // this.ClLeague= [];
    // this.GlLeague= [];
    // this.AllLeague = true;
    this.nlEast=[];
    this.nlCentral=[];
    this.nlWest=[];
    this.alEast=[];
    this.alCentral=[];
    this.alWest=[];
    this.AllResult=[];


    this.CALEND3 = await this.http.get(this._url1).toPromise();
    console.log('CALEND3', this.CALEND3);
    for (let result of this.CALEND3.dates[0].games) {
      // if(tpos.division.id === 200){
      // for(let team of tpos.teamRecords){
          this.AllResult.push({
            name1: result.teams.away.team.name,
            name2: result.teams.home.team.name,
            score1: result.teams.away.score,
            score2: result.teams.home.score,
            record1Losses: result.teams.away.leagueRecord.losses,
            record1Wins: result.teams.away.leagueRecord.wins,
            record1Pct: result.teams.away.leagueRecord.pct,
            record2Losses: result.teams.home.leagueRecord.losses,
            record2Wins: result.teams.home.leagueRecord.wins,
            record2Pct: result.teams.home.leagueRecord.pct,
          });}



    this.CALEND2 = await this.http.get(this._url).toPromise();

    // console.log('CALEND2', this.CALEND2);

    for (let tpos of this.CALEND2.records) {
      if(tpos.division.id === 200){
      for(let team of tpos.teamRecords){
          this.alWest.push({
            name: team.team.name,
            wins: team.leagueRecord.wins,
            losses: team.leagueRecord.losses,
            pct: team.leagueRecord.pct,
            teamId: team.team.id,
            gamesBack: team.gamesBack,
          });}}
         if(tpos.division.id === 201) {
          for(let team of tpos.teamRecords){
          this.alEast.push({
            name: team.team.name,
            wins: team.leagueRecord.wins,
            losses: team.leagueRecord.losses,
            pct: team.leagueRecord.pct,
            teamId: team.team.id,
            gamesBack: team.gamesBack,

          });} }

          if(tpos.division.id=== 202) {
            for(let team of tpos.teamRecords){
          this.alCentral.push({
            name: team.team.name,
            wins: team.leagueRecord.wins,
            losses: team.leagueRecord.losses,
            pct: team.leagueRecord.pct,
            teamId: team.team.id,
            gamesBack: team.gamesBack,

          });}}
          if(tpos.division.id=== 203) {
            for(let team of tpos.teamRecords){
          this.nlWest.push({
            name: team.team.name,
            wins: team.leagueRecord.wins,
            losses: team.leagueRecord.losses,
            pct: team.leagueRecord.pct,
            teamId: team.team.id,
            gamesBack: team.gamesBack,

          });}}
          if(tpos.division.id=== 204) {
            for(let team of tpos.teamRecords){
          this.nlEast.push({
            name: team.team.name,
            wins: team.leagueRecord.wins,
            losses: team.leagueRecord.losses,
            pct: team.leagueRecord.pct,
            teamId: team.team.id,
            gamesBack: team.gamesBack,
          });}}
        if(tpos.division.id === 205) {
          for(let team of tpos.teamRecords){
          this.nlCentral.push({
            name: team.team.name,
            wins: team.leagueRecord.wins,
            losses: team.leagueRecord.losses,
            pct: team.leagueRecord.pct,
            teamId: team.team.id,
            gamesBack: team.gamesBack,
          });}}




    this.positionTeams();


            // console.log('ClLeague', this.ClLeague);
            // console.log('GlLeague', this.GlLeague);
            console.log('CALEND2', this.CALEND2);


    }}

positionTeams() {
  this.nlEast.sort((a, b) => {
    if (a.pct > b.pct) {
      return -1;

    } else  if (a.pct < b.pct) {
      return 1;
    } else  {
      return 0;
    }
  });
  this.nlWest.sort((a, b) => {
    if (a.pct > b.pct) {
      return -1;

    } else  if (a.pct < b.pct) {
      return 1;
    } else  {
      return 0;
    }
  });
  this.nlCentral.sort((a, b) => {
    if (a.pct > b.pct) {
      return -1;

    } else  if (a.pct < b.pct) {
      return 1;
    } else  {
      return 0;
    }
  });
  this.alWest.sort((a, b) => {
    if (a.pct > b.pct) {
      return -1;

    } else  if (a.pct < b.pct) {
      return 1;
    } else  {
      return 0;
    }
  });
  this.alEast.sort((a, b) => {
    if (a.pct > b.pct) {
      return -1;

    } else  if (a.pct < b.pct) {
      return 1;
    } else  {
      return 0;
    }
  });
  this.alCentral.sort((a, b) => {
    if (a.pct > b.pct) {
      return -1;

    } else  if (a.pct < b.pct) {
      return 1;
    } else  {
      return 0;
    }
  });
}

}
