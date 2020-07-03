import { TestBed, inject } from '@angular/core/testing';

import { RestService } from './rest.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Message } from './message';
import { Prenotazioni } from './prenotazioni';

describe('RestService', () => {
  let service: RestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(RestService);
  });

  test('should be created', () => {
    const service: RestService = TestBed.get(RestService);
    expect(service).toBeTruthy();
  });

  test('should get user', inject(                 //we use the inject utility to inject the needed services into our test
    [HttpTestingController, RestService],
    (httpMock: HttpTestingController, rs: RestService) =>  {
        const mockUsers = [
          { id: "mrossi",
          nome: "mario",
          cognome: "rossi",
          password: "mrossi",
          email: "m.rossi@email.com"}
        ];
    service.getUser('mrossi').subscribe(u => {    //we expect the result of the subscribe to be equal to our mock user
          expect(u).toEqual(mockUsers);
      });
    
    /*We then make use of the HttpTestingController (injected in the test as httpMock) to assert 
    that one request was made to the service’s url property. */
    const mockReq = httpMock.expectOne(rs.urlUtenti+'/mrossi');

    /*we assert that the request hasn’t been cancelled and the the response if of type json */
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');

    /*we call flush on the mock request and pass-in our mock users. 
    The flush method completes the request using the data passed to it. */
    mockReq.flush(mockUsers);

    /*we call the verify method on our HttpTestingController instance 
    to ensure that there are no outstanding requests to be made. */
    httpMock.verify();
  }))

  test('should post message', inject(
    [HttpTestingController, RestService],
    (httpMock: HttpTestingController, rs: RestService) =>  {
        const mes: Message = new Message(1, "mail", "ciao");
        
    service.saveMes(mes).subscribe(m => {
          expect(m).toEqual(mes);
      });
    

    const mockReq = httpMock.expectOne(rs.urlMess);

    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(mes);

    httpMock.verify();
  }))

  test('should post prenotazione', inject(
    [HttpTestingController, RestService],
    (httpMock: HttpTestingController, rs: RestService) =>  {
        const p: Prenotazioni = new Prenotazioni(1, "mario", "rossi", "mail", new Date('2020-06-22'), new Date("2020-06-24"), 2, 1, 1, "paypal", "family" );

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
