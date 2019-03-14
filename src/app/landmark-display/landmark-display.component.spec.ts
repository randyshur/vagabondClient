import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandmarkDisplayComponent } from './landmark-display.component';

describe('LandmarkDisplayComponent', () => {
  let component: LandmarkDisplayComponent;
  let fixture: ComponentFixture<LandmarkDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandmarkDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandmarkDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
