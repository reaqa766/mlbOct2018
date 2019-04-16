import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosTeamsAyerComponent } from './resultados-teams-ayer.component';

describe('ResultadosTeamsAyerComponent', () => {
  let component: ResultadosTeamsAyerComponent;
  let fixture: ComponentFixture<ResultadosTeamsAyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosTeamsAyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosTeamsAyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
