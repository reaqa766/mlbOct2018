import { TestBed, inject } from '@angular/core/testing';

import { AllplayersService } from './allplayers.service';

describe('AllplayersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllplayersService]
    });
  });

  it('should be created', inject([AllplayersService], (service: AllplayersService) => {
    expect(service).toBeTruthy();
  }));
});
