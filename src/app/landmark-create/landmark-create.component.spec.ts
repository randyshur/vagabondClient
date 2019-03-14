import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandmarkCreateComponent } from './landmark-create.component';

describe('LandmarkCreateComponent', () => {
  let component: LandmarkCreateComponent;
  let fixture: ComponentFixture<LandmarkCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandmarkCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandmarkCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
