import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infog-show',
  templateUrl: './infog-show.component.html',
  styleUrls: ['./infog-show.component.css']
})
export class InfogShowComponent implements OnInit {
  selectedImg;
  imgs = [ {number: 1, url: '../../../../assets/Barajitas/BEugenioSuarez.png'},
      {number: 2, url: '../../../../assets/Barajitas/BAndresGimenez.png'},
      {number: 3, url: '../../../../assets/Barajitas/BAnthonySantander.png'},
      {number: 4, url: '../../../../assets/Barajitas/BCarlosHernandez.png'},
      {number: 5, url: '../../../../assets/Barajitas/BDarwinzon Hernandez.png'},
      {number: 6, url: '../../../../assets/Barajitas/BDavidPeralta.png'},
      {number: 7, url: '../../../../assets/Barajitas/BEduardoEscobar.png'},
      {number: 8, url: '../../../../assets/Barajitas/BJoseAltuve.png'},
      {number: 9, url: '../../../../assets/Barajitas/BJoseAlvarado.png'},
      {number: 10, url: '../../../../assets/Barajitas/BGleyberTorres.png'},
      {number: 11, url: '../../../../assets/Barajitas/BSalvadorPerez.png'},
      {number: 12, url: '../../../../assets/Barajitas/BSilvinoBracho.png'},
      // {number: 2, url: '../../../../assets/Barajitas/BAndresGimenez.png'},
      // {number: 2, url: '../../../../assets/Barajitas/BAndresGimenez.png'},
      // {number: 2, url: '../../../../assets/Barajitas/BAndresGimenez.png'},
      // {number: 2, url: '../../../../assets/Barajitas/BAndresGimenez.png'},
      // {number: 2, url: '../../../../assets/Barajitas/BAndresGimenez.png'},
      // {number: 2, url: '../../../../assets/Barajitas/BAndresGimenez.png'},
      // {number: 2, url: '../../../../assets/Barajitas/BAndresGimenez.png'},
      // {number: 2, url: '../../../../assets/Barajitas/BAndresGimenez.png'},
      // {number: 2, url: '../../../../assets/Barajitas/BAndresGimenez.png'},
      // {number: 2, url: '../../../../assets/Barajitas/BAndresGimenez.png'},
      // {number: 2, url: '../../../../assets/Barajitas/BAndresGimenez.png'},
      // {number: 2, url: '../../../../assets/Barajitas/BAndresGimenez.png'},


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
