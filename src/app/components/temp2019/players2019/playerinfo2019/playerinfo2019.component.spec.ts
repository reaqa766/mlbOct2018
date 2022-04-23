import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Playerinfo2019Component } from './playerinfo2019.component';

describe('Playerinfo2019Component', () => {
  let component: Playerinfo2019Component;
  let fixture: ComponentFixture<Playerinfo2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Playerinfo2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Playerinfo2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
