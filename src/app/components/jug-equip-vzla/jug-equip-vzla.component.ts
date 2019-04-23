import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jug-equip-vzla',
  templateUrl: './jug-equip-vzla.component.html',
  styleUrls: ['./jug-equip-vzla.component.css']
})
export class JugEquipVzlaComponent implements OnInit {
  selectedImg;
  jugadores = [ {codigo: 1, url: '../../../../assets/LEONES2.png', equipolvbp: 1},
    {codigo: 2, url: '../../../../assets/AGUILAS.png', equipolvbp: 1},
    {codigo: 3, url: '../../../../assets/ARAGUA.png', equipolvbp: 1},
    {codigo: 4, url: '../../../../assets/bravos_.png', equipolvbp: 1},
    {codigo: 5, url: '../../../../assets/cardenales.png', equipolvbp: 1},
    {codigo: 6, url: '../../../../assets/magallanes_.png', equipolvbp: 1},
    {codigo: 7, url: '../../../../assets/tiburones.png', equipolvbp: 1},
    {codigo: 8, url: '../../../../assets/CARIBES.png', equipolvbp: 1},
    // {codigo: 9, url: '../../../../assets/INFOSPRINGTNATIONALEST.jpg', equipolvbp: 1},
    // {codigo: 10, url: '../../../../assets/VZLAEQUIPOSNATIONALCENTRAL.jpg', equipolvbp: 1},
    // {codigo: 11, url: '../../../../assets/INFO SPRING T NATIONAL WEST.jpg', equipolvbp: 1},
    // {codigo: 12, url: '../../../../assets/INFO SPRING T AMERICAN ESTE.jpg', equipolvbp: 1},
    // {codigo: 13, url: '../../../../assets/INFO SPRING T AMERICAN CENTRAL.jpg', equipolvbp: 1},
    // {codigo: 14, url: '../../../../assets/INFO SPRING T AMERICAN WEST.jpg', equipolvbp: 1},
    // {codigo: 15, url: '../../../../assets/CamisetasRonald2018.jpg', equipolvbp: 1},
    // {codigo: 16, url: '../../../../assets/ALINEACION AMERICANA ESTE 2019.jpg', equipolvbp: 1},
    // {codigo: 17, url: '../../../../assets/ALINEACION AMERICANA CENTRAL 2019.jpg', equipolvbp: 1},
    // {codigo: 18, url: '../../../../assets/ALINEACION AMERICANA OESTE 2019.jpg', equipolvbp: 1},
    // {codigo: 19, url: '../../../../assets/ALINEACION NACIONAL ESTE 2019.jpg', equipolvbp: 1},
    // {codigo: 20, url: '../../../../assets/ALINEACION NACIONAL CENTRAL 2019.jpg', equipolvbp: 1},
    // {codigo: 21, url: '../../../../assets/ALINEACION NACIONAL OESTE 2019.jpg', equipolvbp: 1}
  ];

  constructor() { }

  ngOnInit() {
  }


  showMyImage(index) {
    this.selectedImg = this.jugadores[index].url;
  }


}
