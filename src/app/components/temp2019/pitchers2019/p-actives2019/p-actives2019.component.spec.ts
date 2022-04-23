import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PActives2019Component } from './p-actives2019.component';

describe('PActives2019Component', () => {
  let component: PActives2019Component;
  let fixture: ComponentFixture<PActives2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PActives2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PActives2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
