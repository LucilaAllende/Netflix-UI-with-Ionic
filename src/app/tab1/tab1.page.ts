import { Component } from '@angular/core';
import homeData from '../../assets/mockdata/home.json';
import { ModalController } from '@ionic/angular';
import { DrawerService } from '../services/drawer.service';
import { ModalPage } from '../modal/modal.page';

interface ISerie {
  id: number;
  title?: string;
  season?: string;
  progress?: number;
}

interface ISection {
  title: string;
  type: string;
  series: ISerie[];
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  sections: ISection[] = homeData.sections;
	spotlight = homeData.spotlight;

  constructor(private modalCtrl: ModalController, private drawerService: DrawerService) {}

  async openCategories() {
    console.log('openCategories');
		const modal = await this.modalCtrl.create({
			component: ModalPage,
			cssClass: 'transparent-modal',
		});

		await modal.present();
	}

  openInfo(serie: ISerie){
    this.drawerService.openDrawer(serie.title || '');
  }

}
