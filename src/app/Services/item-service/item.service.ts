import Item from 'src/Models/Item.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import products from 'src/Models/ItemData.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  getItemById(itemId: string): Item | undefined {
    return this.items.find(item => item.ID === Number(itemId));
  }
  
  items: Item[] = products;

  constructor() { }

  getItem(id: number): Observable<Item | null> {
    const item = this.items.find((item) => item.ID === id);
    return item ? of(item) : of(null);
  }
}
