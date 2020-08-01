import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  location: string;
  num: string;

  constructor() { }

  ngOnInit() {
  }
  video1() {
    this.num = 'video1';
  }
  video2E() {
    this.num = 'video2E';
  }
  video3E() {
    this.num = 'video3E';
  }
  video4E() {
    this.num = 'video4E';
  }
  video2D() {
    this.num = 'video2D';
  }
  video3D() {
    this.num = 'video3D';
  }
  video4D() {
    this.num = 'video4D';
  }
  video2A() {
    this.num = 'video2A';
  }
  video3A() {
    this.num = 'video3A';
  }
  video4A() {
    this.num = 'video4A';
  }
  video2() {
    this.num = 'video2';
  }
  video3() {
    this.num = 'video3';
  }
  video4() {
    this.num = 'video4';
  }
  video21() {
    this.num = 'video21';
  }
  video31() {
    this.num = 'video31';
  }
  video41() {
    this.num = 'video41';
  }
  video5() {
    this.num = 'video5';
  }
  video6() {
    this.num = 'video6';
  }
  video7() {
    this.num = 'video7';
  }


  urladdress(): void {
    if (this.num === 'video1') {
          window.open('https://www.mlb.com/es/news/gleyber-torres-golpeado-en-el-codo');
  } else if (this.num === 'video2E') {
    window.open('https://www.mlb.com/video/cargo-s-nice-sliding-catch', '_blank');
  } else if (this.num === 'video3E') {
    window.open('https://www.mlb.com/es/news/garcia-impulso-a-rays-con-hr-dentro-del-parque', '_blank');
  } else if (this.num === 'video4E') {
    window.open('https://www.mlb.com/es/news/hr-arcia-corona-remontada-milwaukee', '_blank');
  } else if (this.num === 'video2D') {
    window.open('https://www.mlb.com/es/news/ronald-acuna-prende-los-motores-como-primer-bate', '_blank');
  } else if (this.num === 'video3D') {
    window.open('https://www.mlb.com/video/tim-anderson-grounds-out-sharply-shortstop-freddy-galvis-to-first-baseman-rowdy-', '_blank');
  } else if (this.num === 'video4D') {
    window.open('https://www.mlb.com/es/news/hr-de-torres-ayuda-a-ny-a-barrer-doble-jornada', '_blank');
  } else if (this.num === 'video2A') {
    window.open('https://www.mlb.com/es/nationals/video/grand-slam-de-parra-en-la-8va', '_blank');
  } else if (this.num === 'video3A') {
    window.open('https://www.mlb.com/video/prado-s-backhanded-stop', '_blank');
  } else if (this.num === 'video4A') {
    window.open('https://www.mlb.com/es/rockies/video/marquez-does-it-on-each-side', '_blank');
  } else if (this.num === 'video2') {
    window.open('https://www.mlb.com/news/freddy-galvis-makes-barehand-catch', '_blank');
  } else if (this.num === 'video3') {
    window.open('https://www.mlb.com/es/video/andrelton-simmons-lines-out-to-third-baseman-asdrubal-cabrera', '_blank');
  } else if (this.num === 'video4') {
    window.open('https://www.mlb.com/yankees/news/gleyber-torres-homers-twice-vs-orioles', '_blank');
  } else if (this.num === 'video21') {
    window.open('https://www.mlb.com/news/freddy-galvis-makes-barehand-catch', '_blank');
  } else if (this.num === 'video31') {
    window.open('https://www.mlb.com/es/video/andrelton-simmons-lines-out-to-third-baseman-asdrubal-cabrera', '_blank');
  } else if (this.num === 'video41') {
    window.open('https://www.mlb.com/yankees/news/gleyber-torres-homers-twice-vs-orioles', '_blank');
  } else if (this.num === 'video5') {
    window.open('https://www.mlb.com/es/video/bambinazo-de-altuve', '_blank');
  } else if (this.num === 'video6') {
    window.open('https://www.mlb.com/es/video/willians-astudillo-homers-1-on-a-fly-ball-to-left-field', '_blank');
  } else if (this.num === 'video7') {
    window.open('https://www.mlb.com/es/video/sandoval-pega-doble-impulsador', '_blank');
  }
  }

}
