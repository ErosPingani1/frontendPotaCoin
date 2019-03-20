import { ModalController, NavController } from '@ionic/angular';

import { Component, OnInit } from '@angular/core';
import { InserisciscontrinoPage } from './inserisciscontrino/inserisciscontrino.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public modalController: ModalController, public navController: NavController) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: InserisciscontrinoPage,
    });
    return await modal.present();
  }

  ngOnInit() {
    this.tryConnection();
  }
  tryConnection(): any {
    //TODO implementare chiamata al backend
  }

}