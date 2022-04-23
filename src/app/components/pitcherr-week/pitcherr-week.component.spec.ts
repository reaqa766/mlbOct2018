import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitcherrWeekComponent } from './pitcherr-week.component';

describe('PitcherrWeekComponent', () => {
  let component: PitcherrWeekComponent;
  let fixture: ComponentFixture<PitcherrWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitcherrWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitcherrWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
