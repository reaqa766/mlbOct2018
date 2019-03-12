import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LideresPitchersComponent } from './lideres-pitchers.component';

describe('LideresPitchersComponent', () => {
  let component: LideresPitchersComponent;
  let fixture: ComponentFixture<LideresPitchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LideresPitchersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LideresPitchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
