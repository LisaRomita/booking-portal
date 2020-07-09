import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { mock, instance, when, reset, deepEqual, anything } from 'ts-mockito';
import { LoginComponent } from './login.component';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Utenti } from '../../shared/models/utenti'
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  
  let mockedUserService: UserService = mock(UserService);
  let mockedUser: Utenti = mock<Utenti>();
  let u: Utenti = instance(mockedUser);

  u = { 
    id: "mrossi", 
    nome: "mario" ,
    cognome: "rossi",
    email: "mail",
    password: "mrossi"
  }
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [{
        provide: UserService,
        useValue: instance(mockedUserService)} ],
      imports: [RouterTestingModule, FormsModule, HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();
      
    });
    
  }));

  test('should create', async() => {
    expect(component).toBeTruthy();
  });

  test('should check user', async() => {
    when(mockedUserService.getUser(anything())).thenReturn(of(u));
    component.checkUser();
    expect(component.utenteOk).toBeTruthy();
  })

  test('should correctly login', async() => {
    component.user = "mrossi";
    component.psw = "mrossi";
    component.u =  u;
    component.utenteOk = true;
    component.onSubmit();
    expect(component.passwordOk).toBeTruthy();
  })
});
