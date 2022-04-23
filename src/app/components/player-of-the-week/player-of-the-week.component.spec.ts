import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerOfTheWeekComponent } from './player-of-the-week.component';

describe('PlayerOfTheWeekComponent', () => {
  let component: PlayerOfTheWeekComponent;
  let fixture: ComponentFixture<PlayerOfTheWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerOfTheWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerOfTheWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
