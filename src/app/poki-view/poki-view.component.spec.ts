import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokiViewComponent } from './poki-view.component';

describe('PokiViewComponent', () => {
  let component: PokiViewComponent;
  let fixture: ComponentFixture<PokiViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokiViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
