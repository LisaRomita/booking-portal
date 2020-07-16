import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { PrenotazioneService } from 'src/app/pages/prenota/services/prenotazione.service'
import { ActivatedRoute } from '@angular/router';
import { Prenotazioni } from './models/prenotazioni';

@Component({
  selector: 'app-prenota',
  templateUrl: './prenota.component.html',
  styleUrls: ['./prenota.component.css'],
  exportAs: "ngForm",
  changeDetection: ChangeDetectionStrategy.OnPush
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
  pagamento: string;


  counter: number = 0;

  constructor(private us: UserService, private ps: PrenotazioneService, private route: ActivatedRoute, private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    if(this.us.getCurrentUser() && this.us.getCurrentUser().id != null)  {
      this.mail = this.us.getCurrentUser().email;
      this.nome = this.us.getCurrentUser().nome;
      this.cognome = this.us.getCurrentUser().cognome;
    }
  }

  onSubmit() {
    this.submitted = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.counter++;
    this.ps.addPrenotazione({ 
      "nome": this.nome, 
      "cognome": this.cognome,
      "email": this.mail,
      "arrivo": this.arrivo,
      "partenza": this.partenza,
      "adulti": this.adulti,
      "bambini": this.bambini,
      "stanze": this.stanze,
      "pagamento": this.pagamento,
      "tipologia": id 
    }).subscribe( p => {
      this.prenotazioni.push(p);
      this.cd.markForCheck();
    })
  }
}
