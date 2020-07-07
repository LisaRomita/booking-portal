import { TestBed, inject } from '@angular/core/testing';

import { PrenotazioneService } from './prenotazione.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Message } from '../../contact-us/models/message';
import { Prenotazioni } from '../models/prenotazioni';

describe('PrenotazioneService', () => {
  let service: PrenotazioneService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(PrenotazioneService);
  });

  test('should be created', () => {
    const service: PrenotazioneService = TestBed.get(PrenotazioneService);
    expect(service).toBeTruthy();
  });  

  test('should post prenotazione', inject(
    [HttpTestingController, PrenotazioneService],
    (httpMock: HttpTestingController, rs: PrenotazioneService) =>  {
        const p: Prenotazioni = {
          id:1, 
          nome:"mario",
          cognome: "rossi",
          email: "mail",
          arrivo: new Date('2020-06-22'),
          partenza: new Date("2020-06-24"),
          adulti: 2,
          bambini: 1,
          stanze: 1,
          pagamento: "paypal",
          tipologia: 7
        };

    service.addPrenotazione(p).subscribe(res => {
          expect(res).toEqual(p);
      });
    

    const mockReq = httpMock.expectOne(rs.urlPrenotazioni);

    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(p);

    httpMock.verify();
  }))

});
