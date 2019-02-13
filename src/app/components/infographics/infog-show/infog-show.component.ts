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
    this.img5 = !this.img4;

  }

  showMyImage_all() {
    this.img1 = false;
    this.img2 = false;
    this.img3 = false;
    this.img4 = false;
    this.img5 = false;

  }
}
