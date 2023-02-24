import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductPage1Component } from './add-product-page1.component';

describe('AddProductPage1Component', () => {
  let component: AddProductPage1Component;
  let fixture: ComponentFixture<AddProductPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductPage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
