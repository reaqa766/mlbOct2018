import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigaFantasySelectComponent } from './liga-fantasy-select.component';

describe('LigaFantasySelectComponent', () => {
  let component: LigaFantasySelectComponent;
  let fixture: ComponentFixture<LigaFantasySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigaFantasySelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigaFantasySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
