/* tslint:disable:no-unused-variable */

import { HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { HttpErrorInterceptorService } from './error-interceptor.service';
import { HttpService } from './http.service';

describe('Service: ErrorInterceptor', () => {

  let httpErrorInterceptor;
  let loaderServiceSpy;
  let mockHttpService
  let httpHandlerSpy;

  beforeEach(() => {
    mockHttpService = jasmine.createSpyObj(['get'])
    loaderServiceSpy = jasmine.createSpyObj('LoaderService', ['display']);
    httpErrorInterceptor = new HttpErrorInterceptorService(loaderServiceSpy);
    httpHandlerSpy = jasmine.createSpyObj('HttpHandler', ['handle']);

    TestBed.configureTestingModule({
      providers: [
        { provide: HttpService, useValue: mockHttpService },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpErrorInterceptorService,
          multi: true,
        }
      ],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([HttpErrorInterceptorService], (service: HttpErrorInterceptorService) => {
    expect(service).toBeTruthy();
  }));
  it('should handle error', () => {

    const error = { status: 401, statusText: 'error' };

    httpHandlerSpy.handle.and.returnValue(throwError(
      {
        error:
          { message: 'test-error' }
      }
    ));

    httpErrorInterceptor.intercept(mockHttpService, httpHandlerSpy)
      .subscribe(
        result => console.log('good', result),
        err => {
          console.log('error', err);
          expect(err.error.message).toEqual('test-error');
        }
      );

  })

  it('should pass success request', () => {

    httpHandlerSpy.handle.and.returnValue(of(new HttpResponse({ status: 200, body: { test: "test" } })));

    httpErrorInterceptor.intercept(mockHttpService, httpHandlerSpy)
      .subscribe(
        result => {
          expect(result.body.test).toEqual('test');
        },
        err => {
        }
      );

  })
});
