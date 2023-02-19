import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-inside-tab',
  templateUrl: './navbar-inside-tab.component.html',
  styleUrls: ['./navbar-inside-tab.component.scss']
})
export class NavbarInsideTabComponent {
  @Input() InsideText: string = "";
}
