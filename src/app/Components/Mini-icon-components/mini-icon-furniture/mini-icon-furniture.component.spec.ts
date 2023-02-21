import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniIconFurnitureComponent } from './mini-icon-furniture.component';

describe('MiniIconFurnitureComponent', () => {
  let component: MiniIconFurnitureComponent;
  let fixture: ComponentFixture<MiniIconFurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniIconFurnitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniIconFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
