import { TestBed } from '@angular/core/testing';

import { BlogUpdateService } from './blog-update.service';

describe('BlogUpdateService', () => {
  let service: BlogUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
