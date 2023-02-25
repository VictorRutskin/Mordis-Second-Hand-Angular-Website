import { Component, Input } from '@angular/core';
import Item from 'src/Models/Item.model';
import products from 'src/Models/ItemData.model';

@Component({
  selector: 'app-items-template-page',
  templateUrl: './items-template-page.component.html',
  styleUrls: ['./items-template-page.component.scss']
})
export class ItemsTemplatePageComponent {
  items: Item[] = products;

  @Input() category="";

}
