import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAddListingComponent } from './navbar-add-listing.component';

describe('NavbarAddListingComponent', () => {
  let component: NavbarAddListingComponent;
  let fixture: ComponentFixture<NavbarAddListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarAddListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarAddListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
