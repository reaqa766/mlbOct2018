import { TestBed, inject } from '@angular/core/testing';

import { DominicanService } from './dominican.service';

describe('DominicanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DominicanService]
    });
  });

  it('should be created', inject([DominicanService], (service: DominicanService) => {
    expect(service).toBeTruthy();
  }));
});
