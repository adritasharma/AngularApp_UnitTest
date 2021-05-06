import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from 'src/app/shared/models/IEmployee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeService) { }

  employeeDetail: IEmployee = null;

  ngOnInit() {
    let employeeId = this.activatedRoute.snapshot.paramMap.get('id')
    this.getEmployeeDetail(employeeId);

  }

  getEmployeeDetail(employeeId) {
    this.employeeService.getEmployeeDetail(employeeId).subscribe(res => {
      console.log(res)
      if (res) {
        this.employeeDetail = res;
      }
    })
  }
  
}
