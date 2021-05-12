import { TestBed } from '@angular/core/testing';

import { LearnSegmentService } from './learn-segment.service';

describe('LearnSegmentService', () => {
  let service: LearnSegmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearnSegmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
