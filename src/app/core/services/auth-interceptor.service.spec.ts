/* tslint:disable:no-unused-variable */

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { AuthInterceptorService } from './auth-interceptor.service';
import { HttpService } from './http.service';

describe('Service: AuthInterceptor', () => {

  let httpMock: HttpTestingController;
  let baseUrl = `${environment.apiUrl}`;
  let httpService: HttpService
  let AuthInterceptor;
  let mockHttpService;

  beforeEach(() => {
    mockHttpService = jasmine.createSpyObj(['get'])
    AuthInterceptor = new AuthInterceptorService();

    TestBed.configureTestingModule({
      providers: [
        HttpService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptorService,
          multi: true,
        }],
      imports: [HttpClientTestingModule]
    });

    httpService = TestBed.get(HttpService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should ...', inject([AuthInterceptorService], (service: AuthInterceptorService) => {
    expect(service).toBeTruthy();
  }));

  it('should add an Authorization header', () => {
    httpService.get(baseUrl).subscribe();
    const httpRequest = httpMock.expectOne(`${baseUrl}`);
    expect(httpRequest.request.headers.has('Authorization')).toEqual(true);
  });

});
