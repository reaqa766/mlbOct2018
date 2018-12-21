import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppal',
  templateUrl: './ppal.component.html',
  styleUrls: ['./ppal.component.css']
})
export class PpalComponent implements OnInit {

  location: string;
  num: string;

  constructor() { }

  ngOnInit() {
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
          window.open('https://www.mlb.com/news/cardinals-open-to-trading-jose-martinez/c-301791482', '_blank');
  } else if (this.num === 'news2') {
    window.open('https://www.mlb.com/es/news/ny-busca-ser-creativo-en-busca-de-realmuto/c-301840382', '_blank');
  } else if (this.num === 'news3') {
    window.open('https://www.mlb.com/es/news/ausmus-buscara-un-balance-para-pujols-y-ohtani/c-301831468', '_blank');
  } else if (this.num === 'news4') {
    window.open('https://www.mlb.com/es/news/cuatro-abridores-aptos-para-cualquier-rotacion/c-301851598', '_blank');
  }
  }
}
