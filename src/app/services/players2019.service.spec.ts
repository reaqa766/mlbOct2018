import { TestBed, inject } from '@angular/core/testing';

import { Players2019Service } from './players2019.service';

describe('Players2019Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Players2019Service]
    });
  });

  it('should be created', inject([Players2019Service], (service: Players2019Service) => {
    expect(service).toBeTruthy();
  }));
});
