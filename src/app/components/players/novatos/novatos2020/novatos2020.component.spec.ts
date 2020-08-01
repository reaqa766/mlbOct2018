import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Novatos2020Component } from './novatos2020.component';

describe('Novatos2020Component', () => {
  let component: Novatos2020Component;
  let fixture: ComponentFixture<Novatos2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Novatos2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Novatos2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
