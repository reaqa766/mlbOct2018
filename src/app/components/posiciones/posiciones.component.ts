import { Component, OnInit } from '@angular/core';

import { PruebaService } from '../../services/prueba.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../interfaces/players';
import CALEND1 from '../../../assets/JSONS/CALENDARIO_DIA_ESPECIFICO_JUEGOS';

import { PagerService } from '../../../services/index';
import { PosicionesService } from 'src/app/services/posiciones.service';
import { LoginComponent } from '../user/login/login.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-posiciones',
  templateUrl: './posiciones.component.html',
  styleUrls: ['./posiciones.component.css']
})
export class PosicionesComponent implements OnInit {
  data: any;
  // ClLeague: any[];
  // GlLeague: any[];
  nlEast: any[];
  nlCentral: any[];
  nlWest: any[];
  alEast: any[];
  alCentral: any[];
  alWest: any[];

  AllLeague: Boolean;
  CALEND2: any;
  _url = 'https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&season=2019&standingsTypes=regularSeason';
  // _url = 'https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&season=2019&standingsTypes=springTraining';

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





    this.CALEND2 = await this.http.get(this._url).toPromise();

    console.log('CALEND2', this.CALEND2);

    for (let tpos of this.CALEND2.records) {
      if(tpos.division.id === 200){
      for(let team of tpos.teamRecords){
          this.alWest.push({
            name: team.team.name,
            wins: team.leagueRecord.wins,
            losses: team.leagueRecord.losses,
            pct: team.leagueRecord.pct,
            teamId: team.team.id,
          });}}
         if(tpos.division.id === 201) {
          for(let team of tpos.teamRecords){
          this.alEast.push({
            name: team.team.name,
            wins: team.leagueRecord.wins,
            losses: team.leagueRecord.losses,
            pct: team.leagueRecord.pct,
            teamId: team.team.id,
          });} }

          if(tpos.division.id=== 202) {
            for(let team of tpos.teamRecords){
          this.alCentral.push({
            name: team.team.name,
            wins: team.leagueRecord.wins,
            losses: team.leagueRecord.losses,
            pct: team.leagueRecord.pct,
            teamId: team.team.id,
          });}}
          if(tpos.division.id=== 203) {
            for(let team of tpos.teamRecords){
          this.nlWest.push({
            name: team.team.name,
            wins: team.leagueRecord.wins,
            losses: team.leagueRecord.losses,
            pct: team.leagueRecord.pct,
            teamId: team.team.id,
          });}}
          if(tpos.division.id=== 204) {
            for(let team of tpos.teamRecords){
          this.nlEast.push({
            name: team.team.name,
            wins: team.leagueRecord.wins,
            losses: team.leagueRecord.losses,
            pct: team.leagueRecord.pct,
            teamId: team.team.id,
          });}}
        if(tpos.division.id === 205) {
          for(let team of tpos.teamRecords){
          this.nlCentral.push({
            name: team.team.name,
            wins: team.leagueRecord.wins,
            losses: team.leagueRecord.losses,
            pct: team.leagueRecord.pct,
            teamId: team.team.id,
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
