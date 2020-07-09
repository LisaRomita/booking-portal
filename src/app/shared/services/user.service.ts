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

export class UserService{
    urlUtenti: string = "https://my-json-server.typicode.com/lisaromita/booking-portal/utenti/";


currentUser: Utenti;
  u: Utenti = { 
    id: "null", 
    nome: "null" ,
    cognome: "null",
    email: "null",
    password: "null"
  }

  constructor(private http: HttpClient) { }

  getUtenti(){
    return this.http.get<Utenti[]>(this.urlUtenti);
  }

  getUser(id: string): Observable<Utenti> {
    
    const url3 =  `${this.urlUtenti}/${id}`;
    return this.http.get<Utenti>(url3)
      .pipe(
        catchError(this.handleError<Utenti>('getUser', this.u ))
      );
  }

  private handleError<Utenti>(operation = "operation", result?: Utenti){
    return(error: any): Observable<Utenti> => {
    return of(result as Utenti);
    }
  }

  addUser(u: Utenti): Observable<Utenti> {
    return this.http.post<Utenti>(this.urlUtenti, u);
  }

  setCurrentUser(u: Utenti): void {
    this.currentUser = u;
  }

  getCurrentUser(): Utenti {
    return this.currentUser;
  }
}