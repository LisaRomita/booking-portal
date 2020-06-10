import { Component, OnInit } from '@angular/core';
import { Stanze } from '../stanze';
import { Prenotazioni } from '../prenotazioni';
import { RestService } from '../rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prenota',
  templateUrl: './prenota.component.html',
  styleUrls: ['./prenota.component.css'],
  exportAs: "ngForm"
})
export class PrenotaComponent implements OnInit {

  submitted = false;
  prenotazioni: Prenotazioni[];
  nome: string;
  cognome: string;
  mail: string;
  arrivo: Date;
  partenza: Date;
  bambini: number = 0;
  adulti: number = 1;
  stanze: number = 1;
  pagamento: number;


  counter: number = 0;

  constructor(private rs: RestService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.rs.currentUser && this.rs.currentUser.id != null)  {
      this.mail = this.rs.currentUser.email;
      this.nome = this.rs.currentUser.nome;
      this.cognome = this.rs.currentUser.cognome;
    }
  }

  onSubmit() {
    this.submitted = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.counter++;
    this.rs.addPrenotazione(new Prenotazioni(this.counter, this.nome, this.cognome, this.mail, this.arrivo, this.partenza, this.adulti, this.bambini, this.stanze, this.pagamento, id )).subscribe( p => {this.prenotazioni.push(p)})
  }
}
