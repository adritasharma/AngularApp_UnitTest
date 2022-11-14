/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AgePipe } from './age.pipe';

describe('Pipe: Age', () => {
  it('create an instance', () => {
    let pipe = new AgePipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms Date to Time span', () => {
    let pipe = new AgePipe();
    let today = new Date();
    var testDate = new Date(today.setMonth(today.getMonth() - 2));
    expect(pipe.transform(testDate)).toBe('2 months');
  });
});
