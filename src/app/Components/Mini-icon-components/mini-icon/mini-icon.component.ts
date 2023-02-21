import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-icon',
  templateUrl: './mini-icon.component.html',
  styleUrls: ['./mini-icon.component.scss'],
})
export class MiniIconComponent {
  @Input() InsideText: string = '';
  @Input() SvgPath: string = '';
  @Input() ClassValue: string = '';
}
