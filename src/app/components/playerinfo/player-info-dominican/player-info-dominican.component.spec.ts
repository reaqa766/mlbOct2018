import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerInfoDominicanComponent } from './player-info-dominican.component';

describe('PlayerInfoDominicanComponent', () => {
  let component: PlayerInfoDominicanComponent;
  let fixture: ComponentFixture<PlayerInfoDominicanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerInfoDominicanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerInfoDominicanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
