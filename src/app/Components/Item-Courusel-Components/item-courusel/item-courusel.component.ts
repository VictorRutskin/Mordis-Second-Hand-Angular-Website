import products from 'src/Models/ItemData.model';
import { Component } from '@angular/core';
import Contact from 'src/Models/Contact.model';
import Item from 'src/Models/Item.model';

@Component({
  selector: 'app-item-courusel',
  templateUrl: './item-courusel.component.html',
  styleUrls: ['./item-courusel.component.scss'],
})
export class ItemCouruselComponent {
  products: Item[] = products;
}
