import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { mock, instance, when, anything } from 'ts-mockito';
import { Stanze } from 'src/app/shared/models/stanze'
import { DetailComponent } from './detail.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StanzeService } from 'src/app/shared/services/stanze.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  let mockedStanze: Stanze = mock<Stanze>();
  let s1: Stanze = instance(mockedStanze);

  s1 = {
    id: "1",
    tipo: "singola",
    prezzo: "50",
    rate: "4",
    src: "src"
  }
  
  let mockedStanzeService: StanzeService = mock(StanzeService);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComponent ],
      providers: [{
        provide: StanzeService,
        useValue: instance(mockedStanzeService)}],
      imports: [RouterTestingModule, HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(DetailComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  test('should create', async() => {
    when(mockedStanzeService.getStanza(anything())).thenReturn(of(s1))
    component.ngOnInit()
    expect(component.stanza).toBe(s1);
  });

});
