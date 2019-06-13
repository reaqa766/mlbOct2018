import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letras',
  templateUrl: './letras.component.html',
  styleUrls: ['./letras.component.css']
})
export class LetrasComponent implements OnInit {

  location: string;
  num: string;

  constructor() { }

  ngOnInit() {
  }
  video2() {
    this.num = 'video2';
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
          window.open('https://prodavinci.com/mm/', '_blank');
  } else if (this.num === 'video3E') {
    window.open('https://prodavinci.com/paciencia-la-virtud-de-bob-abreu/', '_blank');
  } else if (this.num === 'video4E') {
    window.open('https://prodavinci.com/ichiro-se-parece-a-vitico/', '_blank');
  } else if (this.num === 'video5E') {
    window.open('https://prodavinci.com/pablo-como-el-apostol-de-los-gentiles/', '_blank');
  } else if (this.num === 'video3') {
    window.open('https://prodavinci.com/miguel-cabrera-todavia-queda-juego/', '_blank');
  } else if (this.num === 'video4') {
    window.open('https://prodavinci.com/andres-galarraga-beisbol-puro-beisbol/', '_blank');
  } else if (this.num === 'video5') {
    window.open('https://prodavinci.com/el-guti-el-que-no-se-rinde/', '_blank');
  } else if (this.num === 'video31') {
    window.open('https://prodavinci.com/el-veinte-de-baudilio-diaz/', '_blank');
  } else if (this.num === 'video41') {
    window.open('https://prodavinci.com/endy/', '_blank');
  } else if (this.num === 'video51') {
    window.open('https://prodavinci.com/alex-gonzalez-d-o-c/', '_blank');
  } else if (this.num === 'video6') {
    window.open('https://www.letraslibres.com/mexico-espana/beisbol-y-poesia', '_blank');
  } else if (this.num === 'video7') {
    window.open('https://www.letraslibres.com/mexico-espana/clasico-beisbol-la-digresion-y-el-radio', '_blank');
  } else if (this.num === 'video8') {
    window.open('https://www.hoyquehay.net/articulos/abc-del-beisbol', '_blank');
  }
  }

}



