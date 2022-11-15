/* tslint:disable:no-unused-variable */

import { HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpInterceptorService } from './http-interceptor.service';
import { HttpService } from './http.service';
import { LoaderService } from './loader.service';

describe('Service: HttpInterceptor', () => {

  let httpMock: HttpTestingController;
  let baseUrl = `${environment.apiUrl}`;
  let httpService: HttpService
  let httpInterceptor;
  let mockLoaderService;
  let mockHttpService
  beforeEach(() => {
    mockHttpService = jasmine.createSpyObj(['get'])
    mockLoaderService = jasmine.createSpyObj('LoaderService', ['display']);
    httpInterceptor = new HttpInterceptorService(mockLoaderService);

    TestBed.configureTestingModule({
      providers: [
        HttpService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpInterceptorService,
          multi: true,
        },
        { provide: LoaderService, useValue: mockLoaderService }
      ],
      imports: [HttpClientTestingModule]
    });

    httpService = TestBed.get(HttpService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should ...', inject([HttpInterceptorService], (service: HttpInterceptorService) => {
    expect(service).toBeTruthy();
  }));

  it('should turn on and off loader', () => {
    mockLoaderService.display.and.callThrough();
    httpService.get(baseUrl).subscribe(res => {
      expect(mockLoaderService.display).toHaveBeenCalledTimes(2);
    });
    const req = httpMock.expectOne(`${baseUrl}`);
    req.flush({});
  });

});
