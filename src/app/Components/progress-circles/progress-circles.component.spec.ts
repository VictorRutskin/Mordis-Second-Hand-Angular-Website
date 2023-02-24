import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressCirclesComponent } from './progress-circles.component';

describe('ProgressCirclesComponent', () => {
  let component: ProgressCirclesComponent;
  let fixture: ComponentFixture<ProgressCirclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressCirclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressCirclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
