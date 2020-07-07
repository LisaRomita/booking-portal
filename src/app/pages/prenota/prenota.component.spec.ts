import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'
import { PrenotaComponent } from './prenota.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { PrenotazioneService } from 'src/app/pages/prenota/services/prenotazione.service'
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PrenotaComponent', () => {
  let component: PrenotaComponent;
  let fixture: ComponentFixture<PrenotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrenotaComponent ],
      providers: [UserService, PrenotazioneService],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(PrenotaComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();
    });
  }));

  test('should create', async() => {
    expect(component).toBeTruthy();
  });

  test('should correctly submit', async() => {
    const fixture = TestBed.createComponent(PrenotaComponent);
    const component = fixture.componentInstance;
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });

});
