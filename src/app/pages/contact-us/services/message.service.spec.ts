import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Message } from '../models/message';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(MessageService);
  });

  test('should be created', () => {
    const service: MessageService = TestBed.get(MessageService);
    expect(service).toBeTruthy();
  });


  test('should post message', inject(
    [HttpTestingController, MessageService],
    (httpMock: HttpTestingController, rs: MessageService) =>  {
        const mes: Message = {
          id:1,
          email: "mail",
          txt: "ciao"
        };
        
    service.saveMes(mes).subscribe(m => {
          expect(m).toEqual(mes);
      });
    

    const mockReq = httpMock.expectOne(rs.urlMess);

    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(mes);

    httpMock.verify();
  }))

  

});
