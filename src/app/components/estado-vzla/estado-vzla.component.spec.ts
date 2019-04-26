import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoVzlaComponent } from './estado-vzla.component';

describe('EstadoVzlaComponent', () => {
  let component: EstadoVzlaComponent;
  let fixture: ComponentFixture<EstadoVzlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoVzlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoVzlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
