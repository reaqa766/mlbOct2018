import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigaTeamComponent } from './liga-team.component';

describe('LigaTeamComponent', () => {
  let component: LigaTeamComponent;
  let fixture: ComponentFixture<LigaTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigaTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigaTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
