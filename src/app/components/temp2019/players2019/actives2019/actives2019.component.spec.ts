import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Actives2019Component } from './actives2019.component';

describe('Actives2019Component', () => {
  let component: Actives2019Component;
  let fixture: ComponentFixture<Actives2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Actives2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Actives2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
