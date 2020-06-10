import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  /*animations: [
    trigger('carouselAnimation', [
      transition('void=>*', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition('*=>void', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]*/
})
export class CarouselComponent implements OnInit {

  @Input() pics: string | any[];

  currentPic = 0;

  paused = false;
  unPauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused(){
    if(this.paused){
      this.carousel.cycle();
    }else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if(this.unPauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
          this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR){
          this.togglePaused();
        }
  }

  constructor() {
   }

  ngOnInit(): void {
   // this.onRepeat();
  }

  onRepeat(){
    setTimeout(() => {
      this.scroll();
      this.onRepeat();
    }, 4000);
  }

  scroll(){
    const next = this.currentPic + 1;
    this.currentPic = next === this.pics.length ? 0 : next;
  }
}
