import { TestBed, inject } from '@angular/core/testing';

import { StanzeService } from './stanze.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Message } from '../../pages/contact-us/models/message';
import { Prenotazioni } from '../../pages/prenota/models/prenotazioni';

describe('StanzeService', () => {
  let service: StanzeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(StanzeService);
  });

  test('should be created', () => {
    const service: StanzeService = TestBed.get(StanzeService);
    expect(service).toBeTruthy();
  });

  test('should get stanza', inject(                 //we use the inject utility to inject the needed services into our test
    [HttpTestingController, StanzeService],
    (httpMock: HttpTestingController, rs: StanzeService) =>  {
        const mockRoom = [
          { id: 1,
          tipo: "singola",
          prezzo: 50,
          rate: 3,
          src: "https://www.bwcityhotel-ge.it/resources/images/7eda536e-8b53-4208-8ca9-60cd7c00f204/it/B/camera-singola-nel-centro-di-genova.jpg"
        }
        ];
    service.getStanza(1).subscribe(u => {    //we expect the result of the subscribe to be equal to our mock user
          expect(u).toEqual(mockRoom);
      });
    
    /*We then make use of the HttpTestingController (injected in the test as httpMock) to assert 
    that one request was made to the service’s url property. */
    const mockReq = httpMock.expectOne(rs.url+'/1');

    /*we assert that the request hasn’t been cancelled and the the response if of type json */
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');

    /*we call flush on the mock request and pass-in our mock users. 
    The flush method completes the request using the data passed to it. */
    mockReq.flush(mockRoom);

    /*we call the verify method on our HttpTestingController instance 
    to ensure that there are no outstanding requests to be made. */
    httpMock.verify();
  }))


  


});
