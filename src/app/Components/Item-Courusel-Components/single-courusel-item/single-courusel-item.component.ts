import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-courusel-item',
  templateUrl: './single-courusel-item.component.html',
  styleUrls: ['./single-courusel-item.component.scss'],
})
export class SingleCouruselItemComponent {
  @Input() Title: string | undefined;
  @Input() Desc: string | undefined;
  @Input() Image: string | undefined;
  @Input() Price: number | undefined;
  @Input() PostDate: string | undefined;
}