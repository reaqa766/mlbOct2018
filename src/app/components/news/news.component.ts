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
          // tslint:disable-next-line:max-line-length
          window.open('https://www.mlb.com/es/news/que-se-puede-esperar-del-venezolano-gleyber-torres-en-grandes-ligas/c-273383100', '_blank');
  } else if (this.num === 'news2') {
    window.open('https://www.directvsports.com/beisbol/mlb/noticias/cuando-comienza-temporada-2019-mlb', '_blank');
  } else if (this.num === 'news3') {
    // tslint:disable-next-line:max-line-length
    window.open('https://www.mlb.com/es/news/keibert-ruiz-tiene-los-bonos-bien-altos-en-los-dodgers-como-receptor-del-futuro/c-302632976', '_blank');
  } else if (this.num === 'news4') {
    // tslint:disable-next-line:max-line-length
    window.open('http://www.espn.com.ve/beisbol/nota/_/id/5077318/tigres-miguel-cabrera-dividira-labores-en-1b-y-como-bateador-designado', '_blank');
  } else if (this.num === 'news5') {
    // tslint:disable-next-line:max-line-length
    window.open('https://www.12up.com/es/posts/6256619-los-5-mejores-prospectos-venezolanos-de-las-grandes-ligas-en-2019', '_blank');
  } else if (this.num === 'news6') {
    // tslint:disable-next-line:max-line-length
    window.open('https://www.mlb.com/news/d-backs-agree-to-terms-with-wilmer-flores-on-a-1-year-contract/c-302952200', '_blank');
  } else if (this.num === 'news7') {
    // tslint:disable-next-line:max-line-length
    window.open('https://beisbolplay.americadigital.com/2019/01/22/asdrubal-cabrera-firmo-con-rangers/', '_blank');
  }
}
}
