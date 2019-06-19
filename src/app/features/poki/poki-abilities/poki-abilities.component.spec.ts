import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokiAbilitiesComponent } from './poki-abilities.component';

describe('PokiAbilitiesComponent', () => {
  let component: PokiAbilitiesComponent;
  let fixture: ComponentFixture<PokiAbilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokiAbilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokiAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
