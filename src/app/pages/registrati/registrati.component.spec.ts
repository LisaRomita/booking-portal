import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistratiComponent } from './registrati.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Utenti } from 'src/app/shared/models/utenti';
import { mock, instance, when, anything } from 'ts-mockito';
import { of } from 'rxjs';

describe('RegistratiComponent', () => {
  let component: RegistratiComponent;
  let fixture: ComponentFixture<RegistratiComponent>;

  let mockedService: UserService = mock(UserService);
  let mockedUser: Utenti = mock<Utenti>();
  let u: Utenti = instance(mockedUser);

  u = {
    id: "mrossi",
    nome: "mario",
    cognome: "rossi",
    email: "mail",
    password: "mrossi"
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistratiComponent ],
      providers: [ {
        provide: UserService,
        useValue: instance(mockedService)}],
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
    when(mockedService.getUtenti()).thenReturn(of([u]));
    component.utenti = [];
    component.ngOnInit();
    expect(component.utenti).toContain(u);
  });

  test(`successful signup`, async() => {
    when(mockedService.addUser(anything())).thenReturn(of(u));
    component.utenti = [];
    component.duplicato = false;
    component.nonCoincide = false;
    component.onSubmit();
    expect(component.utenti).toContain(u);
  });

  test(`utente già esistente`, async() => {
    component.utenti = [];
    component.utenti.push(u);
    component.nome = 'mario';
    component.cognome = 'rossi';
    component.user = 'mrossi';
    component.checkUser();
    expect(component.duplicato).toBeTruthy();
  });

  test(`not matching passwords`, async() => {
    component.nome = 'nome';
    component.cognome = 'cognome';
    component.user = 'ncognome';
    component.password = 'ncognome';
    component.check('n');
    expect(component.nonCoincide).toBeTruthy();
  });

});
