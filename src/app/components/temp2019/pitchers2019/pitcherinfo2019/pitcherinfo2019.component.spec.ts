import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pitcherinfo2019Component } from './pitcherinfo2019.component';

describe('Pitcherinfo2019Component', () => {
  let component: Pitcherinfo2019Component;
  let fixture: ComponentFixture<Pitcherinfo2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pitcherinfo2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pitcherinfo2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
