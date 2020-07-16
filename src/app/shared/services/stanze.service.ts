import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stanze } from '../models/stanze';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StanzeService {

  url: string = "https://booking-portal-3edee.firebaseio.com/stanze";


  constructor(private http: HttpClient) { }

  getStanze(){
    return this.http.get<Stanze[]>(this.url+'.json');
  }

  getStanza(id: number): Observable<Stanze> {
    const url2 =  `${this.url}/${id}.json`;
    return this.http.get<Stanze>(url2);
  }

}
