import { Pipe, PipeTransform } from '@angular/core';

import { ElementLeftComponent } from '../../element-left/element-left.component';

@Pipe({
  name: 'filterByStars'
})
export class FilterByStarsPipe implements PipeTransform {

  public transform(hotels: hotel[], starsQty:string, onSelect: any): hotel[] {
  	if(!starsQty || starsQty === 'all') return hotels;
    return hotels.filter((hotel, i)=>{
    	return hotel.stars === starsQty;
     });
  }

}
