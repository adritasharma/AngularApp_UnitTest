/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { EmployeeService } from './employee.service';

describe('Service: EmployeeService', () => {
  let injector:TestBed;
  let service: EmployeeService;
  let httpMock: HttpTestingController;
  let baseUrl = `${environment.apiUrl}/employees`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService]
    });

    injector = getTestBed();
    service = injector.get(EmployeeService);
    httpMock = injector.get(HttpTestingController)
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should ...', inject([EmployeeService], (service: EmployeeService) => {
    expect(service).toBeTruthy();
  }));

  it('should return All Employees', () => {
    service.getAllEmployees().subscribe();

    const req = httpMock.expectOne(`${baseUrl}`);
    expect(req.request.method).toBe('GET');
  });

});
