import { Component, Input } from '@angular/core';
import { ItemService } from 'src/app/Services/item-service/item.service';
import Contact from 'src/Models/Contact.model';
import Item from 'src/Models/Item.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent {

  @Input() imageSrc = 'imagesrc';
  @Input() name = 'name';
  @Input() description = 'description';
  @Input() date = 'date';
  @Input() location = 'location';
  @Input() price = 10;
  @Input() id: number | undefined;
  
  /// add future feature that it redirects to the category page //////////////////////////
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

  constructor(private itemService: ItemService) {}

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

