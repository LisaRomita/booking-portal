import { Component, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { ContactUsComponent } from '../../pages/contact-us/contact-us.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserService } from '../../shared/services/user.service';
import { LogoutComponent } from '../../pages/logout/logout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewChecked {

  login: LoginComponent;
  contact: ContactUsComponent;
  dashboard: DashboardComponent;
  logout: LogoutComponent;

  logged = false;

  constructor(public route: ActivatedRoute, public rs: UserService) {
    
  }
   
  ngAfterViewChecked(){
    if(this.rs.getCurrentUser()){
      this.logged = true;
    }else{
      this.logged = false;
    }
  }
}
