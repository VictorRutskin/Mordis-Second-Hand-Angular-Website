import { Component } from '@angular/core';

@Component({
  selector: 'app-item-courusel',
  templateUrl: './item-courusel.component.html',
  styleUrls: ['./item-courusel.component.scss']
})
export class ItemCouruselComponent {

  products = [
    {
      Title: 'iPhone 13 pro',
      Desc: 'Selling my iPhone, brand new conditi...',
      Image: '../assets/Images/ItemsImages/Iphone.png',
      Price: 499,
      PostDate: '12/02',
    },
    {
      Title: 'Product 2',
      Desc: 'This is product 2',
      Image: '../assets/Images/ItemsImages/NationalShoes.png',
      Price: 19.99,
      PostDate: '23/01',
    },
    {
      Title: 'Product 2',
      Desc: 'This is product 2',
      Image: '../assets/Images/ItemsImages/VintageTableOrSomething.png',
      Price: 19.99,
      PostDate: '23/01',
    },
    {
      Title: 'Product 2',
      Desc: 'This is product 2',
      Image: '../assets/Images/ItemsImages/NationalShoes.png',
      Price: 19.99,
      PostDate: '23/01',
    },
    ];
}
