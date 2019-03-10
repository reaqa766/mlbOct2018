import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebajsonsComponent } from './pruebajsons.component';

describe('PruebajsonsComponent', () => {
  let component: PruebajsonsComponent;
  let fixture: ComponentFixture<PruebajsonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebajsonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebajsonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
