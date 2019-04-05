import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppal',
  templateUrl: './ppal.component.html',
  styleUrls: ['./ppal.component.css']
})
export class PpalComponent implements OnInit {

  location: string;
  num: string;
  screenSize: Boolean = false;

  constructor() { }


  ngOnInit() {
    console.log('scrre', this.screenSize);
  }
  news1() {
    this.num = 'news1';
  }
  news2() {
    this.num = 'news2';
  }
  news3() {
    this.num = 'news3';
  }
  news4() {
    this.num = 'news4';
  }

//   urladdress(): void {
//            window.open('https://www.mlb.com/news/cardinals-open-to-trading-jose-martinez/c-301791482', '_blank');
//  }
  urladdress(): void {
    if (this.num === 'news1') {
          window.open('http://www.el-nacional.com/noticias/deportes/venezolanos-empezaron-mlb-tras-los-cortes-finales_276781', '_blank');
  } else if (this.num === 'news2') {
    window.open('https://www.mlb.com/es/news/informes-acuna-firmara-extension-de-us-100-millones', '_blank');
  } else if (this.num === 'news3') {
    window.open('https://www.cbssports.com/mlb/players/playerpage/2122215/elias-diaz', '_blank');
  } else if (this.num === 'news4') {
    // tslint:disable-next-line:max-line-length
    window.open('https://www.mlb.com/yankees/news/gleyber-torres-homers-twice-vs-orioles', '_blank');
  }
  }
screenTest(): void {
  if (screen.width < 767) {
   this.screenSize = true;
}
}
}
