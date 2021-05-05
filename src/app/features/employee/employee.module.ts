import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveEmployeeComponent } from './save-employee/save-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { EmployeeRoutingModule } from './employee.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule
  ],
  declarations: [
    ViewEmployeeComponent,
    SaveEmployeeComponent,
    ListEmployeeComponent
  ]
})
export class EmployeeModule { }
