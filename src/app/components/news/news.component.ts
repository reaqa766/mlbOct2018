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
  video3B() {
    this.num = 'video3B';
  }
  video4B() {
    this.num = 'video4B';
  }
  video5B() {
    this.num = 'video5B';
  }
  video3A() {
    this.num = 'video3A';
  }
  video4A() {
    this.num = 'video4A';
  }
  video5A() {
    this.num = 'video5A';
  }
  video30() {
    this.num = 'video30';
  }
  video32() {
    this.num = 'video32';
  }
  video33() {
    this.num = 'video32';
  }
  video3() {
    this.num = 'video3';
  }
  video35() {
    this.num = 'video35';
  }
  video36() {
    this.num = 'video36';
  }
  video311() {
    this.num = 'video311';
  }
  video351() {
    this.num = 'video351';
  }
  video361() {
    this.num = 'video361';
  }
  video37() {
    this.num = 'video37';
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
          window.open('http://www.enlaraya.com/baseball/dia-de-las-madres-grandes-ligas-venezuela/ ', '_blank');
  } else if (this.num === 'video3B') {
    window.open('https://beisbol.estrending.com/2019/05/12/la-historia-de-gerardo-parra-y-los-nacionales-tuvo-un-estreno-de-pelicula/', '_blank');
  } else if (this.num === 'video4B') {
    window.open('https://www.mlb.com/news/yankees-claim-breyvic-valera-from-giants', '_blank');
  } else if (this.num === 'video5B') {
    window.open('https://www.mlb.com/es/news/nacionales-firman-a-gerardo-parra ', '_blank');
  } else if (this.num === 'video3A') {
    window.open('https://www.sportsvenezuela.com/carlos-carrasco-pitcheo-un-blanqueo-de-cinco-entradas/', '_blank');
  } else if (this.num === 'video4A') {
    window.open('http://www.liderendeportes.com/noticias/baseball/cargo-despliega-su-calidad-en-los-jardines-de-cleveland/', '_blank');
  } else if (this.num === 'video5A') {
    window.open('http://www.eluniversal.com/deportes/39419/jose-altuve-dono-500000-dolares-a-iniciativas-de-impacto-social-de-empresas-polar', '_blank');
  } else if (this.num === 'video3') {
    window.open('https://www.mlb.com/es/news/aficion-venezolana-se-hace-sentir-en-el-palacio-sultan', '_blank');
  } else if (this.num === 'video35') {
    window.open('https://www.mlb.com/es/news/que-pasa-con-el-poder-de-miguel-cabrera', '_blank');
  } else if (this.num === 'video36') {
    window.open('http://www.eluniversal.com/deportes/39419/jose-altuve-dono-500000-dolares-a-iniciativas-de-impacto-social-de-empresas-polar', '_blank');
  } else if (this.num === 'video311') {
    window.open('https://www.mlb.com/es/news/nino-llora-al-conocer-a-jose-altuve', '_blank');
  } else if (this.num === 'video351') {
    window.open('https://beisbol.estrending.com/2019/05/05/ronald-acuna-fuera-del-lineup-por-problemas-fisicos/', '_blank');
  } else if (this.num === 'video361') {
    window.open('https://www.sportsvenezuela.com/ender-inciarte-dio-el-batazo-decisivo-en-el-triunfo-de-atlantavideo/', '_blank');
  } else if (this.num === 'video37') {
    window.open('https://www.mlb.com/es/news/perez-domina-para-guiar-a-twins-sobre-astros/', '_blank');
  } else if (this.num === 'video30') {
    window.open('http://www.liderendeportes.com/noticias/baseball/sandy-leon-le-cambio-la-cara-al-pitcheo-de-boston/', '_blank');
  } else if (this.num === 'video32') {
    window.open('https://www.sportsvenezuela.com/la-fuerza-de-jesus-aguilar-volvio-a-aparecer-y-jhoulys-chacin-gano-el-tercero-videos/', '_blank');
  } else if (this.num === 'video33') {
    window.open('https://www.sportsvenezuela.com/felipe-vazquez-se-apunto-su-septimo-rescate-de-la-campana-con-pittsburgh/', '_blank');
  } else if (this.num === 'video4') {
    window.open('https://beisbol.estrending.com/2019/04/29/eduardo-escobar-es-el-jugador-de-la-semana-de-la-liga-nacional/', '_blank');
  } else if (this.num === 'video5') {
    window.open('https://noticiassin.com/el-venezolano-aguilar-brilla-en-ausencia-de-yelich-y-ganan-cerveceros/', '_blank');
  } else if (this.num === 'video31') {
    window.open('https://beisbol.estrending.com/2019/04/29/chirinos-y-carrasco-libraron-una-guerra-fratricida/', '_blank');
  } else if (this.num === 'video41') {
    window.open('https://www.sportsvenezuela.com/cuatro-venezolanos-guiaron-paliza-de-arizona-sobre-los-piratas-pittsburgh/', '_blank');
  } else if (this.num === 'video51') {
    window.open('http://www.el-nacional.com/noticias/beisbol/boston-sube-las-mayores-prospecto-guayanes-darwinzon-hernandez_280193', '_blank');
  } else if (this.num === 'video6') {
    window.open('https://beisbol.estrending.com/2019/04/10/altuve-lleva-cuatro-jonrones-en-tres-dias/', '_blank');
  } else if (this.num === 'video7') {
    window.open('https://beisbol.estrending.com/2019/04/12/con-los-ganchos-hasta-cuando-llamaremos-cafecito-a-jose-martinez/', '_blank');
  } else if (this.num === 'video8') {
    window.open('https://www.sportsvenezuela.com/acuna-salio-de-las-sombras-del-ponche-a-la-luz-del-triunfovideo/', '_blank');
  }
  }

}

