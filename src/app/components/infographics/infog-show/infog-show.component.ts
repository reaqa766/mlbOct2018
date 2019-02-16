import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infog-show',
  templateUrl: './infog-show.component.html',
  styleUrls: ['./infog-show.component.css']
})
export class InfogShowComponent implements OnInit {
  img1 = false;
  img2 = false;
  img3 = false;
  img4 = false;
  img5 = false;
  img6 = false;
  img7 = false;
  img8 = false;
  img9 = false;
  img10 = false;

  constructor() { }

  ngOnInit() {
  }
  showMyImage1() {
    this.img1 = !this.img1;
  }
  showMyImage2() {
    this.img2 = !this.img2;

  }
  showMyImage3() {
    this.img3 = !this.img3;

  }
  showMyImage4() {
    this.img4 = !this.img4;

  }
  showMyImage5() {
    this.img5 = !this.img5;

  }
  showMyImage6() {
    this.img6 = !this.img6;

  }
  showMyImage7() {
    this.img7 = !this.img7;

  }
  showMyImage8() {
    this.img8 = !this.img8;

  }
  showMyImage9() {
    this.img9 = !this.img9;

  }
  showMyImage10() {
    this.img10 = !this.img10;

  }

  showMyImage_all() {
    this.img1 = false;
    this.img2 = false;
    this.img3 = false;
    this.img4 = false;
    this.img5 = false;
    this.img6 = false;
    this.img7 = false;
    this.img8 = false;
    this.img9 = false;
    this.img10 = false;

  }
}
