import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokiSearchComponent } from './poki-search.component';

describe('PokiSearchComponent', () => {
  let component: PokiSearchComponent;
  let fixture: ComponentFixture<PokiSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokiSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
