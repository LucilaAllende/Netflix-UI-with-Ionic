import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface DrawerState {
  open: boolean;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  drawerOpen = new BehaviorSubject<DrawerState | null>(null);

	constructor() {}

	openDrawer(title: string) {
		this.drawerOpen.next({ open: true, title });
	}
}
