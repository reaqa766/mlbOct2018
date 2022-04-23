import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PByteam2019Component } from './p-byteam2019.component';

describe('PByteam2019Component', () => {
  let component: PByteam2019Component;
  let fixture: ComponentFixture<PByteam2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PByteam2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PByteam2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
