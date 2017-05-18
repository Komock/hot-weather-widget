import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teddy-bear',
  templateUrl: './teddy-bear.component.html',
  styleUrls: ['./teddy-bear.component.css']
})
export class TeddyBearComponent {
	@Input()
	public selectedHotel: hotel;
	public constructor() { }
}
