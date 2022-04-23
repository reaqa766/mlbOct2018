import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PDailyComponent } from './p-daily.component';

describe('PDailyComponent', () => {
  let component: PDailyComponent;
  let fixture: ComponentFixture<PDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
