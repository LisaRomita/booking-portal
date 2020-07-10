import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventivoComponent } from './preventivo.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('PreventivoComponent', () => {
  let component: PreventivoComponent;
  let fixture: ComponentFixture<PreventivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreventivoComponent ],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(PreventivoComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();
    });
  }));

  test('should create', async() => {
    expect(component).toBeTruthy();
  });

  test('should compute properly 50', async() => {
    component.arrivo = new Date("2020-06-03");
    component.partenza = new Date("2020-06-04");
    component.adulti = "2";
    component.bambini = "0";
    component.stanze = "1";
    component.onSubmit();
    expect(component.totale).toEqual(50);
  });

  test('should compute properly 300', async() => {
    component.arrivo = new Date("2020-06-03");
    component.partenza = new Date("2020-06-04");
    component.adulti = "3";
    component.bambini = "3";
    component.stanze = "2";
    component.onSubmit();
    expect(component.totale).toEqual(300);
  });

  test('should compute properly 70', async() => {
    component.arrivo = new Date("2020-06-03");
    component.partenza = new Date("2020-06-04");
    component.adulti = "3";
    component.bambini = "0";
    component.stanze = "1";
    component.onSubmit();
    expect(component.totale).toEqual(70);
  });

  test('should compute properly 50', async() => {
    component.arrivo = new Date("2020-06-03");
    component.partenza = new Date("2020-06-04");
    component.adulti = "2";
    component.bambini = "3";
    component.stanze = "1";
    component.onSubmit();
    expect(component.totale).toEqual(50);
  });
});
