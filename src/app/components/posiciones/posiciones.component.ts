import { Component, OnInit } from '@angular/core';


import { PruebaService } from '../../services/prueba.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../interfaces/players';
import CALEND1 from '../../../assets/JSONS/CALENDARIO_DIA_ESPECIFICO_JUEGOS';

import { PagerService } from '../../../services/index';



@Component({
  selector: 'app-posiciones',
  templateUrl: './posiciones.component.html',
  styleUrls: ['./posiciones.component.css']
})
export class PosicionesComponent implements OnInit {
  data: any;
  ClLeague: any[];
  GlLeague: any[];



  constructor(private playerService: PruebaService, private pagerService: PagerService) { }


  ngOnInit() {
    this.data = CALEND1.dates[0].games;
    this.ClLeague = [];
    this.GlLeague = [];
    for (const game of this.data) {
      if (game.teams.away.springLeague.id === 115) {
        if (!this.GlLeague.some((a) => {
          return a.team.name === game.teams.away.team.name;
        })) {
          this.GlLeague.push(game.teams.away);
        }
        if (!this.GlLeague.some((a) => {
          return a.team.name === game.teams.home.team.name;
        })) {
        this.GlLeague.push(game.teams.home);
        }

      } else {
        if (!this.ClLeague.some((a) => {
          return a.team.name === game.teams.away.team.name;
        })) {
          this.ClLeague.push(game.teams.away);
        }
        if (!this.ClLeague.some((a) => {
          return a.team.name === game.teams.home.team.name;
        })) {
          this.ClLeague.push(game.teams.home);
        }

      }
    }
    this.positionTeams();

    }

positionTeams() {
  this.GlLeague.sort((a, b) => {
    if (a.leagueRecord.pct > b.leagueRecord.pct) {
      return -1;

    } else  if (a.leagueRecord.pct < b.leagueRecord.pct) {
      return 1;
    } else  {
      return 0;
    }
  });
  this.ClLeague.sort((a, b) => {
    if (a.leagueRecord.pct > b.leagueRecord.pct) {
      return -1;

    } else  if (a.leagueRecord.pct < b.leagueRecord.pct) {
      return 1;
    } else  {
      return 0;
    }
  });

}


}
