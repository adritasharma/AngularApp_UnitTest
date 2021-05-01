import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { SaveEmployeeComponent } from './save-employee/save-employee.component';


const routes: Routes = [
    { path: 'index', component: ListEmployeeComponent },
    { path: 'save', component: SaveEmployeeComponent },
    { path: 'save/:id', component: SaveEmployeeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }