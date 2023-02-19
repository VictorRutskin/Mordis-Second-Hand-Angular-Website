import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarHeartComponent } from './navbar-heart.component';

describe('NavbarHeartComponent', () => {
  let component: NavbarHeartComponent;
  let fixture: ComponentFixture<NavbarHeartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarHeartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarHeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
