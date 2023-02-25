import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {
  @Input() name="name";
  @Input() description="description";
  @Input() date="date";
  @Input() location="location";
  @Input() price="price";
}
