import { TestBed, inject } from '@angular/core/testing';

import { PlayersFantasyService } from './players-fantasy.service';

describe('PlayersFantasyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayersFantasyService]
    });
  });

  it('should be created', inject([PlayersFantasyService], (service: PlayersFantasyService) => {
    expect(service).toBeTruthy();
  }));
});
