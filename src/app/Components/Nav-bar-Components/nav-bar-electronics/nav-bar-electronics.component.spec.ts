import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarElectronicsComponent } from './nav-bar-electronics.component';

describe('NavBarElectronicsComponent', () => {
  let component: NavBarElectronicsComponent;
  let fixture: ComponentFixture<NavBarElectronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarElectronicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarElectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
