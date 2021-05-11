/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ViewEmployeeComponent } from './view-employee.component';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('ViewEmployeeComponent', () => {
  let component: ViewEmployeeComponent;
  let fixture: ComponentFixture<ViewEmployeeComponent>;
  let mockActivatedRoute
  let mockEmployeeService
  let employeeSampleData;


  beforeEach(() => {
    employeeSampleData = { employeeId: 1, fullName: "Adrita Sharma" }
    mockEmployeeService = jasmine.createSpyObj(['getEmployeeDetail'])

    mockActivatedRoute = {
      snapshot: {
        paramMap: { get: () => { return 1 } }
      }
    }

    TestBed.configureTestingModule({
      declarations: [ViewEmployeeComponent],
      imports:[HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: EmployeeService, useValue: mockEmployeeService }
      ]
    })
    .compileComponents();


    fixture = TestBed.createComponent(ViewEmployeeComponent);
    component = fixture.componentInstance;
    mockEmployeeService.getEmployeeDetail.and.returnValue(of(employeeSampleData));
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set employee correctly from the service', () => {
    mockEmployeeService.getEmployeeDetail.and.returnValue(of(employeeSampleData));
    fixture.detectChanges();
    //component.ngOnInit()

    expect(mockEmployeeService.getEmployeeDetail).toHaveBeenCalled();
    expect(component.employeeDetail.fullName).toBe(employeeSampleData.fullName);
  });

  
});
