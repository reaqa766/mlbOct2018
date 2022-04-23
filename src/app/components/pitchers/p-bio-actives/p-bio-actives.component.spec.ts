import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PBioActivesComponent } from './p-bio-actives.component';

describe('PBioActivesComponent', () => {
  let component: PBioActivesComponent;
  let fixture: ComponentFixture<PBioActivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PBioActivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PBioActivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
