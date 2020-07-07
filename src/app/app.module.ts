import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CarouselComponent } from './pages/dashboard/components/carousel/carousel.component';
import { PreventivoComponent } from './pages/dashboard/components/preventivo/preventivo.component';
import { CardComponent } from './pages/dashboard/components/card/card.component';
import { DetailComponent } from './pages/detail/detail.component';
import { PrenotaComponent } from './pages/prenota/prenota.component';
import { RegistratiComponent } from './pages/registrati/registrati.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogoutComponent } from './pages/logout/logout.component';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ContactUsComponent,
    CarouselComponent,
    PreventivoComponent,
    CardComponent,
    DetailComponent,
    PrenotaComponent,
    RegistratiComponent,
    LogoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
