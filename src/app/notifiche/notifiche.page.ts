import { DettaglionewsPage } from './dettaglio/dettaglionews/dettaglionews.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notifiche',
  templateUrl: './notifiche.page.html',
  styleUrls: ['./notifiche.page.scss'],
})
export class NotifichePage implements OnInit {

  news: any = [];

  constructor(public modalController: ModalController) {}

  async presentModal(notiziaPassata: Notizia) {
    let notizia = new Notizia(notiziaPassata.titolo, notiziaPassata.descrizione, notiziaPassata.data, notiziaPassata.id);
    const modal = await this.modalController.create({
      component: DettaglionewsPage,
      componentProps: { 'news': notizia },
      cssClass: 'customModal'
    });
    return await modal.present();
  }

  creaDaJson() {

    //ForEach che salva il valore del json nella lista
    fetch('assets/json/NewsMockate.json')
    .then(r => r.json())
    .then(j => { 
      for (let i of j) {
        this.news.push(i);
      }
    });

    console.log(this.news);

  }

  ngOnInit() {
    this.creaDaJson();
  }

}

export class Notizia {

  titolo: string;
  descrizione: string;
  data: string;
  id: number;

  constructor(titolo: string, descrizione: string, data: string, id: number) {
    this.titolo = titolo;
    this.descrizione = descrizione;
    this.data = data;
    this.id = id;
  }

}
