import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallTextTemplateComponent } from './small-text-template.component';

describe('SmallTextTemplateComponent', () => {
  let component: SmallTextTemplateComponent;
  let fixture: ComponentFixture<SmallTextTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallTextTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallTextTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
