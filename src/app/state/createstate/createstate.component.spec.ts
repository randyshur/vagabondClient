import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatestateComponent } from './createstate.component';

describe('CreatestateComponent', () => {
  let component: CreatestateComponent;
  let fixture: ComponentFixture<CreatestateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatestateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
