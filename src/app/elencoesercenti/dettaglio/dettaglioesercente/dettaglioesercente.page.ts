import { Component, OnInit, Input } from '@angular/core';
<<<<<<< HEAD
=======
import { ModalController } from '@ionic/angular';
>>>>>>> master

@Component({
  selector: 'app-dettaglioesercente',
  templateUrl: './dettaglioesercente.page.html',
  styleUrls: ['./dettaglioesercente.page.scss'],
})
export class DettaglioesercentePage implements OnInit {

  @Input() esercente: any;

  constructor() {}

  ngOnInit() {
    console.log(this.esercente)
  }

}
