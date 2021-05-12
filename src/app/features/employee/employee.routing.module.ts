import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { SaveEmployeeComponent } from './save-employee/save-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';


const routes: Routes = [
    { path: 'index', component: ListEmployeeComponent },
    { path: 'add', component: SaveEmployeeComponent },
    { path: 'edit/:id', component: SaveEmployeeComponent },
    { path: 'view/:id', component: ViewEmployeeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }