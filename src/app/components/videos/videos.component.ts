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
          window.open('https://www.mlb.com/es/video/acuna-jrs-first-mlb-hit/c-1975744283', '_blank');
  } else if (this.num === 'video2') {
    window.open('https://www.mlb.com/es/braves/video/inciarte-le-roba-hr-a-kingery/c-1951398783', '_blank');
  } else if (this.num === 'video3') {
    window.open('https://www.mlb.com/es/video/altuve-le-roba-a-didi/c-1863165983', '_blank');
  } else if (this.num === 'video4') {
    window.open('https://www.mlb.com/indians/news/carlos-carrasco-strikes-out-11-in-indians-win/c-292349332', '_blank');
  }
  }

}
