import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioActivesComponent } from './bio-actives.component';

describe('BioActivesComponent', () => {
  let component: BioActivesComponent;
  let fixture: ComponentFixture<BioActivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioActivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioActivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
