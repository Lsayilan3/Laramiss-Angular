/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KinaaService } from './kinaa.service';

describe('Service: Kinaa', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KinaaService]
    });
  });

  it('should ...', inject([KinaaService], (service: KinaaService) => {
    expect(service).toBeTruthy();
  }));
});
