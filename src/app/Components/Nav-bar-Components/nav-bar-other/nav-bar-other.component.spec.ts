import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarOtherComponent } from './nav-bar-other.component';

describe('NavBarOtherComponent', () => {
  let component: NavBarOtherComponent;
  let fixture: ComponentFixture<NavBarOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarOtherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
