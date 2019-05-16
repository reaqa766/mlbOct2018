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
          window.open('https://www.mlb.com/es/news/hr-de-torres-ayuda-a-ny-a-barrer-doble-jornada', '_blank');
  } else if (this.num === 'video2A') {
    window.open('https://www.mlb.com/video/dylan-floro-in-play-run-s-to-gerardo-parra', '_blank');
  } else if (this.num === 'video3A') {
    window.open('https://www.mlb.com/video/prado-s-backhanded-stop', '_blank');
  } else if (this.num === 'video4A') {
    window.open('https://www.mlb.com/news/ronald-acuna-jr-hits-game-winning-home-run', '_blank');
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
