import { TestBed, inject } from '@angular/core/testing';

import { WordlinkService } from './wordlink.service';

describe('WordlinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordlinkService]
    });
  });

  it('should be created', inject([WordlinkService], (service: WordlinkService) => {
    expect(service).toBeTruthy();
  }));
});
