import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfogShowComponent } from './infog-show.component';

describe('InfogShowComponent', () => {
  let component: InfogShowComponent;
  let fixture: ComponentFixture<InfogShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfogShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfogShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
