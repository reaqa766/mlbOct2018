import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioActives2019Component } from './bio-actives2019.component';

describe('BioActives2019Component', () => {
  let component: BioActives2019Component;
  let fixture: ComponentFixture<BioActives2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioActives2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioActives2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
