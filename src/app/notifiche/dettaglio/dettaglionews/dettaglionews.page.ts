import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dettaglionews',
  templateUrl: './dettaglionews.page.html',
  styleUrls: ['./dettaglionews.page.scss'],
})
export class DettaglionewsPage implements OnInit {

  //Lettura del valore news passato tramite props
  @Input() news: any;

  constructor(private modalCtrl: ModalController) {}

  closemodal() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
    console.log(this.news)
  }

}
