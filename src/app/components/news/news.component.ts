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
  video3J() {
    this.num = 'video3J';
  }
  video4J() {
    this.num = 'video4J';
  }
  video5J() {
    this.num = 'video5J';
  }
  video3H() {
    this.num = 'video3H';
  }
  video4H() {
    this.num = 'video4H';
  }
  video5H() {
    this.num = 'video5H';
  }
  video3G() {
    this.num = 'video3G';
  }
  video4G() {
    this.num = 'video4G';
  }
  video5G() {
    this.num = 'video5G';
  }
  video3F() {
    this.num = 'video3F';
  }
  video4F() {
    this.num = 'video4F';
  }
  video5F() {
    this.num = 'video5F';
  }
  video3E() {
    this.num = 'video3E';
  }
  video4E() {
    this.num = 'video4E';
  }
  video5E() {
    this.num = 'video5E';
  }
  video3D() {
    this.num = 'video3D';
  }
  video4D() {
    this.num = 'video4D';
  }
  video5D() {
    this.num = 'video5D';
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
          window.open('https://www.liderendeportes.com/noticias/slider/conoce-que-dicen-las-proyecciones-sobre-acuna-jr-para-2022/');
  } else if (this.num === 'video3J') {
    window.open('https://meridiano.net/beisbol/beisbol-grandes-ligas/240286/eduardo-escobar-da-a-los-mets-muchas-opciones-en-su-infield.html');
  } else if (this.num === 'video4J') {
    window.open('https://elextrabase.com/2021/03/01/manuel-pina-coloca-interesante-la-pelea-por-la-receptoria-en-milwaukee/');
  } else if (this.num === 'video5J') {
    window.open('https://www.liderendeportes.com/noticias/baseball/senzatela-a-consolidarse-en-la-rotacion-de-rockies/');
  } else if (this.num === 'video3H') {
    window.open('https://www.sportsvenezuela.com/beisbol/elvis-andrus-mudanza-oakland/');
  } else if (this.num === 'video4H') {
    window.open('https://elextrabase.com/2020/07/31/un-hito-venezolano-que-no-ha-sucedido-una-sola-vez/');
  } else if (this.num === 'video5H') {
    window.open('http://www.liderendeportes.com/noticias/baseball/sandoval-y-flores-seran-claves-en-san-francisco/');
  } else if (this.num === 'video3G') {
    window.open('http://www.liderendeportes.com/noticias/baseball/kershaw-elogio-el-talento-de-brusdar-graterol/');
  } else if (this.num === 'video4G') {
    window.open('https://www.beisbolplay.com/2020/02/19/las-cifras-extremas-de-los-venezolanos-en-el-spring-training/');
  } else if (this.num === 'video3F') {
    window.open('https://www.beisbolplay.com/2020/02/17/gleyber-torres-sobre-jose-altuve-si-hizo-las-cosas-que-dicen-que-hizo-no-es-justo/');
  } else if (this.num === 'video4F') {
    window.open('http://www.liderendeportes.com/noticias/baseball/miguel-rojas-sobre-el-robo-de-senas-todos-podemos-aprender-de-esto/');
  } else if (this.num === 'video3D') {
    window.open('https://www.mlb.com/es/news/venezuela-con-144-representantes-esta-primavera');
  } else if (this.num === 'video5F') {
    window.open('https://www.mlb.com/es/news/german-marquez-lanzara-frente-a-su-familia');
  } else if (this.num === 'video3E') {
    window.open('https://elextrabase.com/2020/02/23/orioles-trabaja-con-renato-nunez-para-mejorar-su-defensa/', '_blank');
  } else if (this.num === 'video4E') {
    window.open('https://www.sportsvenezuela.com/yonny-chirinos-pitcheo-como-los-dioses-en-triunfo-de-los-rays/', '_blank');
  } else if (this.num === 'video5E') {
    window.open('https://www.mlb.com/es/news/tiene-carlos-gonzalez-futuro-en-grandes-ligas', '_blank');
  } else if (this.num === 'video3x') {
    window.open('http://www.enlaraya.com/baseball/mlb/contreras-esta-viviendo/', '_blank');
  } else if (this.num === 'video4D') {
    window.open('http://www.liderendeportes.com/noticias/baseball/eugenio-se-agarro-mayo-para-florecer/', '_blank');
  } else if (this.num === 'video5D') {
    window.open('http://www.liderendeportes.com/noticias/baseball/palazos-kilometricos-en-mlb-tienen-tinte-tricolor/ ', '_blank');
  } else if (this.num === 'video3B') {
    window.open('http://www.enlaraya.com/baseball/dia-de-las-madres-grandes-ligas-venezuela/', '_blank');
  } else if (this.num === 'video4B') {
    window.open('https://beisbol.estrending.com/2019/05/12/la-historia-de-gerardo-parra-y-los-nacionales-tuvo-un-estreno-de-pelicula/', '_blank');
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
    window.open('https://www.mlb.com/es/news/e-rod-pierde-caso-de-arbitraje-con-medias-rojas', '_blank');
  } else if (this.num === 'video32') {
    window.open('https://www.mlb.com/es/news/suarez-pretende-estar-listo-para-el-dia-inaugural');
  } else if (this.num === 'video33') {
    window.open('https://www.mlb.com/es/news/wilmer-flores-feliz-de-unirse-a-los-gigantes');
  } else if (this.num === 'video4') {
    window.open('https://www.beisbolplay.com/2020/02/13/salvador-perez-listo-para-volver-con-los-reales-tras-un-ano-fuera/');
  } else if (this.num === 'video5') {
    window.open('https://www.12up.com/es/posts/francisco-cervelli-marlins-mucha-ayuda-en-la-temporada-01e12sb3h8rg');
  } else if (this.num === 'video31') {
    window.open('http://www.liderendeportes.com/noticias/baseball/jhoulys-buscara-ser-parte-de-la-rotacion-de-mellizos/');
  } else if (this.num === 'video41') {
    window.open('http://www.liderendeportes.com/noticias/baseball/brusdar-graterol-demora-integracion-a-los-dodgers/');
  } else if (this.num === 'video51') {
    window.open('http://www.liderendeportes.com/noticias/baseball/luzardo-con-gran-chance-como-abridor-de-oakland/');
  } else if (this.num === 'video6') {
    window.open('http://www.liderendeportes.com/noticias/baseball/6-venezolanos-entre-los-mejores-100-jugadores-de-las-mayores/');
  } else if (this.num === 'video7') {
    window.open('https://elextrabase.com/2020/02/11/carlos-gonzalez-firmo-contrato-menor-con-los-seattle-mariners/');
  } else if (this.num === 'video8') {
    window.open('https://beisbol.estrending.com/2019/04/12/con-los-ganchos-hasta-cuando-llamaremos-cafecito-a-jose-martinez/', '_blank');
  }
  }

}

