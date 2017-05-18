import { Component } from '@angular/core';
import { hotels } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public title: string = 'Hot Weather Widget';
	public hotels: hotel[] = hotels;
	public stars: string[] = ['all','3', '4', '5'];
	public starsQty: string;
	constructor(){}
	public selectedHotel: hotel = this.hotels[0];
	public onSelect(index: number): void {
		this.selectedHotel = this.hotels[index];
	}
}
