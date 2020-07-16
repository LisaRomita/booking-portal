import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stanze } from '../../../shared/models/stanze';
import { Utenti } from '../../../shared/models/utenti';
import { Observable, of } from 'rxjs';
import { Message } from '../../contact-us/models/message';
import { catchError } from 'rxjs/operators';
import { Prenotazioni } from '../models/prenotazioni';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioneService {

  urlPrenotazioni: string = "https://booking-portal-3edee.firebaseio.com/prenotazioni.json";


  constructor(private http: HttpClient) { }

  addPrenotazione({
  "nome": nome, 
  "cognome": cognome,
  "email": mail,
  "arrivo": arrivo,
  "partenza": partenza,
  "adulti": adulti,
  "bambini": bambini,
  "stanze": stanze,
  "pagamento": pagamento,
  "tipologia": id} ): Observable<Prenotazioni>{
    return this.http.post<Prenotazioni>(this.urlPrenotazioni, {
    "nome": nome, 
    "cognome": cognome,
    "email": mail,
    "arrivo": arrivo,
    "partenza": partenza,
    "adulti": adulti,
    "bambini": bambini,
    "stanze": stanze,
    "pagamento": pagamento,
    "tipologia": id} );
  }

}
