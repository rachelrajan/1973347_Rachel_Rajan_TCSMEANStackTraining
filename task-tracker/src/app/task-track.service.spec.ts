import { TestBed } from '@angular/core/testing';

import { TaskTrackService } from './task-track.service';

describe('TaskTrackService', () => {
  let service: TaskTrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskTrackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
