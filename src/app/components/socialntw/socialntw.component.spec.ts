import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialntwComponent } from './socialntw.component';

describe('SocialntwComponent', () => {
  let component: SocialntwComponent;
  let fixture: ComponentFixture<SocialntwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialntwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialntwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
