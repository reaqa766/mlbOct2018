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
  ClLeague: any[];
  GlLeague: any[];
  AllLeague: Boolean;
  CALEND2: {};
  _url = 'https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&season=2019&standingsTypes=springTraining';


  constructor(private playerService: PruebaService, 
    private pagerService: PagerService, 
    private posicionesService: PosicionesService,
    private http: HttpClient) { }

  async ngOnInit() {
       
    this.ClLeague= [];
    this.GlLeague= [];
    this.AllLeague = true;

    this.CALEND2 = await this.http.get(this._url).toPromise();

    for (let tpos of this.CALEND2.records) {
      for(let team of tpos.teamRecords){
        if(team.team.springLeague.id === 115){
          this.ClLeague.push({
            name: team.team.name, 
            wins: team.leagueRecord.wins,
            losses: team.leagueRecord.losses, 
            pct: team.leagueRecord.pct, 
            teamId: team.team.id, 
          });
        } else{
          this.GlLeague.push({
            name: team.team.name, 
            wins: team.leagueRecord.wins,
            losses: team.leagueRecord.losses, 
            pct: team.leagueRecord.pct, 
            teamId: team.team.id, 
          });
        }
      }
   
    }
    this.positionTeams();


            console.log('ClLeague', this.ClLeague);
            console.log('GlLeague', this.GlLeague);
            console.log('CALEND2', this.CALEND2);
    

    }

positionTeams() {
  this.GlLeague.sort((a, b) => {
    if (a.pct > b.pct) {
      return -1;

    } else  if (a.pct < b.pct) {
      return 1;
    } else  {
      return 0;
    }
  });
  this.ClLeague.sort((a, b) => {
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