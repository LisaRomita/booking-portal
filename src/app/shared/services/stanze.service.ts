import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stanze } from '../models/stanze';
import { Utenti } from '../models/utenti';
import { Observable, of } from 'rxjs';
import { Message } from '../../pages/contact-us/models/message';
import { catchError } from 'rxjs/operators';
import { Prenotazioni } from '../../pages/prenota/models/prenotazioni';

@Injectable({
  providedIn: 'root'
})
export class StanzeService {

  url: string = "https://my-json-server.typicode.com/lisaromita/booking-portal/stanze/";


  constructor(private http: HttpClient) { }

  getStanze(){
    return this.http.get<Stanze[]>(this.url);
  }

  getStanza(id: number): Observable<Stanze> {
    const url2 =  `${this.url}/${id}`;
    return this.http.get<Stanze>(url2);
  }

}
