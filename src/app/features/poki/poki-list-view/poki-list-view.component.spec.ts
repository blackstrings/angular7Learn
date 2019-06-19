import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokiListViewComponent } from './poki-list-view.component';

describe('PokiListViewComponent', () => {
  let component: PokiListViewComponent;
  let fixture: ComponentFixture<PokiListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokiListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokiListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
