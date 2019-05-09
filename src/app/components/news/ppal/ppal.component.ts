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
  video1() {
    this.num = 'video1';
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
  video6() {
    this.num = 'video6';
  }
  video7() {
    this.num = 'video7';
  }


  urladdress(): void {
    if (this.num === 'video2') {
          window.open('http://www.liderendeportes.com/noticias/baseball/miguel-cabrera-en-pos-de-las-1-700-remolcadas/', '_blank');
  } else if (this.num === 'video3') {
    window.open('https://www.mlb.com/es/news/informes-acuna-firmara-extension-de-us-100-millones', '_blank');
  } else if (this.num === 'video4') {
    window.open('https://www.cbssports.com/mlb/players/playerpage/2122215/elias-diaz', '_blank');
  } else if (this.num === 'video5') {
    window.open('https://www.albat.com/lasmayores/Gleyber-Torres-empata-marca-del-legendario-Yankee-Joe-DiMaggio--20190404-0023.html', '_blank');
  } else if (this.num === 'video6') {
    window.open('https://www.12up.com/es/posts/6333643-miguel-cabrera-paso-a-luis-aparicio-entre-los-venezolanos-con-mas-hits-en-las-grandes-ligas', '_blank');
  } else if (this.num === 'video7') {
    window.open('http://www.el-nacional.com/noticias/beisbol/antonio-senzatela-elias-diaz-jose-osuna-empiezan-lista-lesionados_276774', '_blank');
  } else if (this.num === 'video8') {
    window.open('https://www.mlb.com/es/video/sandoval-pega-doble-impulsador', '_blank');
  }
  }

}

