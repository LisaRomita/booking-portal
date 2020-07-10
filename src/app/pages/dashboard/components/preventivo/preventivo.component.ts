import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preventivo',
  templateUrl: './preventivo.component.html',
  styleUrls: ['./preventivo.component.css'],
  exportAs: "ngForm"
})
export class PreventivoComponent implements OnInit {

  delta: number;
  @Input() arrivo: Date;
  @Input() partenza: Date;
  @Input() bambini: string = "0";
  @Input() adulti: string = "1";
  @Input() stanze: string = "1";
  totale : number;
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const diff = Math.abs( new Date(this.partenza).getTime() - new Date(this.arrivo).getTime());
    this.delta = Math.ceil(diff/(1000*60*60*24));
    if( (this.adulti<= "2") && (this.bambini <= "2" ) && (this.stanze == "1")){
      this.totale = 50*this.delta;
    }
      else if ((this.adulti > "2") && (this.bambini > "2") && (this.stanze == "2")){
      this.totale = 300*this.delta;
    }
      else if ((this.adulti > "2") && (this.bambini == "0") && (this.stanze == "1")){
      this.totale = 70*this.delta;
    }
      else {
      this.totale = 50*this.delta;
    }
  }
}
