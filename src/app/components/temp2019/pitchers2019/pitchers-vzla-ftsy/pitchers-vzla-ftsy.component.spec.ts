import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchersVzlaFtsyComponent } from './pitchers-vzla-ftsy.component';

describe('PitchersVzlaFtsyComponent', () => {
  let component: PitchersVzlaFtsyComponent;
  let fixture: ComponentFixture<PitchersVzlaFtsyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitchersVzlaFtsyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchersVzlaFtsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
