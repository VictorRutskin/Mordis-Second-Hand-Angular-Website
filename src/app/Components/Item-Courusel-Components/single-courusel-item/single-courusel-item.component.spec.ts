import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCouruselItemComponent } from './single-courusel-item.component';

describe('SingleCouruselItemComponent', () => {
  let component: SingleCouruselItemComponent;
  let fixture: ComponentFixture<SingleCouruselItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleCouruselItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleCouruselItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
