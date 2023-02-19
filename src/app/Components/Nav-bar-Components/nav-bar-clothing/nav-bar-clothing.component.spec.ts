import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarClothingComponent } from './nav-bar-clothing.component';

describe('NavBarClothingComponent', () => {
  let component: NavBarClothingComponent;
  let fixture: ComponentFixture<NavBarClothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarClothingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
