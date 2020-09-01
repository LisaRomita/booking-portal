import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
