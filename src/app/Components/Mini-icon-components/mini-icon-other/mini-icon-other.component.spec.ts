import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniIconOtherComponent } from './mini-icon-other.component';

describe('MiniIconOtherComponent', () => {
  let component: MiniIconOtherComponent;
  let fixture: ComponentFixture<MiniIconOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniIconOtherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniIconOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
