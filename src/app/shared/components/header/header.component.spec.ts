import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { mock, instance, when } from 'ts-mockito';
import { Utenti } from 'src/app/shared/models/utenti';
import { UserService } from 'src/app/shared/services/user.service'
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

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
      imports: [
        RouterTestingModule, HttpClientTestingModule, NgbModule
      ],
      providers: [{
        provide: UserService,
        useValue: instance(mockedService)
      }],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    when(mockedService.getCurrentUser()).thenReturn(u);
    component.ngAfterViewChecked();
    expect(component.logged).toBeTruthy();
  });
});
