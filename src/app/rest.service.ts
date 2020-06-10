import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stanze } from './stanze';
import { Utenti } from './utenti';
import { Observable, of } from 'rxjs';
import { Message } from './message';
import { catchError } from 'rxjs/operators';
import { Prenotazioni } from './prenotazioni';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  url: string = "http://localhost:3000/stanze/";
  urlUtenti: string = "http://localhost:3000/utenti/";
  urlMess: string = "http://localhost:3000/messaggi";
  urlPrenotazioni: string = "http://localhost:3000/prenotazioni";

  currentUser: Utenti;

  constructor(private http: HttpClient) { }

  getStanze(){
    return this.http.get<Stanze[]>(this.url);
  }

  getStanza(id: number): Observable<Stanze> {
    const url2 =  `${this.url}/${id}`;
    return this.http.get<Stanze>(url2);
  }

  getUtenti(){
    return this.http.get<Utenti[]>(this.urlUtenti);
  }

  getUser(id: string): Observable<Utenti> {
    const url3 =  `${this.urlUtenti}/${id}`;
    return this.http.get<Utenti>(url3)
      .pipe(
        catchError(this.handleError<Utenti>('getUser', new Utenti("null", "null", "null", "null", "null") ))
      );
  }

  private handleError<Utenti>(operation = "operation", result?: Utenti){
    return(error: any): Observable<Utenti> => {
    return of(result as Utenti);
    }
  }

  saveMes(message: Message): Observable<Message>{
    return this.http.post<Message>(this.urlMess, message);
  }

  addPrenotazione(p: Prenotazioni): Observable<Prenotazioni>{
    return this.http.post<Prenotazioni>(this.urlPrenotazioni, p);
  }

  addUser(u: Utenti): Observable<Utenti> {
    return this.http.post<Utenti>(this.urlUtenti, u);
  }
}
