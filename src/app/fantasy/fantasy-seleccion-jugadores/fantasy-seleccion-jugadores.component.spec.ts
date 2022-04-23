import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasySeleccionJugadoresComponent } from './fantasy-seleccion-jugadores.component';

describe('FantasySeleccionJugadoresComponent', () => {
  let component: FantasySeleccionJugadoresComponent;
  let fixture: ComponentFixture<FantasySeleccionJugadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FantasySeleccionJugadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FantasySeleccionJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
