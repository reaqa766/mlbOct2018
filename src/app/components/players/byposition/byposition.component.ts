import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../../../services/players.service';
import { take } from 'rxjs/operators';
import { Players } from '../../../../interfaces/players';


@Component({
  selector: 'app-byposition',
  templateUrl: './byposition.component.html',
  styleUrls: ['./byposition.component.css']
})
export class BypositionComponent implements OnInit {


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
    {
      name: "Jose Altuve",
      position: "segunda base"
    },

    {
      name: "Gleyber Torres",
      position: "segunda base"
    },

    {
      name: "Ronald Acuña Jr.",
      position: "Leftfield"
    },

    {
      name: "Ender Inciarte",
      position: "Centerfield"
    }

  ]

  isLoading: boolean;

  constructor(private playerService: PlayersService) { }

  ngOnInit() {
    this.isLoading = true;
    // this.playerService.getPlayerDaily();
    this.getPlayersMap();
    // console.log('players', this.players);
  }


  //Convertir el Array de Observables a un Array de Objetos. Seleccionar los items necesarios del nuevo Array (con todo el contenido del Json) y colocarlos en un nuevo Array
  getPlayersMap() {
    let InfoObsPlayer = this.playerService.getAllPlayersActives();
    let index = 0;
    for (let obs of InfoObsPlayer) {
      obs.pipe(take(1)).subscribe(res => {
        this.players.push(res);

        if ((InfoObsPlayer.length - 1) === index) {
          this.players = this.players.map(player => {
            const newPlayer: Players = {};
            Object.assign(newPlayer, player.people[0]);
            return newPlayer;
          })
            .sort(({ fullName: a }, { fullName: b }) => {
              if (a > b) {
                return 1;
              } else if (a < b) {
                return -1;
              } else if (a === b) {
                return 0;
              }
            });
          this.isLoading = false;
          // console.log(JSON.stringify(this.players[0]));
        }
        index++;
      })
    }

  }
  get filterPlayers() {

    return this.searchText ?

      this.players.filter(player =>
        player.stats[0].splits[0].team.name.toLowerCase().includes(this.searchText) ||
        player.primaryPosition.abbreviation.toLowerCase().includes(this.searchText) ||
        player.fullName.toLowerCase().includes(this.searchText) ||
        player.primaryPosition.abbreviation.toLowerCase().includes(this.searchText))

      : this.players;
  }
}
