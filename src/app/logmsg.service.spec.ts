import { TestBed, inject } from '@angular/core/testing';

import { LogmsgService } from './logmsg.service';

describe('LogmsgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogmsgService]
    });
  });

  it('should be created', inject([LogmsgService], (service: LogmsgService) => {
    expect(service).toBeTruthy();
  }));
});
