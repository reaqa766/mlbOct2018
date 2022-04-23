import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosTeamsComponent } from './resultados-teams.component';

describe('ResultadosTeamsComponent', () => {
  let component: ResultadosTeamsComponent;
  let fixture: ComponentFixture<ResultadosTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
