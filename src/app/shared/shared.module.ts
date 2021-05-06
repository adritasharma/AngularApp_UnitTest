import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgePipe } from './pipes/age.pipe';
import { ListActionComponent } from './components/list-action/list-action.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AgePipe,
    ListActionComponent
  ],
  exports:[
    AgePipe,
    ListActionComponent
  ]
})
export class SharedModule { }
