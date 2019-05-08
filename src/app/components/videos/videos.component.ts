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
          window.open('https://www.mlb.com/video/joey-gallo-strikes-out-swinging?t=got-your-back', '_blank');
  } else if (this.num === 'video2') {
    window.open('https://www.mlb.com/video/cabrera-s-stellar-game-vs-jays', '_blank');
  } else if (this.num === 'video3') {
    window.open('https://www.mlb.com/video/prado-s-backhanded-stop', '_blank');
  } else if (this.num === 'video4') {
    window.open('https://www.mlb.com/video/zack-greinke-in-play-run-s-to-german-marquez', '_blank');
  } else if (this.num === 'video2') {
    window.open('https://www.mlb.com/news/freddy-galvis-makes-barehand-catch', '_blank');
  } else if (this.num === 'video3') {
    window.open('https://www.mlb.com/es/video/andrelton-simmons-lines-out-to-third-baseman-asdrubal-cabrera', '_blank');
  } else if (this.num === 'video4') {
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
