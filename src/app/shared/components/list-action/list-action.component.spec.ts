/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListActionComponent } from './list-action.component';

describe('ListActionComponent', () => {
  let component: ListActionComponent;
  let fixture: ComponentFixture<ListActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListActionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should listen for delete icon click', () => {
    spyOn(component.onDelete, 'emit');
    component.onDeleteClick();
    fixture.detectChanges();

    expect(component.onDelete.emit).toHaveBeenCalled();
  });

  // it('should check Delete Click', fakeAsync(() => {
  //   spyOn(component, 'onDeleteClick');

  //   let button = fixture.debugElement.nativeElement.querySelector('#deleteAction');
  //   button.click();
  //   tick();
  //   expect(component.onDeleteClick).toHaveBeenCalled();
  //   expect(component.onDelete.emit).toHaveBeenCalled()
  // }));

});
