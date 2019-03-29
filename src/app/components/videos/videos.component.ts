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


  urladdress(): void {
    if (this.num === 'video1') {
          window.open('https://www.mlb.com/video/miles-mikolas-in-play-runs-s-to-jhoulys-chacin', '_blank');
  } else if (this.num === 'video2') {
    window.open('https://www.mlb.com/es/video/acuna-jr-s-rbi-single', '_blank');
  } else if (this.num === 'video3') {
    window.open('https://www.mlb.com/es/video/jose-altuve-homers-1-on-a-fly-ball-to-left-center-field', '_blank');
  } else if (this.num === 'video4') {
    window.open('https://www.mlb.com/es/video/peraza-s-game-tying-single-c2523781383', '_blank');
  }
  }

}
