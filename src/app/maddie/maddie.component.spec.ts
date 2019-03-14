import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaddieComponent } from './maddie.component';

describe('MaddieComponent', () => {
  let component: MaddieComponent;
  let fixture: ComponentFixture<MaddieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaddieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaddieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
