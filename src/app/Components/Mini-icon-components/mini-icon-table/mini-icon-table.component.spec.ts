import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniIconTableComponent } from './mini-icon-table.component';

describe('MiniIconTableComponent', () => {
  let component: MiniIconTableComponent;
  let fixture: ComponentFixture<MiniIconTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniIconTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniIconTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
