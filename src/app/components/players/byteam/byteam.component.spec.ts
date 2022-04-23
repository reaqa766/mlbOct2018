import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByteamComponent } from './byteam.component';

describe('ByteamComponent', () => {
  let component: ByteamComponent;
  let fixture: ComponentFixture<ByteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
