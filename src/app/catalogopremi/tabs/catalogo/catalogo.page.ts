import {Component, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DettagliobuonoPage } from './dettagliobuono/dettagliobuono.page';
@Component({
    selector: 'app-catalogo',
    templateUrl: './catalogo.page.html',
    styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
    vauchers : Vaucher[] = [];
    urlCeru = "http://localhost:8080/potacoin/potacoinbackend/cliente/buoni/all";

    constructor(public modalController: ModalController) {

    }


    ngOnInit() {
        this. getAllBuoni();   
    }


    async getAllBuoni() {
        let risposta = await (await fetch(this.urlCeru, {
            headers: { 'Accept':'application/json', 'Content-Type': 'application/json'}, method: 'GET'})).json();
          console.log(risposta);
          this.vauchers = risposta.buoni;
    }


    async showDetailModal(buono: Vaucher){
      
    const modal = await this.modalController.create({
        component : DettagliobuonoPage,
      componentProps: { 'buonotobuy': buono },
      cssClass: 'customModal'
    });
    return await modal.present();
    }
}

export class Vaucher {

    id_buono: number;
    tipo_buono: string;
    scadenza_assoluta: string;
    scadenza: number;
    esercente: any;

    constructor(id_buono: number, tipo_buono: string, scadenza_assoluta: string, scadenza: number, esercente: any) {
        this.id_buono = id_buono;
        this.tipo_buono = tipo_buono;
        this.scadenza_assoluta = scadenza_assoluta;
        this.scadenza = scadenza;
        this.esercente = esercente;
    }

}
