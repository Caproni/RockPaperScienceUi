import { TestBed } from '@angular/core/testing';

import { BlogDeleteService } from './blog-delete.service';

describe('BlogDeleteService', () => {
  let service: BlogDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
