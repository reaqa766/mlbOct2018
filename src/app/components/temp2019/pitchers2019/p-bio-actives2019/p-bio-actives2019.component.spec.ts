import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PBioActives2019Component } from './p-bio-actives2019.component';

describe('PBioActives2019Component', () => {
  let component: PBioActives2019Component;
  let fixture: ComponentFixture<PBioActives2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PBioActives2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PBioActives2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
