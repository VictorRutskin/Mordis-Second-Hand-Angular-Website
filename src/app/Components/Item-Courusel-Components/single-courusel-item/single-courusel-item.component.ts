import { Component, Input } from '@angular/core';
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

  routerlink = '/Clothing';

  ngOnInit() {
    this.routerlink = '/item/' + this.id;
  }
}
