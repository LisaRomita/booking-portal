import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratiComponent } from './registrati.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Utenti } from 'src/app/shared/models/utenti';

describe('RegistratiComponent', () => {
  let component: RegistratiComponent;
  let fixture: ComponentFixture<RegistratiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistratiComponent ],
      providers: [UserService],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(RegistratiComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();
    });
  }));

  test('should create', async() => {
    expect(component).toBeTruthy();
  });

  test(`successful signup`, async() => {
    const fixture = TestBed.createComponent(RegistratiComponent);
    const component = fixture.componentInstance;
    component.nome = 'nome';
    component.cognome = 'cognome';
    component.user = 'ncognome';
    component.password = 'ncognome';
    component.conferma = 'ncognome';
    component.email = 'mail';
    component.nonCoincide = false;
    component.duplicato = false;
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });

  test(`utente già esistente`, async() => {
    let u: Utenti = {
      id: "mrossi",
      nome: "mario",
      cognome: "rossi",
      email: "mail",
      password: "mrossi"
    }
    const fixture = TestBed.createComponent(RegistratiComponent);
    const component = fixture.componentInstance;
    component.utenti = [];
    component.utenti.push(u);
    component.nome = 'mario';
    component.cognome = 'rossi';
    component.user = 'mrossi';
    component.checkUser();
    expect(component.duplicato).toBeTruthy();
  });

  test(`not matching passwords`, async() => {
    const fixture = TestBed.createComponent(RegistratiComponent);
    const component = fixture.componentInstance;
    component.nome = 'nome';
    component.cognome = 'cognome';
    component.user = 'ncognome';
    component.password = 'ncognome';
    component.check('n');
    expect(component.nonCoincide).toBeTruthy();
  });

});
