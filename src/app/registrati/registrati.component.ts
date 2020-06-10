import { Component, OnInit } from '@angular/core';
import { Utenti } from '../utenti';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-registrati',
  templateUrl: './registrati.component.html',
  styleUrls: ['./registrati.component.css'],
  exportAs: "ngForm",
})
export class RegistratiComponent implements OnInit {

  constructor(private rs: RestService) { }

  nome: string;
  cognome: string;
  user: string;
  password: string;
  conferma: string;
  email: string;

  utenti: Utenti[];

  duplicato = false;
  nonCoincide = false;
  submitted = false;

  ngOnInit(): void {
    this.rs.getUtenti().subscribe( res => (this.utenti = res));
  }

  onSubmit() {
    if (this.duplicato == false && this.nonCoincide == false) {
      this.rs.addUser(new Utenti(this.nome, this.cognome, this.email, this.user, this.password)).subscribe( u => {this.utenti.push(u)});
      this.submitted = true;
    }
  }

  check(value: string){
    if(this.password!==value) this.nonCoincide = true;
    else this.nonCoincide = false;
  }
  
  checkUser(){
    for(let u of this.utenti){
      if(u.id === this.user) {
        this.duplicato = true;
        break;
      }else this.duplicato = false;
    }
  }
}
