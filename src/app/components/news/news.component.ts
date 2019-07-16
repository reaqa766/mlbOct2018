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
          window.open('http://www.meridiano.com.ve/beisbol/beisbol-grandes-ligas/196326/carrasco-se-plantea-retornar-a-finales-de-julio.html' , '_blank');
  } else if (this.num === 'video3J') {
    window.open(' https://www.mlb.com/es/news/estara-felipe-vazquez-en-la-mira-de-dodgers', '_blank');
  } else if (this.num === 'video4J') {
    window.open('http://www.liderendeportes.com/noticias/baseball/segunda-mitad-de-2019-con-tinte-tricolor/', '_blank');
  } else if (this.num === 'video5J') {
    window.open('https://www.sportsvenezuela.com/jose-altuve-comenzaria-su-rehabilitacion-en-las-menores-el-fin-de-semana/', '_blank');
  } else if (this.num === 'video3H') {
    window.open(' http://www.liderendeportes.com/noticias/baseball/elias-diaz-le-saca-provecho-a-su-titularidad-en-pittsburgh/', '_blank');
  } else if (this.num === 'video4H') {
    window.open('https://www.sportsvenezuela.com/senzatela-rockies-cascabeles/', '_blank');
  } else if (this.num === 'video5H') {
    window.open('https://www.sportsvenezuela.com/felipe-vazquez-volvio-vestirse-de-salvador/ ', '_blank');
  } else if (this.num === 'video3G') {
    window.open(' https://www.sportsvenezuela.com/contreras-estrellas-boletin/', '_blank');
  } else if (this.num === 'video4G') {
    window.open(' http://www.meridiano.com.ve/beisbol/beisbol-grandes-ligas/194386/escobar-la-sigue-viendo-clarita-en-la-campana---video-.html', '_blank');
  } else if (this.num === 'video5G') {
    window.open('https://www.mlb.com/es/news/jhoulys-chacin-a-lista-de-lesionados-de-cerveceros', '_blank');
  } else if (this.num === 'video3F') {
    window.open('  https://beisbol.americadigital.com/2019/05/27/la-elite-del-poder-en-venezuela-tiene-un-nuevo-nombre-renato-nunez/', '_blank');
  } else if (this.num === 'video4F') {
    window.open('https://beisbol.americadigital.com/2019/05/28/avisail-garcia-le-echo-piernas-para-llegar-a-diez-jonrones/', '_blank');
  } else if (this.num === 'video5F') {
    window.open('http://www.enlaraya.com/baseball/mlb/hernandez-esta-casi-listo/', '_blank');
  } else if (this.num === 'video3E') {
    window.open('https://www.sportsvenezuela.com/jose-osuna-consiguio-su-primer-remolque-del-ano-en-caida-bucanera/', '_blank');
  } else if (this.num === 'video4E') {
    window.open('https://www.sportsvenezuela.com/yonny-chirinos-pitcheo-como-los-dioses-en-triunfo-de-los-rays/', '_blank');
  } else if (this.num === 'video5E') {
    window.open('https://www.mlb.com/es/news/tiene-carlos-gonzalez-futuro-en-grandes-ligas', '_blank');
  } else if (this.num === 'video3D') {
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

