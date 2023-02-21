import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniIconClothingComponent } from './mini-icon-clothing.component';

describe('MiniIconClothingComponent', () => {
  let component: MiniIconClothingComponent;
  let fixture: ComponentFixture<MiniIconClothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniIconClothingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniIconClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
