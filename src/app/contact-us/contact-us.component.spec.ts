import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsComponent } from './contact-us.component';
import { Utenti } from '../utenti';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RestService } from '../rest.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let fixture: ComponentFixture<ContactUsComponent>;
  let dom: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsComponent ],
      providers: [RestService],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(ContactUsComponent);
      component = fixture.componentInstance;
      dom = fixture.nativeElement;
      fixture.detectChanges();
    });
  }));


  test('should create', async() => {
    expect(component).toBeTruthy();
  });

  test('should have title', async() => {
    expect(dom.innerHTML).toContain('<h1>Come possiamo aiutarti?</h1>');
  });

  test('should correctly submit', async() => {
    const fixture = TestBed.createComponent(ContactUsComponent);
    const component = fixture.componentInstance;
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });

});
