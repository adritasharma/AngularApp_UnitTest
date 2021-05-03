import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveEmployeeComponent } from './save-employee/save-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { EmployeeRoutingModule } from './employee.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule
  ],
  declarations: [
    SaveEmployeeComponent,
    ListEmployeeComponent
  ]
})
export class EmployeeModule { }
