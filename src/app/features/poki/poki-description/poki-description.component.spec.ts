import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokiDescriptionComponent } from './poki-description.component';

describe('PokiDescriptionComponent', () => {
  let component: PokiDescriptionComponent;
  let fixture: ComponentFixture<PokiDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokiDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokiDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
