/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeeComponent } from './list-employee.component';
import { EmployeeService } from '../employee.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
describe('ListEmployeeComponent', () => {
  let component: ListEmployeeComponent;
  let fixture: ComponentFixture<ListEmployeeComponent>;
  let mockEmployeeService
  let employeeSampleData;


  beforeEach(() => {
    employeeSampleData = [
      { employeeId: 1, fullName: "Adrita Sharma" },
      { employeeId: 2, fullName: "Deepika Das" },
      { employeeId: 3, fullName: "Ankita Sarkar" }
    ]
    mockEmployeeService = jasmine.createSpyObj(['getAllEmployees'])

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SharedModule,RouterTestingModule],
      declarations: [ListEmployeeComponent],
      providers: [
        { provide: EmployeeService, useValue: mockEmployeeService }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListEmployeeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set employees correctly from the service', () => {
    mockEmployeeService.getAllEmployees.and.returnValue(of(employeeSampleData));
    fixture.detectChanges();
    //component.ngOnInit()

    expect(mockEmployeeService.getAllEmployees).toHaveBeenCalled();
    expect(component.employees.length).toBe(3);
  });
  it('should set employees empty on service error', () => {
    mockEmployeeService.getAllEmployees.and.returnValue(throwError({status: 500}));
    fixture.detectChanges();

    expect(mockEmployeeService.getAllEmployees).toHaveBeenCalled();
    expect(component.employees.length).toBe(0);
  });
  it('should set employees empty on no data', () => {
    mockEmployeeService.getAllEmployees.and.returnValue(of(null));
    fixture.detectChanges();

    expect(mockEmployeeService.getAllEmployees).toHaveBeenCalled();
    expect(component.employees.length).toBe(0);
  });
  it(`should call employeeService.deleteEmployee when list action Component's 
    delete button is clicked`, () => {
      mockEmployeeService.getAllEmployees.and.returnValue(of(employeeSampleData));
      fixture.detectChanges();

  });
});
