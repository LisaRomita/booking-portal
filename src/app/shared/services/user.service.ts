import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utenti } from '../models/utenti';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import * as bcrypt from '../../../../custom-bcrypt';

@Injectable({
  providedIn: 'root'
})


export class UserService{
    urlUtenti: string = "https://booking-portal-3edee.firebaseio.com/utenti";

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

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
    return this.http.get<Utenti[]>(this.urlUtenti+'.json');
  }

  getUser(id: string): Observable<Utenti> {
    const url3 =  `${this.urlUtenti}/${id}.json`;
    return this.http.get<Utenti>(url3)
      .pipe(
        catchError(this.handleError<Utenti>('getUser', this.u ))
      );
  }

  private handleError<Utenti>(operation = "operation", result?: Utenti){
    return(error: any): Observable<Utenti> => {
    return of(result);
    }
  }

  addUser({
    "nome":nome,
    "cognome": cognome,
    "email": email,
    "id": user,
    "password": password
  }): Observable<Utenti> {
    return this.http.patch<Utenti>(`${this.urlUtenti}/${user}.json`, {
      "nome":nome,
      "cognome": cognome,
      "email": email,
      "id": user,
      "password": bcrypt.hash(password)
    }, this.httpOptions);
    console.log(bcrypt.hash(password));
  }

  setCurrentUser(u: Utenti): void {
    this.currentUser = u;
  }

  getCurrentUser(): Utenti {
    return this.currentUser;
  }
}