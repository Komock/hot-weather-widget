import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByStars'
})
export class FilterByStarsPipe implements PipeTransform {

  public transform(hotels: hotel[], starsQty:string): hotel[] {
  	if(!starsQty || starsQty === 'all') return hotels;
    return hotels.filter(hotel=>{
    	return hotel.stars === starsQty;
     });
  }

}
