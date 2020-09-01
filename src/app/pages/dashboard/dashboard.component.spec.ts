import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { mock, instance, when } from 'ts-mockito';
import { DashboardComponent } from './dashboard.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { StanzeService } from 'src/app/shared/services/stanze.service'
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Utenti } from 'src/app/shared/models/utenti';
import { Stanze } from 'src/app/shared/models/stanze';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  let mockedUser: Utenti = mock<Utenti>();
  let u: Utenti = instance(mockedUser);

  u = {
    id: "mrossi",
    nome: "mario",
    cognome: "rossi",
    password: "mrossi",
    email: "mail"
  }

  let mockedStanze: Stanze = mock<Stanze>();
  let s1: Stanze = instance(mockedStanze);
  let s2: Stanze = instance(mockedStanze);

  s1 = {
    id: "1",
    tipo: "singola",
    prezzo: "50",
    rate: "4",
    src: "src"
  }

  s2 = {
  id: "2",
  tipo: "doppia",
  prezzo: "80",
  rate: "4",
  src: "src2"
}
  
  let mockedStanzeService: StanzeService = mock(StanzeService);
  let mockedUserService: UserService = mock(UserService);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [{
        provide: UserService,
        useValue: instance(mockedUserService)}
        ,{
        provide: StanzeService,
        useValue: instance(mockedStanzeService)}],
      imports: [RouterTestingModule, HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(DashboardComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();
    });
  }));

  test('should create', async() => {
    component.stanze = [];
    when(mockedUserService.getCurrentUser()).thenReturn(u);
    when(mockedStanzeService.getStanze()).thenReturn(of([s1,s2]));
    component.ngOnInit();
    expect(component.stanze).toContain(s2);
    expect(component.nome).toBe("mrossi");
  });
});
