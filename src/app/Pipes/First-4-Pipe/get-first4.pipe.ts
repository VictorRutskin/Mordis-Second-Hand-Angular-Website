import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getFirst4',
})
export class GetFirst4Pipe implements PipeTransform {
  transform(products: any[]): any[] {
    if (!products) return [];
    return products.slice(0, 4);
  }
}
