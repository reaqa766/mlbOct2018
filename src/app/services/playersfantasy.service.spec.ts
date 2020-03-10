import { TestBed, inject } from '@angular/core/testing';

import { PlayersfantasyService } from './playersfantasy.service';

describe('PlayersfantasyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayersfantasyService]
    });
  });

  it('should be created', inject([PlayersfantasyService], (service: PlayersfantasyService) => {
    expect(service).toBeTruthy();
  }));
});
