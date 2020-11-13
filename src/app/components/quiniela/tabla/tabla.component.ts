import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  selectedImg;
  imgs = [ {number: 1, url: '../../../../assets/Tabla Wild Card Quiniela 2020 1.png'},
  {number: 2, url: '../../../../assets/Tabla Wild Card Quiniela 2020 2.png'},
    // {number: 3, url: '../../../../assets/Tabla Wild Card Quiniela 2020 3.png'}

  ];

// export class InfogShowComponent implements OnInit {
//   selectedImg;
//   imgs = [ {number: 1, url: '../../../../assets/CamisetasRonald2018.jpg'},
//     {number: 2, url: '../../../../assets/VZLA EN MLB LIGA AMERICANA.jpg'},
//     {number: 3, url: '../../../../assets/VZLA EN MLB LIGA NACIONAL.jpg'},
//     {number: 4, url: '../../../../assets/VENEZOLANOS MLB NUEVOS EQUIPOS 2019.jpg'},
//     {number: 5, url: '../../../../assets/VENEZOLANOS MLB NUEVOS EQUIPOS 2019 2.jpg'},
//     {number: 6, url: '../../../../assets/VENEZOLANOS MLB NUEVOS EQUIPOS 2019 3.jpg'},
//     {number: 7, url: '../../../../assets/VENEZOLANOS MLB NUEVOS EQUIPOS 2019 4.jpg'},
//     {number: 8, url: '../../../../assets/JugadoresGLVZLAporEstados20181.jpg'},
//     {number: 9, url: '../../../../assets/INFOSPRINGTNATIONALEST.jpg'},
//     {number: 10, url: '../../../../assets/VZLAEQUIPOSNATIONALCENTRAL.jpg'},
//     {number: 11, url: '../../../../assets/INFO SPRING T NATIONAL WEST.jpg'},
//     {number: 12, url: '../../../../assets/INFO SPRING T AMERICAN ESTE.jpg'},
//     {number: 13, url: '../../../../assets/INFO SPRING T AMERICAN CENTRAL.jpg'},
//     {number: 14, url: '../../../../assets/INFO SPRING T AMERICAN WEST.jpg'},
//     {number: 15, url: '../../../../assets/CamisetasRonald2018.jpg'},
//     {number: 16, url: '../../../../assets/ALINEACION AMERICANA ESTE 2019.jpg'},
//     {number: 17, url: '../../../../assets/ALINEACION AMERICANA CENTRAL 2019.jpg'},
//     {number: 18, url: '../../../../assets/ALINEACION AMERICANA OESTE 2019.jpg'},
//     {number: 19, url: '../../../../assets/ALINEACION NACIONAL ESTE 2019.jpg'},
//     {number: 20, url: '../../../../assets/ALINEACION NACIONAL CENTRAL 2019.jpg'},
//     {number: 21, url: '../../../../assets/ALINEACION NACIONAL OESTE 2019.jpg'}
//   ];

  constructor() { }

  ngOnInit() {
  }


  showMyImage(index) {
    this.selectedImg = this.imgs[index].url;
  }


}
