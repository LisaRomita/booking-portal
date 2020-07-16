import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stanze } from '../../../shared/models/stanze';
import { Utenti } from '../../../shared/models/utenti';
import { Observable, of } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
    
  urlMess: string = "https://booking-portal-3edee.firebaseio.com/messaggi.json";

  constructor(private http: HttpClient) { }

  
  saveMes({ "email": mail, "txt": text}): Observable<Message>{
    return this.http.post<Message>(this.urlMess, { "email": mail, "txt": text});
  }
}