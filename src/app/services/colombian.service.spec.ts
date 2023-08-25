import { TestBed, inject } from '@angular/core/testing';

import { ColombianService } from './colombian.service';

describe('ColombianService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColombianService]
    });
  });

  it('should be created', inject([ColombianService], (service: ColombianService) => {
    expect(service).toBeTruthy();
  }));
});
