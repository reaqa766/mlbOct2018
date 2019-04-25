import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovatosComponent } from './novatos.component';

describe('NovatosComponent', () => {
  let component: NovatosComponent;
  let fixture: ComponentFixture<NovatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
