import { Component, Input } from '@angular/core';
import { ItemService } from 'src/app/Services/item-service/item.service';
import Contact from 'src/Models/Contact.model';
import Item from 'src/Models/Item.model';
import products from 'src/Models/ItemData.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss'],
})
export class SingleItemComponent {
  // @Input() descText =
  //   'Limited edition vans x nat geo SK8 hi. Used only 5 times.Very comfy and durable shoe overall.';
  // @Input() imageSrc = '../assets/Images/ItemsImages/NationalShoes.png';
  // @Input() title = 'Vans X National Geographic SK8';
  // @Input() price = '40';
  // @Input() date = '20/05';
  // @Input() location = 'Afula';
  // @Input() publisher = 'Tomer';
  products: Item[] = products;

  myContact = new Contact('contact', 88888888, 'email');
  myItem = new Item(
    'Item Title',
    'item description.',
    'image source',
    100,
    'date',
    'location',
    'Category',
    'Condition',
    ['image 2', 'image 3'],
    this.myContact
  );
  item = this.myItem;

  @Input() itemId = '';

  routerlink = '';

  constructor(private itemService: ItemService, private router: Router) {}


  deleteHandler(item: Item): void {
    const index = this.products.indexOf(item);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
  duplicateHandler(item: Item) {
    this.products.push({ ...item });
    this.router.navigate(['/']);
  }

  ngOnInit() {
    if (this.itemId) {
      const item = this.itemService.getItemById(this.itemId);
      if (item) {
        this.item = item;
      } else {
        this.item = this.myItem;
      }
    } else {
      this.item = this.myItem;
    }
    this.routerlink = '/item/' + this.itemId;

    if (this.item) {
      const item = this.itemService.getItemById(this.itemId);
      if (item) {
        this.item = item;
      }
    }
  }
}
