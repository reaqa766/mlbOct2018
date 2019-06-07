import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.css']
})
export class PodcastsComponent implements OnInit {

  location: string;
  num: string;


  selectedImg;
  imgs = [ {number: 1, url: '../../../../assets/EPISODIO1TalkBeisbol2daTemp2019.jpg'}, 
  {number: 2, url: '../../../../assets/EPISODIO2TalkBeisbol2daTemp2019.jpg'},
    {number: 3, url: '../../../../assets/EPISODIO3TalkBeisbol2daTemp2019.jpg'},
    {number: 4,url: '../../../../assets/EPISODIO4TalkBeisbol2daTemp2019pqno.jpg'},
    {number: 5,url: '../../../../assets/EPISODIO 5 Talk Beisbol 2da Temp. 2019.jpg'},
    {number: 6,url: '../../../../assets/EP6TB2daT. 2019.jpg'},
  ];


  constructor() { }

  ngOnInit() {
    
  }
  PodCast(i): void {
    if (i === 1) 
  {
    this.num = 'PodCast1';
  }
    else if (i === 2) 
  {
    this.num = 'PodCast2D';
  }
    else if (i === 3) 
  {
    this.num = 'PodCast3D';
  }
    else if (i === 4) 
  {
    this.num = 'PodCast4D';
  }
  else if (i === 5) 
  {
    this.num = 'PodCast5D';
  }
  else if (i === 6) 
  {
    this.num = 'PodCast6D';
  }
}



  
  


  urladdress(): void {
    if (this.num === 'PodCast1') {
      window.open('https://talkbeisbol.podbean.com/e/episodio-1-segunda-temporada/', '_blank');
    } else if (this.num === 'PodCast2D') {
      window.open('https://talkbeisbol.podbean.com/e/episodio-2-segunda-temporada/', '_blank');
  } else if (this.num === 'PodCast3D') {
    window.open('https://talkbeisbol.podbean.com/e/episodio-3-segunda-temporada-1558100751/', '_blank');
  } else if (this.num === 'PodCast4D') {
    window.open('https://talkbeisbol.podbean.com/e/episodio-4-segunda-temporada-1558659319/', '_blank');
  } else if (this.num === 'PodCast5D') {
    window.open('https://talkbeisbol.podbean.com/e/episodio-5-segunda-temporada-1559233360/', '_blank');
  } else if (this.num === 'PodCast6D') {
    window.open('https://talkbeisbol.podbean.com/e/episodio-6-2da-temporada/', '_blank');

  }
  }

}
