import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniIconElectronicsComponent } from './mini-icon-electronics.component';

describe('MiniIconElectronicsComponent', () => {
  let component: MiniIconElectronicsComponent;
  let fixture: ComponentFixture<MiniIconElectronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniIconElectronicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniIconElectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
