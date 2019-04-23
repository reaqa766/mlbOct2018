import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugEquipVzlaComponent } from './jug-equip-vzla.component';

describe('JugEquipVzlaComponent', () => {
  let component: JugEquipVzlaComponent;
  let fixture: ComponentFixture<JugEquipVzlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugEquipVzlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugEquipVzlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
