import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitcherinfoComponent } from './pitcherinfo.component';

describe('PitcherinfoComponent', () => {
  let component: PitcherinfoComponent;
  let fixture: ComponentFixture<PitcherinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitcherinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitcherinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
