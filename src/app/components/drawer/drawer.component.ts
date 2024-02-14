import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent {

  @ViewChild('drawer', { read: ElementRef }) drawer!: ElementRef;
	@Output() openState: EventEmitter<boolean> = new EventEmitter();

	title = '';

  constructor() { }

  openDrawer(title: string) {
		this.title = title;
		const drawer = this.drawer.nativeElement;
		drawer.style.transition = '.2s ease-in';
		drawer.style.transform = `translateY(-300px) `;
		this.openState.emit(true);
	}

	closeDrawer() {
		const drawer = this.drawer.nativeElement;
		drawer.style.transition = '.2s ease-out';
		drawer.style.transform = '';
		this.openState.emit(false);
	}

}
