import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsTemplatePageComponent } from './items-template-page.component';

describe('ItemsTemplatePageComponent', () => {
  let component: ItemsTemplatePageComponent;
  let fixture: ComponentFixture<ItemsTemplatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsTemplatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsTemplatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
