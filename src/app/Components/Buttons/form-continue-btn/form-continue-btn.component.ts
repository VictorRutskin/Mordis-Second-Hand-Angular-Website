import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-continue-btn',
  templateUrl: './form-continue-btn.component.html',
  styleUrls: ['./form-continue-btn.component.scss']
})
export class FormContinueBTNComponent {
@Input() text="CONTINUE";
}
