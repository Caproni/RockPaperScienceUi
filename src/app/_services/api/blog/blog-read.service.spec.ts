import { TestBed } from '@angular/core/testing';

import { BlogReadService } from './blog-read.service';

describe('BlogReadService', () => {
  let service: BlogReadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogReadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
