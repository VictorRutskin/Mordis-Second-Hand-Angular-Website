import { Component, Input } from '@angular/core';
import { ItemService } from 'src/app/Services/item-service/item.service';
import Item from 'src/Models/Item.model';

@Component({
  selector: 'app-single-courusel-item',
  templateUrl: './single-courusel-item.component.html',
  styleUrls: ['./single-courusel-item.component.scss'],
})
export class SingleCouruselItemComponent {
  item: Item | undefined;

  @Input() Title: string | undefined;
  @Input() Desc: string | undefined;
  @Input() Image: string | undefined;
  @Input() Price: number | undefined;
  @Input() PostDate: string | undefined;
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
