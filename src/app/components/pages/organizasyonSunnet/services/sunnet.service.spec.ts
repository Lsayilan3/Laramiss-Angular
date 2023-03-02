/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SunnetService } from './sunnet.service';

describe('Service: Sunnet', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SunnetService]
    });
  });

  it('should ...', inject([SunnetService], (service: SunnetService) => {
    expect(service).toBeTruthy();
  }));
});
