import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/shared/models/IEmployee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  employees:IEmployee[] = [];

  ngOnInit() {

    this.employeeService.getAllEmployees().subscribe(res => {
      console.log(res)
      if(res){
        this.employees = res;
      }
    })
  }

  deleteEmployee(empId){
    alert("delete: " + empId)
  }

}
