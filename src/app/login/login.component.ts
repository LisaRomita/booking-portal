import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { Utenti } from '../utenti';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  exportAs: "ngForm"
})
export class LoginComponent implements OnInit {

  @Input() user: string;
  @Input() psw: string;
  u: Utenti = new Utenti("", "", "", "", "");

  utenteOk = true;
  passwordOk = true;

  constructor(private rs: RestService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.utenteOk == true){
      if(this.psw == this.u.password){
        this.rs.currentUser = this.u;
        this.passwordOk = true;
        this.router.navigate(["/dashboard/"]);
      }
      else this.passwordOk = false;
    }
    else this.passwordOk = false;
  }

  checkUser(){
    this.rs.getUser(this.user).subscribe(u => this.u = u);
    if(this.u.id != "null")
    this.utenteOk = true;
    else this.utenteOk = false;
  }

  /*checkPsw(){
    if(this.utenteOk){
      if(this.psw == this.u.password){
        this.rs.currentUser = this.u;
        this.passwordOk = true;
      }
      else this.passwordOk = false;
    }
    else this.passwordOk = false;
    this.count++;
  }*/
  


}
