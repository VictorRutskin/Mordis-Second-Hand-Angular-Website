import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent {
@Input() descText="Limited edition vans x nat geo SK8 hi. Used only 5 times.Very comfy and durable shoe overall.";
@Input() imageSrc="../assets/Images/ItemsImages/NationalShoes.png";
@Input() title="Vans X National Geographic SK8";
@Input() price="40";
@Input() date="20/05";
@Input() location="Afula";
@Input() publisher="Tomer";
}
