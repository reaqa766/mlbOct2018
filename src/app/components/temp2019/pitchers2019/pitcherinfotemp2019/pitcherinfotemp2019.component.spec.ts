import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pitcherinfotemp2019Component } from './pitcherinfotemp2019.component';

describe('Pitcherinfotemp2019Component', () => {
  let component: Pitcherinfotemp2019Component;
  let fixture: ComponentFixture<Pitcherinfotemp2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pitcherinfotemp2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pitcherinfotemp2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
