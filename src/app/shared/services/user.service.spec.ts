import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Message } from '../../pages/contact-us/models/message';
import { Prenotazioni } from '../../pages/prenota/models/prenotazioni';

describe('UserService', () => {
    let service: UserService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ]
      });
      service = TestBed.inject(UserService);
    });
  
    test('should be created', () => {
      const service: UserService = TestBed.get(UserService);
      expect(service).toBeTruthy();
    });
  
    test('should get user', inject(                 //we use the inject utility to inject the needed services into our test
      [HttpTestingController, UserService],
      (httpMock: HttpTestingController, rs: UserService) =>  {
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
  
    
  });
  