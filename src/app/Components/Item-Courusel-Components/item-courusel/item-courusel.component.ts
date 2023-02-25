import { Component } from '@angular/core';
import Contact from 'src/Models/Contact.model';
import Item from 'src/Models/Item.model';

@Component({
  selector: 'app-item-courusel',
  templateUrl: './item-courusel.component.html',
  styleUrls: ['./item-courusel.component.scss'],
})
export class ItemCouruselComponent {
  Contact1: Contact = new Contact("Shay Eshel",555555555,"quennshay@gmail.com");
  Contact2: Contact = new Contact("fella guy",666666666,"fellaoftheguy@gmail.com");
  Contact3: Contact = new Contact("Tomer Shevach",77777777,"thetomerheuheu11@gmail.com");
  Contact4: Contact = new Contact("Israel Israeli",888888888,"123iloveisrael123@gmail.com");

  products: Item[] = [
    new Item(
      'iPhone 13 pro',
      'Selling my iPhone, brand new conditi...',
      '../assets/Images/ItemsImages/Iphone.png',
      499,
      '12/02',
      'Afula',
      'Electronics',
      'New',
      ['../assets/Images/ItemsImages/Iphone.png'],
      this.Contact1,
    ),
    new Item(
      '  vans x nation...',
      '  Limited edition vans x nat geo sk8 hi. U...      ',
      '../assets/Images/ItemsImages/NationalShoes.png',
      40,
      '23/01',
      'Afula',
      'Clothing',
      'Slightly used',
      ['../assets/Images/ItemsImages/NationalShoes.png'],
      this.Contact2,
    ),
    new Item(
      '  Vintage night...      ',
      '  French provincial nightstand. Good con...      ',
      '../assets/Images/ItemsImages/VintageTableOrSomething.png',
      85,
      '13/04',
      'Bney Brak',
      'Furniture',
      'Ancient',
      ['../assets/Images/ItemsImages/VintageTableOrSomething.png'],
      this.Contact3,

    ),
    new Item(
      'Playstation2',
      'Nice Console',
      '../assets/Images/ItemsImages/NationalShoes.png',
      120,
      '03/11',
      'Tel-Aviv',
      'Other',
      'New',
      ['../assets/Images/ItemsImages/NationalShoes.png'],
      this.Contact4,

    ),
  ];
}
