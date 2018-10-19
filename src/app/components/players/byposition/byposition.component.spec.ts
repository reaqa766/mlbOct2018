import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BypositionComponent } from './byposition.component';

describe('BypositionComponent', () => {
  let component: BypositionComponent;
  let fixture: ComponentFixture<BypositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BypositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BypositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
