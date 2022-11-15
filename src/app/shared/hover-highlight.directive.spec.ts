/* tslint:disable:no-unused-variable */

import { Component, DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HoverHighlightDirective } from './hover-highlight.directive';


@Component({
  selector: 'my-test-component',
  template: '<a class="mytag" [hoverHighlight]="color" >test</a>'
})
export class TestComponent {
  color:string = 'blue';
}

describe('Directive: HoverHighlight', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputEl: DebugElement;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        HoverHighlightDirective
      ]
    })

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();   // trigger change detection so that UI renders and you can access element in next step.
    inputEl = fixture.debugElement.query(By.css('.mytag'));

  });

  it('should create an instance', () => {
    const directive = new HoverHighlightDirective(inputEl);
    expect(directive).toBeTruthy();
  });

  // it('detect hover changes', () => {
  //   inputEl.triggerEventHandler('mouseenter', {});
  //   fixture.detectChanges();
  //   expect(inputEl.nativeElement.style.backgroundColor).toBe(component.color);
  //   inputEl.triggerEventHandler('mouseleave', {});
  //   fixture.detectChanges();
  //   expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
  // });
});
