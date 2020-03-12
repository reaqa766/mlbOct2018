import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchersFtsyComponent } from './pitchers-ftsy.component';

describe('PitchersFtsyComponent', () => {
  let component: PitchersFtsyComponent;
  let fixture: ComponentFixture<PitchersFtsyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitchersFtsyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchersFtsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
