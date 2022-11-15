/* tslint:disable:no-unused-variable */

import { HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { HttpErrorInterceptorService } from './error-interceptor.service';
import { HttpService } from './http.service';
import { NotificationService } from './notification.service';

describe('Service: ErrorInterceptor', () => {

  let httpErrorInterceptor;
  let mockHttpService;
  let httpHandlerSpy;

  let mockNotificationService;

  beforeEach(() => {
    mockHttpService = jasmine.createSpyObj(['get'])
    mockNotificationService = jasmine.createSpyObj('NotificationService', ['displayToastr']);
    httpHandlerSpy = jasmine.createSpyObj('HttpHandler', ['handle']);
    httpErrorInterceptor = new HttpErrorInterceptorService(mockNotificationService);

    TestBed.configureTestingModule({
      providers: [
        { provide: HttpService, useValue: mockHttpService },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpErrorInterceptorService,
          multi: true,
        },
        { provide: NotificationService, useValue: mockNotificationService }
      ],
      imports: [HttpClientTestingModule]
    });
  });

  it('should ...', inject([HttpErrorInterceptorService], (service: HttpErrorInterceptorService) => {
    expect(service).toBeTruthy();
  }));
  it('should handle error', () => {

    mockNotificationService.displayToastr.and.callThrough();
    const mockErrorResponse = { status: 500, statusText: 'error', message: 'test-error' };

    httpHandlerSpy.handle.and.returnValue(throwError(
      { error: mockErrorResponse }
    ));

    httpErrorInterceptor.intercept(mockHttpService, httpHandlerSpy)
      .subscribe(
        result => { },
        err => {
          expect(err.error.message).toEqual('test-error');
          expect(mockNotificationService.displayToastr).toHaveBeenCalled();
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
