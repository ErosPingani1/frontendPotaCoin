import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dettaglioesercente',
  templateUrl: './dettaglioesercente.page.html',
  styleUrls: ['./dettaglioesercente.page.scss'],
})
export class DettaglioesercentePage implements OnInit {

  //Lettura del valore esercente passato tramite props
  @Input() esercente: any;

  constructor(private modalCtrl: ModalController) {}

  closemodal() {

    this.modalCtrl.dismiss();

  }

  ngOnInit() {
    console.log(this.esercente)
  }

}
