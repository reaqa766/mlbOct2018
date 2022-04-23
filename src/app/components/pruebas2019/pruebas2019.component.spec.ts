import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pruebas2019Component } from './pruebas2019.component';

describe('Pruebas2019Component', () => {
  let component: Pruebas2019Component;
  let fixture: ComponentFixture<Pruebas2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pruebas2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pruebas2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
