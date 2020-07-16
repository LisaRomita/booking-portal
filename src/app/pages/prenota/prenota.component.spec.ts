import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'
import { PrenotaComponent } from './prenota.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { PrenotazioneService } from 'src/app/pages/prenota/services/prenotazione.service'
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { mock, instance, when, anything, anyOfClass, anyString } from 'ts-mockito';
import { Prenotazioni } from './models/prenotazioni';
import { Utenti } from 'src/app/shared/models/utenti';
import { of } from 'rxjs';


describe('PrenotaComponent', () => {
  let component: PrenotaComponent;
  let fixture: ComponentFixture<PrenotaComponent>;

  let mockedUser: Utenti = mock<Utenti>()
  let u: Utenti = instance(mockedUser);

  let mockedP: Prenotazioni = mock<Prenotazioni>();
  let p: Prenotazioni = instance(mockedP);

  u = { 
    id: "mrossi", 
    nome: "mario" ,
    cognome: "rossi",
    email: "mail",
    password: "mrossi"
  }

  p = {
      nome: "mario", 
      cognome: "rossi",
      email: "mail",
      arrivo: new Date("2020-06-03"),
      partenza: new Date("2020-06-04"),
      adulti: 2,
      bambini: 0,
      stanze: 1,
      pagamento: "paypal",
      tipologia: 1 
  }

  let mockedPrenService = mock(PrenotazioneService);
  let mockedUserService = mock(UserService);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrenotaComponent ],
      providers: [{
        provide: PrenotazioneService,
        useValue: instance(mockedPrenService)},{
          provide: UserService,
          useValue: instance(mockedUserService)
        }],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(PrenotaComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();
      component.mail = "";
      component.nome = "";
      component.cognome = "";
    });
  }));

  test('should create', async() => {
    when(mockedUserService.getCurrentUser()).thenReturn(u);
    component.ngOnInit();
    expect(component.mail).toBe("mail");
    expect(component.nome).toBe("mario");
    expect(component.cognome).toBe("rossi");
  });

  test('should correctly submit', async() => {
    when(mockedPrenService.addPrenotazione(anything())).thenReturn(of(p));
    component.prenotazioni = [];
    component.onSubmit();
    expect(component.prenotazioni).toContain(p);
  });

});
