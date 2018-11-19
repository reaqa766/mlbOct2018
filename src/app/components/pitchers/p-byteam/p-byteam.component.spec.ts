import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PByteamComponent } from './p-byteam.component';

describe('PByteamComponent', () => {
  let component: PByteamComponent;
  let fixture: ComponentFixture<PByteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PByteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PByteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
