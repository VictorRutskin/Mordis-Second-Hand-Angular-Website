import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageTitle1Component } from './main-page-title1.component';

describe('MainPageTitle1Component', () => {
  let component: MainPageTitle1Component;
  let fixture: ComponentFixture<MainPageTitle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageTitle1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageTitle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
