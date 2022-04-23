import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerWeekComponent } from './player-week.component';

describe('PlayerWeekComponent', () => {
  let component: PlayerWeekComponent;
  let fixture: ComponentFixture<PlayerWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
