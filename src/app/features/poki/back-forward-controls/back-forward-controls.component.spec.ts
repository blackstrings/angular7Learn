import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackForwardControlsComponent } from './my-nav.component';

describe('MyNavComponent', () => {
  let component: BackForwardControlsComponent;
  let fixture: ComponentFixture<BackForwardControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackForwardControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackForwardControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
