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
  video2() {
    this.num = 'video2';
  }
  video3() {
    this.num = 'video3';
  }
  video4() {
    this.num = 'video4';
  }
  video5() {
    this.num = 'video5';
  }
  video31() {
    this.num = 'video31';
  }
  video41() {
    this.num = 'video41';
  }
  video51() {
    this.num = 'video51';
  }
  video6() {
    this.num = 'video6';
  }
  video7() {
    this.num = 'video7';
  }
  video8() {
    this.num = 'video8';
  }

  urladdress(): void {
    if (this.num === 'video2') {
          window.open('http://www.el-nacional.com/noticias/beisbol/zurdo-jose-quijada-nuevo-grandeliga-venezuela_280192', '_blank');
  } else if (this.num === 'video3') {
    window.open('https://beisbol.estrending.com/2019/04/24/en-toronto-estan-preocupados-por-la-salud-de-freddy-galvis/', '_blank');
  } else if (this.num === 'video4') {
    window.open('https://www.sportsvenezuela.com/cuatro-venezolanos-guiaron-paliza-de-arizona-sobre-los-piratas-pittsburgh/', '_blank');
  } else if (this.num === 'video5') {
    window.open('http://www.el-nacional.com/noticias/beisbol/boston-sube-las-mayores-prospecto-guayanes-darwinzon-hernandez_280193', '_blank');
  } else if (this.num === 'video31') {
    window.open('https://beisbol.estrending.com/2019/04/10/altuve-lleva-cuatro-jonrones-en-tres-dias/', '_blank');
  } else if (this.num === 'video41') {
    window.open('https://beisbol.estrending.com/2019/04/12/con-los-ganchos-hasta-cuando-llamaremos-cafecito-a-jose-martinez/', '_blank');
  } else if (this.num === 'video51') {
    window.open('https://www.sportsvenezuela.com/acuna-salio-de-las-sombras-del-ponche-a-la-luz-del-triunfovideo/', '_blank');
  } else if (this.num === 'video6') {
    window.open('https://www.mlb.com/news/jose-martinez-filling-void-in-cardinals-lineup', '_blank');
  } else if (this.num === 'video7') {
    window.open('http://www.elsoldemargarita.com.ve/posts/post/id:218125/Acu%C3%B1a-jonronea-y-Bravos-salen-airosos-en-Denver', '_blank');
  } else if (this.num === 'video8') {
    window.open('https://www.albat.com/lasmayores/Gleyber-Torres-empata-marca-del-legendario-Yankee-Joe-DiMaggio--20190404-0023.html', '_blank');
  }
  }

}































  //   location: string;
//   num: string;

//   constructor() { }

//   ngOnInit() {
//   }
//   news1() {
//     this.num = 'news1';
//   }
//   news2() {
//     this.num = 'news2';

//   }

//   news3() {
//     this.num = 'news3';
//   }
//   news4() {
//     this.num = 'news4';
//   }
//   news5() {
//     this.num = 'news5';
//   }
//   news6() {
//     this.num = 'news6';
//   }
//   news7() {
//     this.num = 'news7';
//   }

// //   urladdress(): void {
// //            window.open('https://www.mlb.com/news/cardinals-open-to-trading-jose-martinez/c-301791482', '_blank');
// //  }
//   urladdress(): void {
//     if (this.num === 'news1') {
//           // tslint:disable-next-line:max-line-length
//           window.open('http://elsumario.com/miguel-cabrera-obtiene-segundo-lugar-con-mayores-hits-en-las-grandes-ligas/', '_blank');
//   } else if (this.num === 'news2') {
//     window.open('http://www.el-nacional.com/noticias/beisbol/antonio-senzatela-elias-diaz-jose-osuna-empiezan-lista-lesionados_276774', '_blank');
//   } else if (this.num === 'news3') {
//     // tslint:disable-next-line:max-line-length
//     window.open('https://www.eldiariodeguayana.com.ve/venezolanos-van-por-la-gloria-en-una-nueva-temporada-en-las-grandes-ligas/', '_blank');
//   } else if (this.num === 'news4') {
//     // tslint:disable-next-line:max-line-length
//     window.open('https://www.mlb.com/news/jhoulys-chacin-homer-opening-day', '_blank');
//   } else if (this.num === 'news5') {
//     // tslint:disable-next-line:max-line-length
//     window.open('https://www.12up.com/es/posts/6256619-los-5-mejores-prospectos-venezolanos-de-las-grandes-ligas-en-2019', '_blank');
//   } else if (this.num === 'news6') {
//     // tslint:disable-next-line:max-line-length
//     window.open('https://www.sportsvenezuela.com/jose-altuve-brillo-como-un-astro-en-el-dia-inaugural-video/', '_blank');
//   } else if (this.num === 'news7') {
//     // tslint:disable-next-line:max-line-length
//     window.open('https://beisbolplay.americadigital.com/2019/01/22/asdrubal-cabrera-firmo-con-rangers/', '_blank');
//   }
// }
// }
