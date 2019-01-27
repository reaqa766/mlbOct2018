import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Byposition2019Component } from './byposition2019.component';

describe('Byposition2019Component', () => {
  let component: Byposition2019Component;
  let fixture: ComponentFixture<Byposition2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Byposition2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Byposition2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
