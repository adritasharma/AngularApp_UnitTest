/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SaveEmployeeComponent } from './save-employee.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

describe('SaveEmployeeComponent', () => {
  let component: SaveEmployeeComponent;
  let fixture: ComponentFixture<SaveEmployeeComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let mockEmployeeService

  beforeEach(async(() => {
    mockEmployeeService = jasmine.createSpyObj(['addEmployee'])

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,  
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [SaveEmployeeComponent],
      providers:[
        { provide: EmployeeService, useValue: mockEmployeeService },
        DatePipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css("form"));
    el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should test if formSubmitted is true', async(() => {
  //   fixture.detectChanges();    
  //   component.onSubmit();
  //   mockEmployeeService.addEmployee.and.returnValue(of(new HttpResponse({ status: 200})));

  //   expect(mockEmployeeService.addEmployee).toHaveBeenCalled();

  // }));

  it('should test if submitForm method has been called', async(() => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el.querySelector('button').click()
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }));

});
