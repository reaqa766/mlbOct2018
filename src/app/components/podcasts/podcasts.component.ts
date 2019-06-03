import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.css']
})
export class PodcastsComponent implements OnInit {

  location: string;
  num: string;


  selectedImg;
  imgs = [ {number: 1, url: '../../../../assets/EPISODIO1TalkBeisbol2daTemp2019.jpg'}, 
  {number: 2, url: '../../../../assets/EPISODIO2TalkBeisbol2daTemp2019.jpg'},
    {number: 3, url: '../../../../assets/EPISODIO3TalkBeisbol2daTemp2019.jpg'},
    {number: 4,url: '../../../../assets/EPISODIO4TalkBeisbol2daTemp2019pqno.jpg'},
    {number: 4,url: '../../../../assets/EPISODIO 5 Talk Beisbol 2da Temp. 2019.jpg'},
    // {number: 5, url: '../../../../assets/VENEZOLANOS MLB NUEVOS EQUIPOS 2019 2.jpg'},
    // {number: 6, url: '../../../../assets/VENEZOLANOS MLB NUEVOS EQUIPOS 2019 3.jpg'},
    // {number: 7, url: '../../../../assets/VENEZOLANOS MLB NUEVOS EQUIPOS 2019 4.jpg'},
    // {number: 8, url: '../../../../assets/JugadoresGLVZLAporEstados20181.jpg'},
    // {number: 9, url: '../../../../assets/INFOSPRINGTNATIONALEST.jpg'},
    // {number: 10, url: '../../../../assets/VZLAEQUIPOSNATIONALCENTRAL.jpg'},
    // {number: 11, url: '../../../../assets/INFO SPRING T NATIONAL WEST.jpg'},
    // {number: 12, url: '../../../../assets/INFO SPRING T AMERICAN ESTE.jpg'},
    // {number: 13, url: '../../../../assets/INFO SPRING T AMERICAN CENTRAL.jpg'},
    // {number: 14, url: '../../../../assets/INFO SPRING T AMERICAN WEST.jpg'},
    // {number: 15, url: '../../../../assets/CamisetasRonald2018.jpg'},
    // {number: 16, url: '../../../../assets/ALINEACION AMERICANA ESTE 2019.jpg'},
    // {number: 17, url: '../../../../assets/ALINEACION AMERICANA CENTRAL 2019.jpg'},
    // {number: 18, url: '../../../../assets/ALINEACION AMERICANA OESTE 2019.jpg'},
    // {number: 19, url: '../../../../assets/ALINEACION NACIONAL ESTE 2019.jpg'},
    // {number: 20, url: '../../../../assets/ALINEACION NACIONAL CENTRAL 2019.jpg'},
    // {number: 21, url: '../../../../assets/ALINEACION NACIONAL OESTE 2019.jpg'}
  ];


  constructor() { }

  ngOnInit() {
    
  }
  PodCast(i): void {
    if (i === 1) 
  {
    this.num = 'PodCast1';
  }
    else if (i === 2) 
  {
    this.num = 'PodCast2D';
  }
    else if (i === 3) 
  {
    this.num = 'PodCast3D';
  }
    else if (i === 4) 
  {
    this.num = 'PodCast4D';
  }
  {
    this.num = 'PodCast5D';
  }
}



  
  


  urladdress(): void {
    if (this.num === 'PodCast1') {
      window.open('https://talkbeisbol.podbean.com/e/episodio-1-segunda-temporada/', '_blank');
    } else if (this.num === 'PodCast2D') {
      window.open('https://talkbeisbol.podbean.com/e/episodio-2-segunda-temporada/', '_blank');
  } else if (this.num === 'PodCast3D') {
    window.open('https://talkbeisbol.podbean.com/e/episodio-3-segunda-temporada-1558100751/', '_blank');
  } else if (this.num === 'PodCast4D') {
    window.open('https://talkbeisbol.podbean.com/e/episodio-4-segunda-temporada-1558659319/', '_blank');
  } else if (this.num === 'PodCast5D') {
    window.open('https://talkbeisbol.podbean.com/e/episodio-5-segunda-temporada-1559233360/', '_blank');

  // } else if (this.num === 'PodCast2A') {
  //   window.open('https://www.mlb.com/es/nationals/PodCast/grand-slam-de-parra-en-la-8va', '_blank');
  // } else if (this.num === 'PodCast3A') {
  //   window.open('https://www.mlb.com/PodCast/prado-s-backhanded-stop', '_blank');
  // } else if (this.num === 'PodCast4A') {
  //   window.open('https://www.mlb.com/es/rockies/PodCast/marquez-does-it-on-each-side', '_blank');
  // } else if (this.num === 'PodCast2') {
  //   window.open('https://www.mlb.com/news/freddy-galvis-makes-barehand-catch', '_blank');
  // } else if (this.num === 'PodCast3') {
  //   window.open('https://www.mlb.com/es/PodCast/andrelton-simmons-lines-out-to-third-baseman-asdrubal-cabrera', '_blank');
  // } else if (this.num === 'PodCast4') {
  //   window.open('https://www.mlb.com/yankees/news/gleyber-torres-homers-twice-vs-orioles', '_blank');
  // } else if (this.num === 'PodCast21') {
  //   window.open('https://www.mlb.com/news/freddy-galvis-makes-barehand-catch', '_blank');
  // } else if (this.num === 'PodCast31') {
  //   window.open('https://www.mlb.com/es/PodCast/andrelton-simmons-lines-out-to-third-baseman-asdrubal-cabrera', '_blank');
  // } else if (this.num === 'PodCast41') {
  //   window.open('https://www.mlb.com/yankees/news/gleyber-torres-homers-twice-vs-orioles', '_blank');
  // } else if (this.num === 'PodCast5') {
  //   window.open('https://www.mlb.com/es/PodCast/bambinazo-de-altuve', '_blank');
  // } else if (this.num === 'PodCast6') {
  //   window.open('https://www.mlb.com/es/PodCast/willians-astudillo-homers-1-on-a-fly-ball-to-left-field', '_blank');
  // } else if (this.num === 'PodCast7') {
  //   window.open('https://www.mlb.com/es/PodCast/sandoval-pega-doble-impulsador', '_blank');
  }
  }

}
