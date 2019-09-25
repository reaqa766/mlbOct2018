import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrDiarioComponent } from './hr-diario.component';

describe('HrDiarioComponent', () => {
  let component: HrDiarioComponent;
  let fixture: ComponentFixture<HrDiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrDiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrDiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
