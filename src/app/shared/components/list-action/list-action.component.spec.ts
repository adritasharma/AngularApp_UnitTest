/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListActionComponent } from './list-action.component';

describe('ListActionComponent', () => {
  let component: ListActionComponent;
  let fixture: ComponentFixture<ListActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListActionComponent ]
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
});
