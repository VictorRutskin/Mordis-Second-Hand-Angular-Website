import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniIconComponent } from './mini-icon.component';

describe('MiniIconComponent', () => {
  let component: MiniIconComponent;
  let fixture: ComponentFixture<MiniIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
