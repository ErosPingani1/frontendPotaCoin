import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dettaglioesercente',
  templateUrl: './dettaglioesercente.page.html',
  styleUrls: ['./dettaglioesercente.page.scss'],
})
export class DettaglioesercentePage implements OnInit {

  //Lettura del valore esercente passato tramite props
  @Input() esercente: any;

  public lat;
  public lng;

  constructor(private modalCtrl: ModalController) {
  }

  closemodal() {
    this.modalCtrl.dismiss();
  }

  //Metodo che prepara latitudine e longitudine in modo da averle divise per poter creare la map nel modal di dettaglio esercente
  coordLatLng() {
    let coordinates = this.esercente.coordinate;
    var latlng = coordinates.split(",");
    console.log(latlng);
    this.lat = latlng[0];
    this.lng = latlng[1];
  }

  ngOnInit() {
    console.log(this.esercente);
    this.coordLatLng();
  }

}
