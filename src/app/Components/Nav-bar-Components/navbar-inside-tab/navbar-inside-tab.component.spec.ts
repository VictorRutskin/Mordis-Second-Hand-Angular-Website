import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarInsideTabComponent } from './navbar-inside-tab.component';

describe('NavbarInsideTabComponent', () => {
  let component: NavbarInsideTabComponent;
  let fixture: ComponentFixture<NavbarInsideTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarInsideTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarInsideTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
