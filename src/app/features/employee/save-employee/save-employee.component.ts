import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IEmployee } from 'src/app/shared/models/IEmployee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-save-employee',
  templateUrl: './save-employee.component.html',
  styleUrls: ['./save-employee.component.css']
})
export class SaveEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
    private datePipe: DatePipe, private _router: Router) { }

  employeeForm: FormGroup

  ngOnInit() {

    this.employeeForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      dob: new FormControl(null),
      doj: new FormControl(this.datePipe.transform(new Date(), 'yyyy-MM-dd')),
    });
  }

  onSubmit() {
    this.employeeService.addEmployee(this.employeeForm.value).subscribe(res => {
      console.log(res)
      this._router.navigateByUrl('employee/index')
    })
  }

}
