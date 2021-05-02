import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  employees = [];

  ngOnInit() {

    this.employeeService.getAllEmployees().subscribe(res => {
      if(res){
        this.employees = res;
      }
    })
  }

}
