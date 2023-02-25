import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Item from 'src/Models/Item.model';

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

  item: Item | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const itemId = this.route.snapshot.paramMap.get('id');
    // You can use this itemId to fetch the item data from your API or service
    // and assign it to the 'item' property of this component
  }
}
