import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductPage2Component } from './add-product-page2.component';

describe('AddProductPage2Component', () => {
  let component: AddProductPage2Component;
  let fixture: ComponentFixture<AddProductPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductPage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
