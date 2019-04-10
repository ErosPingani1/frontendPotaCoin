import { DettaglionewsPage } from './dettaglio/dettaglionews/dettaglionews.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notizie',
  templateUrl: './notizie.page.html',
  styleUrls: ['./notizie.page.scss'],
})
export class NotiziePage implements OnInit {

  news: any = [];

    constructor(public modalController: ModalController) {
    }

    async presentModal(notiziaPassata: Notizia) {
        let notizia = new Notizia(notiziaPassata.titolo, notiziaPassata.descrizione, notiziaPassata.data, notiziaPassata.id);
        const modal = await this.modalController.create({
            component: DettaglionewsPage,
            componentProps: {'news': notizia},
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
