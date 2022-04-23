import { TestBed, inject } from '@angular/core/testing';

import { PlayerspointService } from './playerspoint.service';

describe('PlayerspointService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerspointService]
    });
  });

  it('should be created', inject([PlayerspointService], (service: PlayerspointService) => {
    expect(service).toBeTruthy();
  }));
});
