import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PrenotaComponent } from './pages/prenota/prenota.component';
import { RegistratiComponent } from './pages/registrati/registrati.component';
import { LogoutComponent } from './pages/logout/logout.component';


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
