import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Stanze } from '../../shared/models/stanze';
import { ActivatedRoute } from '@angular/router';
import { StanzeService } from 'src/app/shared/services/stanze.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nome: string;
  stanze: Stanze[] = [];

  public pics = [
    { src: "https://www.bwcityhotel-ge.it/resources/images/7eda536e-8b53-4208-8ca9-60cd7c00f204/it/B/camera-singola-nel-centro-di-genova.jpg",
      desc: "Stanza Singola" 
    },
    {
      src: "https://www.hoteldeipittori.it/wp-content/uploads/2016/10/Felice-Casorati-2-1.jpg",
      desc:"Stanza Singola PREMIUM"
    },
    {
      src: "https://q-cf.bstatic.com/images/hotel/max1024x768/157/15724379.jpg",
      desc: "Bagno"
    },
    {
      src: "https://www.smeraldoroma.com/data/jpg/slide2.jpg",
      desc: "Living Hall"
    },
    {
      src: "http://www.hotelgravinasanpietro.it/wp-content/uploads/2013/12/doppia_big.jpg",
      desc: "Stanza Doppia"
    },
    {
      src: "https://www.hotelilaria.com/images/rooms/gallery/superior/hotel-ilaria-lucca-superior-07.jpg",
      desc: "Stanza Family"
    },
    {
      src: "https://www.dharmagroup.it/hotel/dharma-style/data/1366/deluxe-suite-8.0.jpg",
      desc: "Bagno della SUITE"
    },
    {
      src: "https://media-cdn.tripadvisor.com/media/photo-s/12/4f/97/75/hotel-il-giardino.jpg",
      desc: "Stanza Tripla"
    },
    {
      src: "https://www.hotelserapo.com/sites/hotelserapo.gisnet.it/files/Hotel_Serapo_Classic_Superior_t01.jpg",
      desc: "Stanza Matrimoniale"
    },
    {
      src: "https://d1vp8nomjxwyf1.cloudfront.net/wp-content/uploads/sites/57/2016/03/05133652/Hotel-Royal-web-01Corrige.jpg",
      desc: "SUITE"
    }
  ];

  constructor(private us: UserService, private ss: StanzeService){}

  ngOnInit(): void {
    if(this.ss.getStanze()){
      this.ss.getStanze().subscribe(
      (res) => {
        this.stanze = res;
      },
      (error) => console.log(error)
    )}
    this.getUsername();
  }

  getUsername() {
    if(this.us.getCurrentUser()){
      this.nome = this.us.getCurrentUser().id;
    }
    
  }

}
