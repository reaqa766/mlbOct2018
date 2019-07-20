import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LvbpHomeComponent } from './lvbp-home.component';

describe('LvbpHomeComponent', () => {
  let component: LvbpHomeComponent;
  let fixture: ComponentFixture<LvbpHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LvbpHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LvbpHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
