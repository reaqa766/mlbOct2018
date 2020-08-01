import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcumuladoQuinielaComponent } from './acumulado-quiniela.component';

describe('AcumuladoQuinielaComponent', () => {
  let component: AcumuladoQuinielaComponent;
  let fixture: ComponentFixture<AcumuladoQuinielaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcumuladoQuinielaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcumuladoQuinielaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
