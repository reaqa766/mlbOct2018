import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuepasohoyComponent } from './quepasohoy.component';

describe('QuepasohoyComponent', () => {
  let component: QuepasohoyComponent;
  let fixture: ComponentFixture<QuepasohoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuepasohoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuepasohoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
