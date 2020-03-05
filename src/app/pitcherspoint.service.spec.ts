import { TestBed, inject } from '@angular/core/testing';

import { PitcherspointService } from './pitcherspoint.service';

describe('PitcherspointService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PitcherspointService]
    });
  });

  it('should be created', inject([PitcherspointService], (service: PitcherspointService) => {
    expect(service).toBeTruthy();
  }));
});
