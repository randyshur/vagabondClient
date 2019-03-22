import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLandmarksComponent } from './admin-landmarks.component';

describe('AdminLandmarksComponent', () => {
  let component: AdminLandmarksComponent;
  let fixture: ComponentFixture<AdminLandmarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLandmarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLandmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
