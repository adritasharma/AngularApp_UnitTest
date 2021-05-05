/* tslint:disable:no-unused-variable */

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed,  inject } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { HttpAuthInterceptorService } from './http-auth-interceptor.service';
import { HttpService } from './http.service';

describe('Service: HttpAuthInterceptor', () => {

  let httpMock: HttpTestingController;
  let baseUrl = `${environment.apiUrl}`;
  let httpService: HttpService
  let httpAuthInterceptor;
  let loaderServiceSpy;
  let mockHttpService
  beforeEach(() => {
    mockHttpService = jasmine.createSpyObj(['get'])
    loaderServiceSpy = jasmine.createSpyObj('LoaderService', ['display']);
    httpAuthInterceptor = new HttpAuthInterceptorService(loaderServiceSpy);

    TestBed.configureTestingModule({
      providers: [
        HttpService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpAuthInterceptorService,
          multi: true,
        }],
      imports: [HttpClientTestingModule]
    });

    httpService = TestBed.get(HttpService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should ...', inject([HttpAuthInterceptorService], (service: HttpAuthInterceptorService) => {
    expect(service).toBeTruthy();
  }));

  it('should add an Authorization header', () => {
    httpService.get(baseUrl).subscribe();
    const httpRequest = httpMock.expectOne(`${baseUrl}`);
    expect(httpRequest.request.headers.has('Authorization')).toEqual(true);
  });

});
