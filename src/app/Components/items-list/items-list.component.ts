import { Component, Input } from '@angular/core';
import { ItemService } from 'src/app/Services/item-service/item.service';
import Item from 'src/Models/Item.model';
import products  from 'src/Models/ItemData.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent {
  products: Item[] = products;
  item: Item | undefined;


  @Input() imageSrc = 'imagesrc';
  @Input() name = 'name';
  @Input() description = 'description';
  @Input() date = 'date';
  @Input() location = 'location';
  @Input() price = 10;
  @Input() id: number | undefined;

  @Input() itemId= "";

  /// add future feature that it redirects to the category page //////////////////////////
  routerlink = '';

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.routerlink = '/item/' + this.id;

    
    if (this.item) {
      const item = this.itemService.getItemById(this.itemId);
      if (item) {
        this.item = item;
      } 
    } 
  }

}
