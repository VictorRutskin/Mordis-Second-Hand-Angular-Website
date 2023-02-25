import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFinishPageComponent } from './add-finish-page.component';

describe('AddFinishPageComponent', () => {
  let component: AddFinishPageComponent;
  let fixture: ComponentFixture<AddFinishPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFinishPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFinishPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
