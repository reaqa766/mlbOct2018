import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infog-show',
  templateUrl: './infog-show.component.html',
  styleUrls: ['./infog-show.component.css']
})
export class InfogShowComponent implements OnInit {
  img1= false;
  img2= false;
  img3= false;

  constructor() { }

  ngOnInit() {
  }
  showMyImage1() {
    this.img1=!this.img1;    
  }
  showMyImage2() {
    this.img2=!this.img2;

  }
  showMyImage3() {
    this.img3=!this.img3;

  }

  showMyImage_all() {
    this.img1=false;    
    this.img2=false;
    this.img3=false;

  }
}
