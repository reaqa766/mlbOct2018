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
          window.open('http://elsumario.com/miguel-cabrera-obtiene-segundo-lugar-con-mayores-hits-en-las-grandes-ligas/', '_blank');
  } else if (this.num === 'news2') {
    window.open('http://www.el-nacional.com/noticias/beisbol/antonio-senzatela-elias-diaz-jose-osuna-empiezan-lista-lesionados_276774', '_blank');
  } else if (this.num === 'news3') {
    // tslint:disable-next-line:max-line-length
    window.open('https://www.eldiariodeguayana.com.ve/venezolanos-van-por-la-gloria-en-una-nueva-temporada-en-las-grandes-ligas/', '_blank');
  } else if (this.num === 'news4') {
    // tslint:disable-next-line:max-line-length
    window.open('https://www.mlb.com/news/jhoulys-chacin-homer-opening-day', '_blank');
  } else if (this.num === 'news5') {
    // tslint:disable-next-line:max-line-length
    window.open('https://www.12up.com/es/posts/6256619-los-5-mejores-prospectos-venezolanos-de-las-grandes-ligas-en-2019', '_blank');
  } else if (this.num === 'news6') {
    // tslint:disable-next-line:max-line-length
    window.open('https://www.sportsvenezuela.com/jose-altuve-brillo-como-un-astro-en-el-dia-inaugural-video/', '_blank');
  } else if (this.num === 'news7') {
    // tslint:disable-next-line:max-line-length
    window.open('https://beisbolplay.americadigital.com/2019/01/22/asdrubal-cabrera-firmo-con-rangers/', '_blank');
  }
}
}
