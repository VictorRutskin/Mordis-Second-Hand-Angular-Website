import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContinueBTNComponent } from './form-continue-btn.component';

describe('FormContinueBTNComponent', () => {
  let component: FormContinueBTNComponent;
  let fixture: ComponentFixture<FormContinueBTNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormContinueBTNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormContinueBTNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
