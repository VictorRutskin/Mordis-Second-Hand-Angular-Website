import { Component } from '@angular/core';
import Item from 'src/Models/Item.model';
import products  from 'src/Models/ItemData.model';

@Component({
  selector: 'app-clothing-page',
  templateUrl: './clothing-page.component.html',
  styleUrls: ['./clothing-page.component.scss']
})
export class ClothingPageComponent {
  items: Item[] = products;

}
