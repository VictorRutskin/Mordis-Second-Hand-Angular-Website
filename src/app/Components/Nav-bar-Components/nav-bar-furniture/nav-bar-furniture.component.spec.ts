import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarFurnitureComponent } from './nav-bar-furniture.component';

describe('NavBarFurnitureComponent', () => {
  let component: NavBarFurnitureComponent;
  let fixture: ComponentFixture<NavBarFurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarFurnitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
