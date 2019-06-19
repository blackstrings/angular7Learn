import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokiComponent } from './poki.component';

describe('PokiComponent', () => {
  let component: PokiComponent;
  let fixture: ComponentFixture<PokiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
