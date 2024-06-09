import { TestBed } from '@angular/core/testing';

import { UrlFileService } from './url-file.service';

describe('UrlFileService', () => {
  let service: UrlFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
