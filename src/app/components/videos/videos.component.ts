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
    window.open('https://www.mlb.com/news/astros-top-a-s-on-walk-off-walk', '_blank');
  } else if (this.num === 'video3') {
    window.open('http://www.liderendeportes.com/noticias/baseball/miguel-cabrera-en-pos-de-las-1-700-remolcadas/', '_blank');
  } else if (this.num === 'video4') {
    window.open('https://www.mlb.com/yankees/news/gleyber-torres-homers-twice-vs-orioles', '_blank');
  }
  }

}
