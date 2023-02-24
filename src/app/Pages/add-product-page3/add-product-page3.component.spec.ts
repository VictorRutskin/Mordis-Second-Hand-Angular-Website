import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductPage3Component } from './add-product-page3.component';

describe('AddProductPage3Component', () => {
  let component: AddProductPage3Component;
  let fixture: ComponentFixture<AddProductPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductPage3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
