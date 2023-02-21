import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageTitle2Component } from './main-page-title2.component';

describe('MainPageTitle2Component', () => {
  let component: MainPageTitle2Component;
  let fixture: ComponentFixture<MainPageTitle2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageTitle2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageTitle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
