import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
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
  news5() {
    this.num = 'news5';
  }
  news6() {
    this.num = 'news6';
  }
  news7() {
    this.num = 'news7';
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
    // tslint:disable-next-line:max-line-length
    window.open('http://www.espn.com.ve/beisbol/nota/_/id/5077318/tigres-miguel-cabrera-dividira-labores-en-1b-y-como-bateador-designado', '_blank');
  } else if (this.num === 'news5') {
    // tslint:disable-next-line:max-line-length
    window.open('http://www.espn.com.ve/beisbol/nota/_/id/5079474/edwin-encarnacion-a-seattle-carlos-santana-retorna-a-cleveland', '_blank');
  } else if (this.num === 'news6') {
    // tslint:disable-next-line:max-line-length
    window.open('http://www.espn.com.ve/beisbol/nota/_/id/5080034/brewers-adquieren-a-pitcher-boricua-alex-claudio-de-los-rangers', '_blank');
  } else if (this.num === 'news7') {
    // tslint:disable-next-line:max-line-length
    window.open('http://www.espn.com.ve/beisbol/nota/_/id/5077441/azulejos-tienen-certeza-de-que-vladimir-guerrero-jr-debutara-en-gl-durante-2019', '_blank');
  }
}
}
