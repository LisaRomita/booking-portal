import { Component, OnInit, DoCheck, AfterContentChecked, OnChanges, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RestService } from './rest.service';
import { Utenti } from './utenti';
import { LogoutComponent } from './logout/logout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked{
  title="booking-portal";

  login: LoginComponent;
  contact: ContactUsComponent;
  dashboard: DashboardComponent;
  logout: LogoutComponent;

  logged = false;
  public isMenuCollapsed = true;

  constructor(public route: ActivatedRoute, public rs: RestService) {
    
  }
   
  ngAfterViewChecked(){
    if(this.rs.currentUser){
      this.logged = true;
    }else{
      this.logged = false;
    }
  }
  
}
