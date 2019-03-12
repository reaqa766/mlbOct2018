import { Component, OnInit } from '@angular/core';

<<<<<<< HEAD

=======
>>>>>>> c5796caf1334eed0a9b55d42cb32502a8aef9324
import { PruebaService } from '../../services/prueba.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../interfaces/players';
import CALEND1 from '../../../assets/JSONS/CALENDARIO_DIA_ESPECIFICO_JUEGOS';

import { PagerService } from '../../../services/index';
<<<<<<< HEAD


=======
import { PosicionesService } from 'src/app/services/posiciones.service';
>>>>>>> c5796caf1334eed0a9b55d42cb32502a8aef9324

@Component({
  selector: 'app-posiciones',
  templateUrl: './posiciones.component.html',
  styleUrls: ['./posiciones.component.css']
})
export class PosicionesComponent implements OnInit {
  data: any;
  ClLeague: any[];
  GlLeague: any[];



<<<<<<< HEAD
  constructor(private playerService: PruebaService, private pagerService: PagerService) { }


  ngOnInit() {
    this.data = CALEND1.dates[0].games;
=======
  constructor(private playerService: PruebaService, private pagerService: PagerService, private posicionesService: PosicionesService) { }


  async ngOnInit() {
    // this.data = CALEND1.dates[0].games;
    this.data = (await this.posicionesService.getTeamPositions()).dates[0].games;
>>>>>>> c5796caf1334eed0a9b55d42cb32502a8aef9324
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
