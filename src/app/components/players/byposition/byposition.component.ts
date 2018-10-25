import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-byposition',
  templateUrl: './byposition.component.html',
  styleUrls: ['./byposition.component.css']
})
export class BypositionComponent implements OnInit {

  public searchText : string;
  public playerData : any;

  constructor() { }

  ngOnInit() {
    this.playerData = [
      {"Name": 'Ronald Acuña', "Team": 'Bravos de Atlanta', "Vb" : 410, "Avg" : 295, "Hits" : 195, "BB" : 65, "Strks" : 32, "Hr" : 25  },
      {"Name": 'Ender Inciarte', "Team": 'Bravos de Atlanta', "Vb" : 475, "Avg" : 295, "Hits" : 195, "BB" : 65, "Strks" : 32, "Hr" : 25  },
      {"Name": 'Ronald Acuña', "Team": 'Bravos de Atlanta', "Vb" : 410, "Avg" : 295, "Hits" : 195, "BB" : 65, "Strks" : 32, "Hr" : 25  },
      {"Name": 'Ronald Acuña', "Team": 'Bravos de Atlanta', "Vb" : 410, "Avg" : 295, "Hits" : 195, "BB" : 65, "Strks" : 32, "Hr" : 25  },
      {"Name": 'Ronald Acuña', "Team": 'Bravos de Atlanta', "Vb" : 410, "Avg" : 295, "Hits" : 195, "BB" : 65, "Strks" : 32, "Hr" : 25  },
      {"Name": 'Ronald Acuña', "Team": 'Bravos de Atlanta', "Vb" : 410, "Avg" : 295, "Hits" : 195, "BB" : 65, "Strks" : 32, "Hr" : 25  },
      {"Name": 'Ronald Acuña', "Team": 'Bravos de Atlanta', "Vb" : 410, "Avg" : 295, "Hits" : 195, "BB" : 65, "Strks" : 32, "Hr" : 25  },
    ]
  }
  }