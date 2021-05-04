/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { LoaderService } from './loader.service';

describe('Service: LoaderService', () => {
  let injector:TestBed;
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderService]
    });

    injector = getTestBed();
    service = injector.get(LoaderService);
  });

  it('should ...', inject([LoaderService], (service: LoaderService) => {
    expect(service).toBeTruthy();
  }));

  it('should change loader status', () => {
    service.display(true);

    service.status$.subscribe((message) => {
      expect(message).toBe(true);
    })
  })
});
