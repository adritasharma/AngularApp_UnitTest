import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
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
