import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-element-left',
  templateUrl: './element-left.component.html',
  styleUrls: ['./element-left.component.css']
})
export class ElementLeftComponent {

  @Input()
  public hotels: hotel[];

  @Input()
  public stars: string[];

  @Input()
  public selectedHotel: hotel;

  public selectedStarsTab: number = 0;

  public starsQty: string;

  public selectHotel(e: any): void {
  	e.preventDefault();
    let id = Number(e.currentTarget.dataset.id);
  	this.onSelect.emit(id);
  }

  @Output()
  public onSelect: EventEmitter<number> = new EventEmitter();

  public filterHotels(e: MouseEvent, index): void {
  	e.preventDefault();
  	this.selectedStarsTab = index;
  	this.starsQty = e.srcElement.textContent;
  }

  public constructor() { }

}
