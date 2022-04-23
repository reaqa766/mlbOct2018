import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsgralComponent } from './newsgral.component';

describe('NewsgralComponent', () => {
  let component: NewsgralComponent;
  let fixture: ComponentFixture<NewsgralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsgralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsgralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
