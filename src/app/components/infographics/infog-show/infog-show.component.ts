import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infog-show',
  templateUrl: './infog-show.component.html',
  styleUrls: ['./infog-show.component.css']
})
export class InfogShowComponent implements OnInit {
  selectedImg;
  imgs=[{number:1, url: '../../../../assets/VZLA EN MLB PORTADA.jpg'},
    {number:2, url:'../../../../assets/VZLA EN MLB LIGA NACIONAL.jpg'},
    {number:3, url:'../../../../assets/VZLA EN MLB LIGA AMERICANA.jpg'},
    {number:4, url:'../../../../assets/JugadoresGLVZLAporEstados20181.jpg'},
     {number:5, url:'../../../../assets/INFOSPRINGTNATIONALEST.jpg'},
     {number:6, url:'../../../../assets/VZLAEQUIPOSNATIONALCENTRAL.jpg'},
     {number:7, url:'../../../../assets/INFO SPRING T NATIONAL WEST.jpg'},
     {number:8, url:'../../../../assets/INFO SPRING T AMERICAN ESTE.jpg'},
     {number:9, url:'../../../../assets/INFO SPRING T AMERICAN CENTRAL.jpg'},
     {number:10, url:'../../../../assets/INFO SPRING T AMERICAN WEST.jpg'},
     {number:11, url:'../../../../assets/VENEZOLANOS MLB NUEVOS EQUIPOS 2019.jpg'},
     {number:12, url:'../../../../assets/VENEZOLANOS MLB NUEVOS EQUIPOS 2019 2.jpg'},
     {number:13, url:'../../../../assets/VENEZOLANOS MLB NUEVOS EQUIPOS 2019 3.jpg'},
     {number:14, url:'../../../../assets/VENEZOLANOS MLB NUEVOS EQUIPOS 2019 4.jpg'}
  ]

  constructor() { }

  ngOnInit() {
  }


  showMyImage(index) {
    this.selectedImg = this.imgs[index].url;
  }


}
