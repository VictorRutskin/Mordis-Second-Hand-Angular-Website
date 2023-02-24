import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-circles',
  templateUrl: './progress-circles.component.html',
  styleUrls: ['./progress-circles.component.scss']
})
export class ProgressCirclesComponent {
// if value in html = 1 then 1 is marked etc..
@Input() MarkedCircle= 0;
}
