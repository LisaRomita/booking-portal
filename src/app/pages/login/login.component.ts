import { Component, OnInit, Input, NgZone, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Utenti } from '../../shared/models/utenti'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  exportAs: "ngForm",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  @Input() user: string;
  @Input() psw: string;
  u: Utenti = { 
    id: "", 
    nome: "" ,
    cognome: "",
    email: "",
    password: ""
  }

  utenteOk = true;
  passwordOk = true;

  constructor(private us: UserService, private router: Router, private ngZone: NgZone, private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.utenteOk == true){
      if(this.psw == this.u.password){
        this.us.setCurrentUser(this.u);
        this.passwordOk = true;
        this.ngZone.run(() => this.router.navigate(['/dashboard']));
      }
      else this.passwordOk = false;
    }
    else this.passwordOk = false;
  }

  checkUser(){
    this.us.getUser(this.user).subscribe(u => {
      this.u = u;
      this.cd.markForCheck()
    });
    if(this.u.id != "null")
    this.utenteOk = true;
    else this.utenteOk = false;
  }

  printMe(): void {
    console.log("Render");
  }
}
