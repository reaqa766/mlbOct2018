import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PActivesComponent } from './p-actives.component';

describe('PActivesComponent', () => {
  let component: PActivesComponent;
  let fixture: ComponentFixture<PActivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PActivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PActivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
