import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-small-text-template',
  templateUrl: './small-text-template.component.html',
  styleUrls: ['./small-text-template.component.scss']
})
export class SmallTextTemplateComponent {
@Input() Text ="add text";
}
