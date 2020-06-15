import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrenotaComponent } from './prenota/prenota.component';
import { RegistratiComponent } from './registrati/registrati.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'prenota/:id', component: PrenotaComponent },
  { path: 'registrati', component: RegistratiComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
