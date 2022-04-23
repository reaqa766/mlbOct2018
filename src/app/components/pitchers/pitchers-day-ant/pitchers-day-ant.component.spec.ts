import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchersDayAntComponent } from './pitchers-day-ant.component';

describe('PitchersDayAntComponent', () => {
  let component: PitchersDayAntComponent;
  let fixture: ComponentFixture<PitchersDayAntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitchersDayAntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchersDayAntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
