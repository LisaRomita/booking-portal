import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { mock, instance, when, anything } from 'ts-mockito';
import { ContactUsComponent } from './contact-us.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { MessageService } from 'src/app/pages/contact-us/services/message.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Message } from './models/message'
import { of } from 'rxjs';
import { Utenti } from 'src/app/shared/models/utenti';

describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let fixture: ComponentFixture<ContactUsComponent>;
  let dom: any;

  let mockedMes: Message = mock<Message>();
  let mes: Message = instance(mockedMes);

  mes = {
    id: 1,
    email: "mail",
    txt: "ciao"
  }

  let mockedUser: Utenti = mock<Utenti>();
  let u: Utenti = instance(mockedUser);

  u = {
    id: "mrossi",
    nome: "mario",
    cognome: "rossi",
    password: "mrossi",
    email: "mail"
  }

  let mockedMesService: MessageService = mock(MessageService);
  let mockedUserService: UserService = mock(UserService);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsComponent ],
      providers: [{
        provide: MessageService,
        useValue: instance(mockedMesService)
      }, {
        provide: UserService,
        useValue: instance(mockedUserService)
      }],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(ContactUsComponent);
      component = fixture.componentInstance;
      dom = fixture.nativeElement;
      fixture.detectChanges();
      component.mail="";
    });
  }));


  test('should create', async() => {
    when(mockedUserService.getCurrentUser()).thenReturn(u);
    component.ngOnInit();
    expect(component.mail).toBe("mail");
  });

  test('should have title', async() => {
    expect(dom.innerHTML).toContain('<h1>Come possiamo aiutarti?</h1>');
  });

  test('should correctly submit', async() => {
    when(mockedMesService.saveMes(anything())).thenReturn(of(mes));
    component.m = mes;
    component.messaggi = [];
    component.onSubmit();
    expect(component.messaggi).toContain(mes);
  });

});
