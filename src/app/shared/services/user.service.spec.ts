import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Utenti } from '../models/utenti';

describe('UserService', () => {
    let service: UserService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ]
      });
      service = TestBed.inject(UserService);
    });
  
    test('should be created', () => {
      service = TestBed.get(UserService);
      expect(service).toBeTruthy();
    });
  
    test('should get a user', inject(                 //we use the inject utility to inject the needed services into our test
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
      const mockReq = httpMock.expectOne(rs.urlUtenti+'/mrossi.json');
  
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

    test('should get all users', inject(                 //we use the inject utility to inject the needed services into our test
      [HttpTestingController, UserService],
      (httpMock: HttpTestingController, rs: UserService) =>  {
          const mockUsers = [
            { id: "mrossi",
            nome: "mario",
            cognome: "rossi",
            password: "mrossi",
            email: "m.rossi@email.com"},
            {
              id: "dbianchi",
              nome: "davide",
              cognome: "bianchi",
              password: "dbianchi",
              email: "d.bianchi@mail.com"
            }
          ];
      service.getUtenti().subscribe(u => {    //we expect the result of the subscribe to be equal to our mock user
            expect(u).toEqual(mockUsers);
        });
      
      /*We then make use of the HttpTestingController (injected in the test as httpMock) to assert 
      that one request was made to the service’s url property. */
      const mockReq = httpMock.expectOne(rs.urlUtenti+'.json');
  
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

    test('should add user', inject(                 //we use the inject utility to inject the needed services into our test
      [HttpTestingController, UserService],
      (httpMock: HttpTestingController, rs: UserService) =>  {
          const u:Utenti = 
            { id: "mrossi",
            nome: "mario",
            cognome: "rossi",
            password: "mrossi",
            email: "m.rossi@email.com"}
          ;
      service.addUser(u).subscribe(utente => {    //we expect the result of the subscribe to be equal to our mock user
            expect(utente).toEqual(u);
        });
      
      /*We then make use of the HttpTestingController (injected in the test as httpMock) to assert 
      that one request was made to the service’s url property. */
      const mockReq = httpMock.expectOne(rs.urlUtenti+'/mrossi.json');
  
      /*we assert that the request hasn’t been cancelled and the the response if of type json */
      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
  
      /*we call flush on the mock request and pass-in our mock users. 
      The flush method completes the request using the data passed to it. */
      mockReq.flush(u);
  
      /*we call the verify method on our HttpTestingController instance 
      to ensure that there are no outstanding requests to be made. */
      httpMock.verify();
    }))

    test('the setter should work', async()=>{
      service = TestBed.get(UserService);
      let u: Utenti =  { id: "mrossi",
      nome: "mario",
      cognome: "rossi",
      password: "mrossi",
      email: "m.rossi@email.com"}
      service.setCurrentUser(u);
      expect(service.currentUser).toBe(u);
    })
    
    test('the getter should work', async()=>{
      service = TestBed.get(UserService);
      let u: Utenti =  { id: "mrossi",
      nome: "mario",
      cognome: "rossi",
      password: "mrossi",
      email: "m.rossi@email.com"}
      service.currentUser = u;
      let u2: Utenti = service.getCurrentUser();
      expect(u2).toBe(u);
    })
    
  });
  