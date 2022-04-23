import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Byteam2019Component } from './byteam2019.component';

describe('Byteam2019Component', () => {
  let component: Byteam2019Component;
  let fixture: ComponentFixture<Byteam2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Byteam2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Byteam2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
