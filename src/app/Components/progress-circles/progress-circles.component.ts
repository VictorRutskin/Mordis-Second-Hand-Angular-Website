import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-circles',
  templateUrl: './progress-circles.component.html',
  styleUrls: ['./progress-circles.component.scss']
})
export class ProgressCirclesComponent {
@Input() MarkedCircle= 0;
}
