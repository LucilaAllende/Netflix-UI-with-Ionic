import { Component, OnInit } from '@angular/core';
import categoryData from '../../assets/mockdata/categories.json';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {

	categories = categoryData;

  constructor(private modalCtrl: ModalController) { }

  dismiss() {
		this.modalCtrl.dismiss();
	}

}
