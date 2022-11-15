/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

describe('Service: HttpService', () => {
  let injector:TestBed;
  let service: HttpService;
  let httpMock: HttpTestingController;
  let baseUrl = `${environment.apiUrl}`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [HttpService]
    });

    injector = getTestBed();
    service = injector.get(HttpService);
    httpMock = injector.get(HttpTestingController)
  });

  it('should ...', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));

  it('should create a GET request', () => {

    const testTitle = "Unit Test"

    service.get(`${baseUrl}`).subscribe(res => {
      expect(res).toBeTruthy;
      expect(res.title).toBe(testTitle);
    });
 
    const req = httpMock.expectOne(`${baseUrl}`);
    req.flush({title:testTitle});

    expect(req.request.method).toBe('GET');

  });

  it('should create a POST request', () => {
    service.post(`${baseUrl}`, {}).subscribe();
 
    const req = httpMock.expectOne(`${baseUrl}`);
    expect(req.request.method).toBe('POST');
  });

  it('should create a PUT request', () => {
    service.update(`${baseUrl}`, {}).subscribe();
 
    const req = httpMock.expectOne(`${baseUrl}`);
    expect(req.request.method).toBe('PUT');
  });

  it('should create a DELETE request', () => {
    service.delete(`${baseUrl}`).subscribe();
 
    const req = httpMock.expectOne(`${baseUrl}`);
    expect(req.request.method).toBe('DELETE');
  });

  
  it('should create a request to get file', () => {
    service.getFile(`${baseUrl}`).subscribe();
 
    const req = httpMock.expectOne(`${baseUrl}`);
    expect(req.request.method).toBe('GET');
    expect(req.request.responseType).toBe('blob');
    req.flush(new Blob());
  });
});
