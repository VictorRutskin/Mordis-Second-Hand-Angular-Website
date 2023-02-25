import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCouruselComponent } from './item-courusel.component';

describe('ItemCouruselComponent', () => {
  let component: ItemCouruselComponent;
  let fixture: ComponentFixture<ItemCouruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemCouruselComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemCouruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
