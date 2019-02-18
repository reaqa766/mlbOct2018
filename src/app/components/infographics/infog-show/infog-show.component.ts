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
     {number:5, url:'../../../../assets/INFOSPRINGTNATIONALEST.png'},
     {number:6, url:'../../../../assets/VZLAEQUIPOSNATIONALCENTRAL.jpg'},
     {number:7, url:'../../../../assets/VENEZOLANOS MLB NUEVOS EQUIPOS 2019.jpg'},
     {number:8, url:'../../../../assets/VENEZOLANOS MLB NUEVOS EQUIPOS 2019 2.jpg'},
     {number:9, url:'../../../../assets/VENEZOLANOS MLB NUEVOS EQUIPOS 2019 3.jpg'},
     {number:9, url:'../../../../assets/VENEZOLANOS MLB NUEVOS EQUIPOS 2019 4.jpg'}
  ]

  constructor() { }

  ngOnInit() {
  }


  showMyImage(index) {
    this.selectedImg = this.imgs[index].url;
  }


}
