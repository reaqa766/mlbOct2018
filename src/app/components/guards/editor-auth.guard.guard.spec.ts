import { TestBed, async, inject } from '@angular/core/testing';

import { EditorAuth.GuardGuard } from './../guards/editor-auth.guard.guard';

describe('EditorAuth.GuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditorAuth.GuardGuard]
    });
  });

  it('should ...', inject([EditorAuth.GuardGuard], (guard: EditorAuth.GuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
