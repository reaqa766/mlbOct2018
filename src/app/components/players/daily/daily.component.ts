import { Component, OnInit } from '@angular/core';

import { PlayersService } from '../../../../services/players.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../../interfaces/players';


@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {
  public players = [];
  groups: any;
  selectedGroup: any;
  elarray: any;
  datesN: number = 10;
  searchText: string;
  playerAuxList = [];
  counter: number;
  n: number;
  m: number;
  n1: number = 12;
  n10: number = 5;

  playersList = [
    {name:"Jose Altuve",
    position : "segunda base"},
    
    {name : "Gleyber Torres",
    position : "segunda base"},

    {name : "Ronald Acuña Jr.",
    position : "Leftfield"},

    {name : "Ender Inciarte",
    position : "Centerfield"}

  ]

  // public searchText : string;
  // public playerData : any;

  constructor(private playerService: PlayersService) { }

  // ngOnInit() {
//     this.playerData = [
//       {"Name": 'Ronald Acuña', "Team": 'Bravos de Atlanta', "Vb" : 4, "CA" : 2,"CI" : 2, "Avg" : 295, "Hits" : 2, "BB" : 2, "Strks" : 2, "Hr" : 1  },
//       {"Name": 'Ender Inciarte', "Team": 'Bravos de Atlanta', "Vb" : 5, "CA" : 0, "CI" : 0, "Avg" : 295, "Hits" : 3, "BB" : 1, "Strks" : 0, "Hr" : 0 },
//       {"Name": 'Ronald Acuña', "Team": 'Bravos de Atlanta', "Vb" : 3, "CA" : 0, "CI" : 1, "Avg" : 295, "Hits" : 2, "BB" : 1, "Strks" : 1, "Hr" : 1  },
//       {"Name": 'Ronald Acuña', "Team": 'Bravos de Atlanta', "Vb" : 4, "CA" : 1, "CI" : 1, "Avg" : 295, "Hits" : 1, "BB" : 0, "Strks" : 1, "Hr" : 0  },
//       {"Name": 'Ronald Acuña', "Team": 'Bravos de Atlanta', "Vb" : 4, "CA" : 2, "CI" : 0, "Avg" : 295, "Hits" : 1, "BB" : 0, "Strks" : 0, "Hr" : 0  },
//       {"Name": 'Ronald Acuña', "Team": 'Bravos de Atlanta', "Vb" : 5, "CA" : 1, "CI" : 0, "Avg" : 295, "Hits" : 0, "BB" : 1, "Strks" : 0, "Hr" : 0  },
//       {"Name": 'Ronald Acuña', "Team": 'Bravos de Atlanta', "Vb" : 6, "CA" : 1, "CI" : 3, "Avg" : 295, "Hits" : 0, "BB" : 0, "Strks" : 0, "Hr" : 0  },
//     ]
// }


  ngOnInit() {
  this.playerService.getPlayerDaily();
  this.getPlayersMap();
  console.log('playersDaily', this.players);
  
  // this.playerAuxList=this.playersList;
  // if (this.counter=1) {
    
  // }
}

//Convertir el Array de Observables a un Array de Objetos. Seleccionar los items necesarios del nuevo Array (con todo el contenido del Json) y colocarlos en un nuevo Array
getPlayersMap() {
  let InfoObsPlayer = this.playerService.getAllPlayersDaily();
  let index = 0;
  for (let obs of InfoObsPlayer) {
    obs.pipe(take(1)).subscribe(res => {
      this.players.push(res);
      // console.log('active2', res);
      
      
      if ((InfoObsPlayer.length - 1) === index) {
        this.players = this.players.map(player => {
          const newPlayer: Players = {};
          Object.assign(newPlayer, player.people[0]);
          return newPlayer;
        });
      }
      index++;
    })
  }
  
}
}
