import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarManComponent } from './navbar-man.component';

describe('NavbarManComponent', () => {
  let component: NavbarManComponent;
  let fixture: ComponentFixture<NavbarManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarManComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
