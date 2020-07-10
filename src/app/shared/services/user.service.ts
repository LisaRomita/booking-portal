import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utenti } from '../models/utenti';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class UserService{
    urlUtenti: string = "https://my-json-server.typicode.com/lisaromita/booking-portal/utenti/";

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
    return this.http.post<Utenti>(this.urlUtenti, u, this.httpOptions);
  }

  setCurrentUser(u: Utenti): void {
    this.currentUser = u;
  }

  getCurrentUser(): Utenti {
    return this.currentUser;
  }
}