import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokiStatsComponent } from './poki-stats.component';

describe('PokiStatsComponent', () => {
  let component: PokiStatsComponent;
  let fixture: ComponentFixture<PokiStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokiStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokiStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
