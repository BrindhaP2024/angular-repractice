import { TestBed } from '@angular/core/testing';

import { ObsServiceService } from './obs-service.service';

describe('ObsServiceService', () => {
  let service: ObsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
