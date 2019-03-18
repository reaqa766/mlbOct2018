import { Component, OnInit } from '@angular/core';

import { PruebaService } from '../../services/prueba.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../interfaces/players';
import CALEND1 from '../../../assets/JSONS/CALENDARIO_DIA_ESPECIFICO_JUEGOS';

import { PagerService } from '../../../services/index';
import { PosicionesService } from 'src/app/services/posiciones.service';

@Component({
  selector: 'app-posiciones',
  templateUrl: './posiciones.component.html',
  styleUrls: ['./posiciones.component.css']
})
export class PosicionesComponent implements OnInit {
  data: any;
  ClLeague: any[];
  GlLeague: any[];



  constructor(private playerService: PruebaService, private pagerService: PagerService, private posicionesService: PosicionesService) { }


  async ngOnInit() {

    console.log('CALEND1', CALEND1);
    // console.log('CALEND1', CALEND1.records[0].teamRecords[0].leagueRecord.wins);
    const teamsPosition1 = CALEND1.records[0].teamRecords;
    const teamsPosition2 = CALEND1.records[1].teamRecords;
    const teamsPosition3 = CALEND1.records[2].teamRecords;
    const teamsPosition4 = CALEND1.records[3].teamRecords;
    const teamsPosition5 = CALEND1.records[4].teamRecords;
    const teamsPosition6 = CALEND1.records[5].teamRecords;

    this.ClLeague= [];
    this.GlLeague= [];
  

    for (let team of teamsPosition1) {
     if (team.team.springLeague.id === 115) {

      this.ClLeague.push(team.team.name, team.leagueRecord.wins,team.leagueRecord.losses, team.leagueRecord.pct, team.team.springLeague.id  )  

          } else {
            this.GlLeague.push(team.team.name, team.leagueRecord.wins,team.leagueRecord.losses, team.leagueRecord.pct, team.team.springLeague.id  )  

          }
        }
        console.log('ClLeague', this.ClLeague);
        console.log('GlLeague', this.GlLeague);

    for (let team of teamsPosition2) {
      if (team.team.springLeague.id === 115) {

        this.ClLeague.push(team.team.name, team.leagueRecord.wins,team.leagueRecord.losses, team.leagueRecord.pct, team.team.springLeague.id  )  
  
            } else {
              this.GlLeague.push(team.team.name, team.leagueRecord.wins,team.leagueRecord.losses, team.leagueRecord.pct, team.team.springLeague.id  )  
  
            }
            }
    for (let team of teamsPosition3) {
      if (team.team.springLeague.id === 115) {

        this.ClLeague.push(team.team.name, team.leagueRecord.wins,team.leagueRecord.losses, team.leagueRecord.pct, team.team.springLeague.id  )  
  
            } else {
              this.GlLeague.push(team.team.name, team.leagueRecord.wins,team.leagueRecord.losses, team.leagueRecord.pct, team.team.springLeague.id  )  
  
            }
            }
    for (let team of teamsPosition4) {
      if (team.team.springLeague.id === 115) {

        this.ClLeague.push(team.team.name, team.leagueRecord.wins,team.leagueRecord.losses, team.leagueRecord.pct, team.team.springLeague.id  )  
  
            } else {
              this.GlLeague.push(team.team.name, team.leagueRecord.wins,team.leagueRecord.losses, team.leagueRecord.pct, team.team.springLeague.id  )  
  
            }
            }
    for (let team of teamsPosition5) {
      if (team.team.springLeague.id === 115) {

        this.ClLeague.push(team.team.name, team.leagueRecord.wins,team.leagueRecord.losses, team.leagueRecord.pct, team.team.springLeague.id  )  
  
            } else {
              this.GlLeague.push(team.team.name, team.leagueRecord.wins,team.leagueRecord.losses, team.leagueRecord.pct, team.team.springLeague.id  )  
  
            }
            }
    for (let team of teamsPosition6) {
      if (team.team.springLeague.id === 115) {

        this.ClLeague.push(team.team.name, team.leagueRecord.wins,team.leagueRecord.losses, team.leagueRecord.pct, team.team.springLeague.id  )  
  
            } else {
              this.GlLeague.push(team.team.name, team.leagueRecord.wins,team.leagueRecord.losses, team.leagueRecord.pct, team.team.springLeague.id  )  
  
            }
            }
            console.log('ClLeague', this.ClLeague);
            console.log('GlLeague', this.GlLeague);
    
//     this.data = CALEND1.records.teamRecords.leagueRecords;
//     // this.data = CALEND1.dates[0].games;
//     // this.data = (await this.posicionesService.getTeamPositions()).dates[0].games;
//     this.ClLeague = [];
//     this.GlLeague = [];
//     for (const game of this.data) {
//       if (teamRecords.teams.springLeague.id === 115) {
//         if (!this.GlLeague.some((a) => {
//           return a.team.name === game.teams.away.team.name;
//         })) {
//           this.GlLeague.push(game.teams.away);
//         }
//         if (!this.GlLeague.some((a) => {
//           return a.team.name === game.teams.home.team.name;
//         })) {
//         this.GlLeague.push(game.teams.home);
//         }

//       } else {
//         if (!this.ClLeague.some((a) => {
//           return a.team.name === game.teams.away.team.name;
//         })) {
//           this.ClLeague.push(game.teams.away);
//         }
//         if (!this.ClLeague.some((a) => {
//           return a.team.name === game.teams.home.team.name;
//         })) {
//           this.ClLeague.push(game.teams.home);
//         }

//       }
//     }
//     this.positionTeams();

//     }

// positionTeams() {
//   this.GlLeague.sort((a, b) => {
//     if (a.leagueRecord.pct > b.leagueRecord.pct) {
//       return -1;

//     } else  if (a.leagueRecord.pct < b.leagueRecord.pct) {
//       return 1;
//     } else  {
//       return 0;
//     }
//   });
//   this.ClLeague.sort((a, b) => {
//     if (a.leagueRecord.pct > b.leagueRecord.pct) {
//       return -1;

//     } else  if (a.leagueRecord.pct < b.leagueRecord.pct) {
//       return 1;
//     } else  {
//       return 0;
//     }
//   });

// }


}}
