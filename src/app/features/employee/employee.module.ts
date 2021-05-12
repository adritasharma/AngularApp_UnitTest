import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SaveEmployeeComponent } from './save-employee/save-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { EmployeeRoutingModule } from './employee.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    ViewEmployeeComponent,
    SaveEmployeeComponent,
    ListEmployeeComponent
  ],
  providers: [
    DatePipe
  ],

})
export class EmployeeModule { }
