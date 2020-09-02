import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Utenti } from 'src/app/shared/models/utenti';

@Component({
  selector: 'app-registrati',
  templateUrl: './registrati.component.html',
  styleUrls: ['./registrati.component.css'],
  exportAs: "ngForm",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistratiComponent implements OnInit {

  constructor(private rs: UserService, private cd: ChangeDetectorRef) { }

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
    if(this.rs.getUtenti())
      this.rs.getUtenti().subscribe( res => {
        this.utenti = res;
        this.cd.markForCheck()
      });
  }

  onSubmit() {
    if (!this.duplicato && !this.nonCoincide) {
      this.rs.addUser({
        "nome":this.nome,
        "cognome": this.cognome,
        "email": this.email,
        "id": this.user,
        "password": this.password
      }).subscribe( u => {
        this.utenti.push(u);
        this.cd.markForCheck();
      });
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
