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

  urlPrenotazioni: string = "https://my-json-server.typicode.com/lisaromita/booking-portal/prenotazioni";


  constructor(private http: HttpClient) { }

  addPrenotazione(p: Prenotazioni): Observable<Prenotazioni>{
    return this.http.post<Prenotazioni>(this.urlPrenotazioni, p);
  }

}
