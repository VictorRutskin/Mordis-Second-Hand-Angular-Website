import { Component } from '@angular/core';
import Item from 'src/Models/Item.model';

@Component({
  selector: 'app-item-courusel',
  templateUrl: './item-courusel.component.html',
  styleUrls: ['./item-courusel.component.scss'],
})
export class ItemCouruselComponent {
  products: Item[] = [
    new Item(
      'iPhone 13 pro',
      'Selling my iPhone, brand new conditi...',
      '../assets/Images/ItemsImages/Iphone.png',
      499,
      '12/02',
      'Shay Eshel',
      'Afula',
      ['../assets/Images/ItemsImages/Iphone.png'],

    ),
    new Item(
      '  vans x nation...',
      '  Limited edition vans x nat geo sk8 hi. U...      ',
      '../assets/Images/ItemsImages/NationalShoes.png',
      40,
      '23/01',
      'Tomer Shevach',
      'Afula',
      ['../assets/Images/ItemsImages/NationalShoes.png'],
    ),
    new Item(
      '  Vintage night...      ',
      '  French provincial nightstand. Good con...      ',
      '../assets/Images/ItemsImages/VintageTableOrSomething.png',
      85,
      '13/04',
      'Elmory Grunt',
      'Bney Brak',
      ['../assets/Images/ItemsImages/VintageTableOrSomething.png'],

    ),
    new Item(
      'Playstation2',
      'Nice Console',
      '../assets/Images/ItemsImages/NationalShoes.png',
      120,
      '03/11',
      'Israel Israeli',
      'Tel-Aviv',
      ['../assets/Images/ItemsImages/NationalShoes.png'],

    ),
  ];
}
