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
    
  urlMess: string = "https://my-json-server.typicode.com/lisaromita/booking-portal/messaggi";

  constructor(private http: HttpClient) { }

  
  saveMes(message: Message): Observable<Message>{
    return this.http.post<Message>(this.urlMess, message);
  }
}